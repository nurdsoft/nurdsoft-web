import './aboutPage2.scss';

import React, { useMemo } from 'react';

import Button from '../button';
import CounterBox from './CounterBox';
import Wrapper from '../wrapper';

const AboutPage2 = () => {
  const statsData = [
    {
      number: 93,
      label: "Client Satisfaction Ratio",
      specialChar: '%'
    },
    {
      number: 64,
      label: "Delivered Projects",
      specialChar: '+'
    },
    {
      number: 12,
      label: "Years of Expertise",
      specialChar: '+'
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
              useMemo(() => <CounterBox 
              number={data.number} 
              label={data.label} 
              specialChar={data.specialChar} 
              key={index} 
            />, [])
            ))
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default AboutPage2