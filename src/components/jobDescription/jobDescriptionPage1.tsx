import React from 'react';
import './jobDescriptionPage1.scss';
import Wrapper from '../wrapper';
import { DROP_PIN_ICON } from '../../icons';

const jobDescriptionPage1 = ({data}: any) => {
  
  return (
    <Wrapper>
      <div className="jobDescription1_parentContainer" >
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
    </Wrapper>
  )
}

export default jobDescriptionPage1