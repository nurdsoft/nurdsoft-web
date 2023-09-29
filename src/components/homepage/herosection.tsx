import './herosection.scss'

import React, { useEffect, useState } from 'react'

import Button from '../button'
import HeroDesignIcon from '../../images/heroDesignIcon.svg'
import HeroDevelopIcon from '../../images/heroDevelopIcon.svg'
import HeroOptimizeIcon from '../../images/heroOptimizeIcon.svg'
import HeroSettingsIcon from '../../images/heroSettingsIcon.svg'
import HeroSyncIcon from '../../images/heroSyncIcon.svg'
import { Link } from 'gatsby'
import Wrapper from '../wrapper'

const HeroSection = () => {

  const fadingChild = [
    {
      text: "build",
      img: HeroSettingsIcon
    },
    {
      text: "sync",
      img: HeroSyncIcon
    },
    {
      text: "develop",
      img: HeroDevelopIcon
    },
    {
      text: "optimize",
      img: HeroOptimizeIcon
    },
    {
      text: "design",
      img: HeroDesignIcon
    },
  ]
  const FadingChildren = () => (
    <div id='first'>
      {
        fadingChild.map(({text, img}, _) => (
          <h1>
            {text}
            <span><img src={img} alt='HeroSettingsIcons' /></span>
          </h1>
        ))
      }
    </div>
  )

  return (
    <Wrapper id='herosection_parentContainer'>
      <div className="herosection_parentContainer">
        <div className='hero_text'>
          <h1 className='lineOne'>
            Bespoke Software <br/>
            Development Studio    
          </h1>
          <div className='animated-line'>
            <h1>we</h1>
            <div className='fading-child'>
              <div className='child-wrapper' id='fading-child-wrapper'>
                <FadingChildren />
              </div>
            </div>
          </div>
          <h1 className='lineThree'>Solutions that meet your unique needs and help you achieve your goals.</h1>
          <Link to='/#contact-us'>
            <Button buttonText='SCHEDULE CONSULTATION' />
          </Link>
          
        </div>
      </div>
    </Wrapper>
  )
}

export default HeroSection