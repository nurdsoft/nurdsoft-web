import React from 'react';
import Wrapper from '../wrapper';
import './aboutPage2.scss';
import Button from '../button';

const AboutPage2 = () => {
  return (
    <Wrapper>
      <div className='aboutPage2_parentContainer'>
        <div className='description'>
          <p className='descriptionText'>Our team consists of warm, amazing and humble individuals who have worked for multiple Fortune 100 companies spanning across all major industries, playing an integral role in their success and scaling.</p>
          <Button buttonText="SCHEDULE CONSULTATION" />
        </div>
        <div className='companyStats'>
          <div className='stat'>
            <p className='statNumber'>17+</p>
            <p className='statLabel'>Talented People</p>
          </div>
          <div className='stat'>
            <p className='statNumber'>120+</p>
            <p className='statLabel'>Delivered Projects</p>
          </div>
          <div className='stat'>
            <p className='statNumber'>12+</p>
            <p className='statLabel'>Expertise years</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default AboutPage2