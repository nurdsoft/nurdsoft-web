import React from 'react';
import './jobDescriptionPage2.scss';
import Wrapper from '../wrapper';
import { CHECK_ICON } from '../../icons';

const JobDescriptionPage2 = ({data}: any) => {
  
  return (
    <Wrapper>
      <div className="jobDescription2_parentContainer" >
        <div className='jobDescription2_header'>
          <h1 className='section_title'>Responsiblities </h1>
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