import React, { useRef } from 'react';
import './jobDescriptionPage2.scss';
import Wrapper from '../wrapper';
import { CHECK_ICON } from '../../icons';
import useIntersectionObserver from '../common/intersectionObserver';

const JobDescriptionPage2 = ({data}: any) => {
  const triggerRef = useRef<any>();

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.5,
    freezeOnceVisible: false
  });
  
  return (
    <Wrapper>
      <div className="jobDescription2_parentContainer" >
        <div className='jobDescription2_header' ref={triggerRef}>
          <h1 className={`section_title ${dataRef?.isIntersecting ? 'slide' : ''}`}>Responsiblities </h1>
        </div>
        {
          data.responsibilities.map((responsiblity: string, index: number) => (
            <div className='jobDescription2_bulletPoint' key={index} >
              <CHECK_ICON className='bulletPoint_icon'/>
              <p className='bulletPoint_data'>{responsiblity}</p>
            </div>
          ))
        }
      </div>
    </Wrapper>
  )
}

export default JobDescriptionPage2