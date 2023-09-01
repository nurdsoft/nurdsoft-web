import './herosection.scss'

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import HeroDesignIcon from '../../images/heroDesignIcon.svg'
import HeroDevelopIcon from '../../images/heroDevelopIcon.svg'
import HeroOptimizeIcon from '../../images/heroOptimizeIcon.svg'
import HeroSettingsIcon from '../../images/heroSettingsIcon.svg'
import HeroSyncIcon from '../../images/heroSyncIcon.svg'
import NArrowLeft from '../../images/nleft.svg'
import NArrowRight from '../../images/nright.svg'
import Wrapper from '../wrapper'
import { useWindowSize } from '../common/screenSizeObserver'

const HeroSection = () => {

  if(typeof window === 'undefined' || typeof document === 'undefined') return <></>
  
  const [pageBlur, setPageBlur] = useState(false)
  const [width, height] = useWindowSize()

  // ref for fading child start
  const intervalRef = useRef<NodeJS.Timer[]>([])
  const timeoutRefOne = useRef<NodeJS.Timeout[]>([])
  const timeoutRefTwo = useRef<NodeJS.Timeout[]>([])
  // ref for fading child end

  // ref for fading child start
  const intervalGradRef = useRef<NodeJS.Timer[]>([])
  const timeoutGradRefOne = useRef<NodeJS.Timeout[]>([])
  const timeoutGradRefTwo = useRef<NodeJS.Timeout[]>([])
  // ref for fading child end

  const fadingChild = [
    {
      text: "build",
      img: HeroSettingsIcon
    },
    {
      text: "sync",
      img: HeroSyncIcon
    },
    {
      text: "develop",
      img: HeroDevelopIcon
    },
    {
      text: "optimize",
      img: HeroOptimizeIcon
    },
    {
      text: "design",
      img: HeroDesignIcon
    },
  ]

  // animation logic fro fading child start
  const intervalAnimation = (child: Element, index: number) => {
    const timeoutOne = setTimeout(() => {
      if(!document.hidden){
        child.classList.add('animate')
      }
      const timeoutTwo = setTimeout(() => {
        if(!document.hidden){
          child.classList.remove('animate')
        }
      }, 2000)
      timeoutRefTwo.current[index] = timeoutTwo
    }, index * 1000 * 1.5)
    timeoutRefOne.current[index] = timeoutOne
    return
  }

  useEffect(() => {
    const fadingChild = Array.from(document.getElementsByClassName('fading-child')[0].children)
    console.log("ran again");
    intervalRef.current.forEach((intervalId) => {
      clearInterval(intervalId)
    })
    timeoutRefOne.current.forEach((timeoutId) => {
      clearTimeout(timeoutId)
    })
    timeoutRefTwo.current.forEach((timeoutId) => {
      clearTimeout(timeoutId)
    })
    fadingChild.forEach((child, index) => {
      intervalAnimation(child, index)
      const intervalId = setInterval(() => {
        if(!document.hidden){
          intervalAnimation(child, index)
        }
      }, fadingChild.length * 1000 * 1.5 )
      intervalRef.current.push(intervalId)
    })
  }, [pageBlur])
  // animation logic for fading child end

  // animation logic for gradient animation text start
  const intervalGardientUpdate = (child: Element, index: number) => {
    const timeoutOne = setTimeout(() => {
      if(!document.hidden){
        child.classList.add('animate')
      }
      const timeoutTwo = setTimeout(() => {
        if(!document.hidden){
          child.classList.remove('animate')
        }
      }, 3000)
      timeoutGradRefTwo.current[index] = timeoutTwo
    }, index * 1000 * 3)
    timeoutGradRefOne.current[index] = timeoutOne
    return
  }

  useEffect(() => {
    const lineOne = Array.from(document.getElementsByClassName('lineOne')[0].children) as HTMLSpanElement[]
    console.log("ran again");
    intervalGradRef.current.forEach((intervalId) => {
      clearInterval(intervalId)
    })
    timeoutGradRefOne.current.forEach((timeoutId) => {
      clearTimeout(timeoutId)
    })
    timeoutGradRefTwo.current.forEach((timeoutId) => {
      clearTimeout(timeoutId)
    })
    lineOne.forEach((child, index) => {
      intervalGardientUpdate(child, index)
      const intervalId = setInterval(() => {
        if(!document.hidden){
          intervalGardientUpdate(child, index)
        }
      }, lineOne.length * 1000 * 3 )
      intervalGradRef.current.push(intervalId)
    })
  }, [pageBlur])
  // animation logic for gradient animation text end

  useLayoutEffect(() => {
    const codeArrowLeft = document.getElementById('codeArrowLeft')
    const codeArrowRight = document.getElementById('codeArrowRight')
    if(!codeArrowLeft || !codeArrowRight) return
    const documentWidth = (document.getElementsByClassName('herosection_parentContainer')[0] as HTMLDivElement).offsetWidth
    codeArrowLeft.style.transform = `translateX(${documentWidth/2 - 55}px)`
    codeArrowRight.style.transform = `translateX(-${documentWidth/2 - 55}px)`
  }, [width, height])

  useEffect(() => {
    if(!document.hidden && pageBlur){
      setPageBlur(false)
    }else if(document.hidden && !pageBlur){
      setPageBlur(true)
    }
  }, [])

  return (
    <Wrapper id='herosection_parentContainer'>
      <div className="herosection_parentContainer">
        <div className='hero_text'>
          <div className='arrow'>
            <img className='left' id='codeArrowLeft' src={NArrowLeft} alt='left' />
            <img className='right' id='codeArrowRight' src={NArrowRight} alt='right' />
          </div>
          <h1 className='lineOne'>
            <span>Software</span>
            <span>engineering</span>
            <span>studio</span>     
          </h1>
          <div className='animated-line'>
            <h1>we</h1>
            <div className='fading-child'>
              {
                fadingChild.map(({text, img}, _) => (
                  <h1>
                    {text}
                    <span><img src={img} alt='HeroSettingsIcons' /></span>
                  </h1>
                ))
              }
            </div>
          </div>
          <h1 className='lineThree'>stunning online experiences</h1>
        </div>
      </div>
    </Wrapper>
  )
}

export default HeroSection