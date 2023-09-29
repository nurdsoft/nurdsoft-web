import './aboutPage2.scss';

import { BADGE_ICONS, CLIENT_STATISF_ICONS, DELIVERED_PROJ_ICONS } from '../../icons';
import React, { useMemo } from 'react';

import CounterBox from './CounterBox';
import Wrapper from '../wrapper';

const AboutPage2 = () => {
  const statsData = [
    {
      number: 100,
      label: "Client Satisfaction Ratio",
      specialChar: '%',
      icon: <CLIENT_STATISF_ICONS />
    },
    {
      number: 64,
      label: "Delivered Projects",
      specialChar: '+',
      icon: <DELIVERED_PROJ_ICONS />
    },
    {
      number: 20,
      label: "Years of Expertise",
      specialChar: '+',
      icon: <BADGE_ICONS />
    }
  ]
  
  return (
    <Wrapper id='aboutPage2_parentContainer' >
      <div className='aboutPage2_parentContainer' >
        <div className='description'>
          <p className='descriptionText'>Our team consists of warm, amazing and humble individuals who have worked for multiple Fortune 100 companies spanning across all major industries, playing an integral role in their success and scaling.</p>
          
        </div>
        <div className='companyStats'>
          {
            statsData.map((data, index) => (
              useMemo(() => <CounterBox 
              number={data.number} 
              label={data.label} 
              specialChar={data.specialChar} 
              key={index} 
              icon={data.icon}
            />, [])
            ))
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default AboutPage2