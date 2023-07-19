import React from 'react';
import Button from '../button';
import { BUSINESS_ANALYST_ICON, DATA_SCIENCE_ENGINEER_ICON, DEVOPS_ENGINEER_ICON, DIGITAL_MARKETING_ICON, HUMAN_RESOURCE_ICON, LEAD_SOFTWARE_ENGINEER_ICON, PROJECT_MANAGER_ICON, SALESFORCE_ICON, SOFTWARE_ENGINEER_TESTING_ICON, SR_MOBILE_ENGINEER_ICON, SR_SOFTWARE_ENGINEER_BE_ICON, SR_SOFTWARE_ENGINEER_FE_ICON, SR_SOFTWARE_ENGINEER_ML_ICON, TECH_PROJECT_MANAGER_ICON, UI_UX_DESIGNER_ICON } from '../../icons';

const CareerCard = () => {
  const jobData = [
    {
      position: 'Lead Software Engineer',
      icon: <LEAD_SOFTWARE_ENGINEER_ICON className='careerCardIcon' />
    },
    {
      position: 'Sr. Software Engineer, Front-end',
      icon: <SR_SOFTWARE_ENGINEER_FE_ICON className='careerCardIcon' />
    },
    {
      position: 'Sr. Software Engineer, Back-end',
      icon: <SR_SOFTWARE_ENGINEER_BE_ICON className='careerCardIcon' />
    },
    {
      position: 'Sr. Software Engineer, Machine Learning',
      icon: <SR_SOFTWARE_ENGINEER_ML_ICON className='careerCardIcon' />
    },
    {
      position: 'Sr. Software Engineer, Mobile',
      icon: <SR_MOBILE_ENGINEER_ICON className='careerCardIcon' />
    },
    {
      position: 'DevOps Engineer',
      icon: <DEVOPS_ENGINEER_ICON className='careerCardIcon' />
    },
    {
      position: 'Software Engineer in Testing',
      icon: <SOFTWARE_ENGINEER_TESTING_ICON className='careerCardIcon' />
    },
    {
      position: 'Technical Project Manager',
      icon: <TECH_PROJECT_MANAGER_ICON className='careerCardIcon' />
    },
    {
      position: 'Digital Marketing & SEO Specialist',
      icon: <DIGITAL_MARKETING_ICON className='careerCardIcon' />
    },
    {
      position: 'Salesforce Developer',
      icon: <SALESFORCE_ICON className='careerCardIcon' />
    },
    {
      position: 'Head of Human Resources and Recruitment',
      icon: <HUMAN_RESOURCE_ICON className='careerCardIcon' />
    },
    {
      position: 'Data Science Engineer',
      icon: <DATA_SCIENCE_ENGINEER_ICON className='careerCardIcon' />
    },
    {
      position: 'Business Analyst',
      icon: <BUSINESS_ANALYST_ICON className='careerCardIcon' />
    },
    {
      position: 'Product Manager',
      icon: <PROJECT_MANAGER_ICON className='careerCardIcon' />
    },
  ]

  return (
    <>
    {
      jobData.map(({icon, position}, index) => (
        <div className='careerPage3_card' key={index}>
            <div className='icon_container'>
                {icon}
            </div>
            <p className='jobPosition'>{position}</p>
            <div className='otherInfo'>
                <p className='location'>Remote</p>
                <Button className='viewDetailButton' buttonText='VIEW DETAILS' />
            </div>
        </div>
      ))
    }
    </>
  )
}

export default CareerCard;