import React, { useRef } from 'react';
import './jobDescriptionPage3.scss';
import Wrapper from '../wrapper';
import { CHECK_ICON } from '../../icons';
import useIntersectionObserver from '../common/intersectionObserver';
import ApplyNowJD from './applyNowJD';


const JobDescriptionPage3 = ({data}: any) => {

  const triggerRef = useRef<any>();

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.5,
    freezeOnceVisible: false
  });
  
  return (
    <Wrapper>
      <div className="jobDescription3_parentContainer" >
        <div className='jobDescription3_header' ref={triggerRef}>
          <h1 className={`section_title ${dataRef?.isIntersecting ? 'slide' : ''}`}>Requirements </h1>
        </div>
        {
          data.requirements.map((requirement: string, index: number) => (
            <div className='jobDescription3_bulletPoint' key={index} >
              <CHECK_ICON className='bulletPoint_icon'/>
              <p className='bulletPoint_data'>{requirement}</p>
            </div>
          ))
        }
        {
          data?.qualities?.length ?
          <></>:
          <ApplyNowJD />
        }
      </div>
    </Wrapper>
  )
}

export default JobDescriptionPage3