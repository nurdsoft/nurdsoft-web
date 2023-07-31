import React, { useRef } from 'react';
import './jobDescriptionPage3.scss';
import Wrapper from '../wrapper';
import { CHECK_ICON } from '../../icons';
import { FACEBOOK, GITHUB, LINKEDIN, TWITTER } from '../../icons';
import Button from '../button';
import useIntersectionObserver from '../common/intersectionObserver';


const JobDescriptionPage3 = ({data}: any) => {

  const triggerRef = useRef<any>();

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.5,
    freezeOnceVisible: false
  });

  const handleOpen = (url: string) => {
    window.open(url, '_blank');
  }
  
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
          <div className='applyNow_wrapper'>
            <Button buttonText='APPLY NOW' />
            <div className="socialIcons_wrapper">
              <div className="socialIcon" >
                <FACEBOOK
                  onClick={() => handleOpen("https://www.facebook.com/nurdsoft")}
                />
              </div>
              <div className="socialIcon" >
                <TWITTER
                  onClick={() => handleOpen("https://www.twitter.com/nurdsoft")}
                />
              </div>
              <div className="socialIcon" >
                <LINKEDIN
                  onClick={() =>
                    handleOpen("https://www.linkedin.com/company/nurdsoft")
                  }
                />
              </div>
              <div className="socialIcon" >
                <GITHUB
                  onClick={() => handleOpen("https://www.github.com/nurdsoft")}
                />
              </div>
            </div>
          </div>
        }
      </div>
    </Wrapper>
  )
}

export default JobDescriptionPage3