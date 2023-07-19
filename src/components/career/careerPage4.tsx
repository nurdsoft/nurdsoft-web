import React from 'react';
import './careerPage4.scss';
import Wrapper from '../wrapper';
import { FACEBOOK, GITHUB, LINKEDIN, TWITTER } from '../../icons';

const CareerPage4 = () => {
  return (
    <Wrapper>
      <div className='h-screen careerPage4_wrapper'>
        <div className='careerPage4_followUs'>
          <p className='careerPage4_tagline'>Follow us on</p>
          <div className='socialIcons_wrapper'>
            <FACEBOOK className='socialIcon' />
            <TWITTER className='socialIcon' />
            <LINKEDIN className='socialIcon' />
            <GITHUB className='socialIcon' />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default CareerPage4