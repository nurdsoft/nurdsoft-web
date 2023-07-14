import React from 'react';
import './aboutPage1.scss';
import Wrapper from '../wrapper';

const AboutPage1 = () => {
  return (
    <Wrapper>
      <div className="aboutPage1_parentContainer">
        <h1 className="aboutPage1_heading">
          Life @<span className="blue">nurdsoft</span>
        </h1>
        <div className='companyDescription'>
          <p className='companyDescriptionText'>
            Nurdsoft is a software engineering studio specializing in bespoke software for businesses of all sizes including early stage startups. It was formed by like minded entrepreneurs realizing the need for customized software across industries to build a first in its class software engineering studio.
          </p>
          <div className='divider'></div>
          <p className='companyDescriptionText'>
            Our team consists of warm, amazing and humble individuals who have worked for multiple Fortune 100 companies spanning across all major industries, playing an integral role in their success and scaling.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default AboutPage1