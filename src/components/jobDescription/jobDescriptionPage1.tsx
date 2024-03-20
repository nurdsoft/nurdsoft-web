import './jobDescriptionPage1.scss';

import React, { useRef } from 'react';

import { DROP_PIN_ICON } from '../../icons';
import { Link } from 'gatsby';
import Wrapper from '../wrapper';

// import { iconMap } from '../../jobData';
// import useIntersectionObserver from '../common/intersectionObserver';

const jobDescriptionPage1 = ({data}: any) => {
  const triggerRef = useRef<any>();

  // const dataRef = useIntersectionObserver(triggerRef, {
  //   threshold: 0.5,
  //   freezeOnceVisible: false
  // });

  // const SVG = iconMap[data.icon as string]
  const capitalize = (s: string) => {
    const word = s.split(' ')
    let one = word[0].toLowerCase()
    console.log(one);
    
    if(one === "us") {
      one = one.toUpperCase()
    } else {
      one = one.charAt(0).toUpperCase() + one.slice(1)
    }
    if(word.length > 1){
      let two = word[1].toLowerCase()
      two = two.charAt(1).toUpperCase() + two.slice(2)
      return one + ' (' + two
    }
    return one
  }


  return (
    <Wrapper className='jobDescription1_wrapper'>
      <>
        <div className="jobDescription1_parentContainer" ref={triggerRef} >
          <div className='jobDescription1_header'>
            <p className='jobCategory'>
              <Link to='/career'>
                <span className='prevLink'>CAREER &gt;</span>
              </Link>
              {" "}
              {data.category}
            </p>
            <h1 className='jobPosition'>{data.position}</h1>
          </div>
          <div className='jobLocation_wrapper'>
            <DROP_PIN_ICON className='jobLocation_icon'/>
            <p className='jobLocation'>{capitalize(data.location)}</p>
          </div>
          <p className='jobAbout'>{data.about}</p>
        </div>
        {/* <div className={`abs_iconContainer ${dataRef?.isIntersecting ? '' : 'scale'}`}>
          <SVG className="careerCardIcon" fade={true} />
        </div> */}
      </>
    </Wrapper>
  )
}

export default jobDescriptionPage1