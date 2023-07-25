import React from 'react';
import Wrapper from '../wrapper';
import './aboutPage2.scss';
import Button from '../button';

const AboutPage2 = () => {
  const statsData = [
    {
      number: 17,
      label: "Talented People"
    },
    {
      number: 120,
      label: "Delivered Projects"
    },
    {
      number: 12,
      label: "Expertise years"
    }
  ]
  return (
    <Wrapper id='aboutPage2_parentContainer' >
      <div className='aboutPage2_parentContainer' >
        <div className='description'>
          <p className='descriptionText'>Our team consists of warm, amazing and humble individuals who have worked for multiple Fortune 100 companies spanning across all major industries, playing an integral role in their success and scaling.</p>
          <Button buttonText="SCHEDULE CONSULTATION" />
        </div>
        <div className='companyStats'>
          {
            statsData.map((data, index) => (
              <div className='stat' key={index}>
                <p className='statNumber'>{data.number}+</p>
                <p className='statLabel'>{data.label}</p>
              </div>
            ))
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default AboutPage2