import React, { useEffect, useMemo, useRef, useState } from 'react'

import useIntersectionObserver from '../common/intersectionObserver';

interface ICounterBox {
  number: number;
  label: string;
  specialChar: string;
}
const CounterBox = ({number, label, specialChar}: ICounterBox) => {

  const triggerRef = useRef<any>()
  const [incrementingNum, setIncrementingNum] = useState(0)
  const incrementingNumRef = useRef<number>(0)
  const interval = useRef<any>()

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: [0.1, 0.8],
    freezeOnceVisible: false,
  });

  const handleIncrement = () => {
    setIncrementingNum(incrementingNumRef.current + 1)
    incrementingNumRef.current += 1 
    if(incrementingNumRef.current >= number){
      incrementingNumRef.current = number
      setIncrementingNum(number)
      clearInterval(interval.current)
      interval.current = null
    }
  }

  useEffect(() => {
    if(dataRef?.isIntersecting && dataRef.intersectionRatio === 1){
      interval.current = setInterval(handleIncrement, 10)
    }else if(
      (
        dataRef?.isIntersecting && 
        dataRef.intersectionRatio > 0 && 
        dataRef.intersectionRatio < 0.8 && 
        interval.current
      ) || (
        !dataRef?.isIntersecting
      )
    ){
      clearInterval(interval.current)
      interval.current = null
      setIncrementingNum(0)
      incrementingNumRef.current = 0
    }
  }, [dataRef?.isIntersecting, dataRef?.intersectionRatio])

  return (
    <div className='stat' ref={triggerRef}>
      <p className='statNumber'>{incrementingNum}{specialChar}</p>
      <p className='statLabel'>{label}</p>
    </div>
  )
}

export default CounterBox