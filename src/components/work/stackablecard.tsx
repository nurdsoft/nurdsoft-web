import "./stackablecard.scss"

import React, {useEffect, useRef} from 'react'

import Button from "../button";
import { navigate } from "gatsby";

interface IStackableCard {
  work: {
    img: any,
    caption: string;
    title: string;
    path: string;
    description: string;
  };
  index: number;
}

const StackableCard = ({work, index}: IStackableCard) => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const TOP_THRESHOLD = 150
  const BOTTOM_THRESHOLD = 200

  const handleStackScroll = (e: Event) => {
    const trigger = triggerRef.current as HTMLElement
    const cardDistFromTop = trigger.getBoundingClientRect().top
    if(cardDistFromTop < BOTTOM_THRESHOLD){
      const rotationPercentage = +(((BOTTOM_THRESHOLD - cardDistFromTop) / (BOTTOM_THRESHOLD - TOP_THRESHOLD)) * 100).toFixed(2)
      if(rotationPercentage <= 100){
        trigger.style.transform = index % 2 === 0 ? `rotate(${(4/100) * rotationPercentage}deg)` : `rotate(-${(2/100) * rotationPercentage}deg)`
      }
    }else{
      trigger.style.transform = `rotate(0deg)`
    }
  }

  const handleClick = () => {
    navigate(work.path)
  }

  useEffect(() => {
    const scroller = document.getElementById('parallaxWorkLayout')
    if(!scroller) return
    scroller.addEventListener('scroll', handleStackScroll)
  }, [])

  return (
    <div className="stackable-workCard" ref={triggerRef}>
      <div className="content">
        <div className="caption">
          {work.caption}
        </div>
        <div className="title">
          {work.title}
        </div>
        <div className="description">
          {work.description}
        </div>
        <Button onClick={handleClick} buttonText="View Work" />
      </div>
      <div className="img">
        <img src={work.img} alt="work" />
      </div>
    </div>
  )
}

export default StackableCard