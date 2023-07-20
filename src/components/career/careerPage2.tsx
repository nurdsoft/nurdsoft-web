import React from 'react';
import Wrapper from '../wrapper';
import './careerPage2.scss';
import { CAREER_CLOCK_ICON, CAREER_HEART_ICON, CAREER_HOME_ICON } from '../../icons';

const CareerPage2 = () => {
  const statsData = [
    {
      icon: <CAREER_HOME_ICON className='careerPage2_Icon' />,
      label: "Work From Anywhere"
    },
    {
      icon: <CAREER_CLOCK_ICON className='careerPage2_Icon' />,
      label: "Flexible Hours"
    },
    {
      icon: <CAREER_HEART_ICON className='careerPage2_Icon' />,
      label: "Health Insurance"
    }
  ]
  return (
    <Wrapper>
      <div className="careerPage2_parentContainer" id='careerPage2_parentContainer'>
        <div className='companyPerks'>
          {
            statsData.map((data, index) => (
              <div className='perk' key={index}>
                <p className='perkIcon'>{data.icon}</p>
                <p className='perkLabel'>{data.label}</p>
              </div>
            ))
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default CareerPage2