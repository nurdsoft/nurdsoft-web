import './careerPage1.scss';

import React from 'react';
import Wrapper from '../wrapper';

const CareerPage1 = () => {
  return (
    <Wrapper id="careerPage1_parentContainer">
      <div className="careerPage1_parentContainer">
        <h1 className="careerPage1_heading">
          Build your <span className="blue">career</span> <br />
          with nurdsoft
        </h1>
        <p className='careerPage1_description'>
          Nurdsoft is a software engineering 
          studio specializing in bespoke software 
          for businesses of all sizes including early 
          stage startups. It was formed by like minded 
          entrepreneurs realizing the need for customized software 
          across industries to build a first in its class software 
          engineering studio.
        </p>
      </div>
    </Wrapper>
  )
}

export default CareerPage1