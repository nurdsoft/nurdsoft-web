import React, { useEffect, useRef } from "react";

import Button from "../button";
import { iconMap } from "../../jobData";
import { navigate } from "gatsby";

interface ICareerCard {
  data: Record<string, string | string[]>;
  dataKey: string;
  index: number;
}

const CareerCard = ({data, dataKey, index}: ICareerCard) => {

  const SVG = iconMap[data.icon as string]
  const triggerRef = useRef<HTMLDivElement>(null)
  const TOP_THRESHOLD = 160
  const BOTTOM_THRESHOLD = 200

  const handleStackScroll = () => {
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

  const handleViewDetails = (dataKey: string) => {
    navigate(`/career/${dataKey}`)
  }

  useEffect(() => {
    const scroller = document.getElementById('career_scroller')
    if(!scroller) return
    scroller.addEventListener('scroll', handleStackScroll)
  }, [])

  return (
    <>
      <div className="careerPage3_card" ref={triggerRef}>
        <div className="icon_container">
          <SVG className="careerCardIcon" />
        </div>
        <p className="jobPosition">{data.position}</p>
        <div className="otherInfo">
          <p className="location">Remote</p>
          <Button className="viewDetailButton" onClick={() => handleViewDetails(dataKey)} buttonText="VIEW DETAILS" />
        </div>
      </div>
    </>
  );
};

export default CareerCard;
