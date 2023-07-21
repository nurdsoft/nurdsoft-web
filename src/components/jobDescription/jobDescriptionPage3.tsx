import React from 'react';
import './jobDescriptionPage3.scss';
import Wrapper from '../wrapper';
import { CHECK_ICON } from '../../icons';
import { FACEBOOK, GITHUB, LINKEDIN, TWITTER } from '../../icons';
import Button from '../button';


const JobDescriptionPage3 = ({data}: any) => {
  
  return (
    <Wrapper>
      <div className="jobDescription3_parentContainer" >
        <div className='jobDescription3_header'>
          <h1 className='section_title'>Requirements </h1>
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
            <div className='socialIcons_wrapper'>
              <FACEBOOK className='socialIcon' />
              <TWITTER className='socialIcon' />
              <LINKEDIN className='socialIcon' />
              <GITHUB className='socialIcon' />
            </div>
          </div>
        }
      </div>
    </Wrapper>
  )
}

export default JobDescriptionPage3