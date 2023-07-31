import React, { useRef } from 'react';
import './jobDescriptionPage1.scss';
import Wrapper from '../wrapper';
import { DROP_PIN_ICON } from '../../icons';
import { iconMap } from '../../jobData';
import useIntersectionObserver from '../common/intersectionObserver';

const jobDescriptionPage1 = ({data}: any) => {
  const triggerRef = useRef<any>();

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.5,
    freezeOnceVisible: false
  });

  const SVG = iconMap[data.icon as string]

  return (
    <Wrapper className='jobDescription1_wrapper'>
      <>
        <div className="jobDescription1_parentContainer" ref={triggerRef} >
          <div className='jobDescription1_header'>
            <p className='jobCategory'>{data.category}</p>
            <h1 className='jobPosition'>{data.position}</h1>
          </div>
          <div className='jobLocation_wrapper'>
            <DROP_PIN_ICON className='jobLocation_icon'/>
            <p className='jobLocation'>{data.location}</p>
          </div>
          <p className='jobAbout'>{data.about}</p>
        </div>
        <div className={`abs_iconContainer ${dataRef?.isIntersecting ? '' : 'scale'}`}>
          <SVG className="careerCardIcon" fade={true} />
        </div>
      </>
    </Wrapper>
  )
}

export default jobDescriptionPage1