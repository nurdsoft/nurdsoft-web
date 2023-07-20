import React from 'react';
import { BUSINESS_ANALYST_ICON, DATA_SCIENCE_ENGINEER_ICON, DEVOPS_ENGINEER_ICON, DIGITAL_MARKETING_ICON, HUMAN_RESOURCE_ICON, LEAD_SOFTWARE_ENGINEER_ICON, PROJECT_MANAGER_ICON, SALESFORCE_ICON, SOFTWARE_ENGINEER_TESTING_ICON, SR_MOBILE_ENGINEER_ICON, SR_SOFTWARE_ENGINEER_BE_ICON, SR_SOFTWARE_ENGINEER_FE_ICON, SR_SOFTWARE_ENGINEER_ML_ICON, TECH_PROJECT_MANAGER_ICON, UI_UX_DESIGNER_ICON } from '../icons'

const iconMap = {
  "softwareEngineer": <LEAD_SOFTWARE_ENGINEER_ICON className='careerCardIcon' />,
  "frontendEngineer": <SR_SOFTWARE_ENGINEER_FE_ICON className='careerCardIcon' />,
  "backendEngineer": <SR_SOFTWARE_ENGINEER_BE_ICON className='careerCardIcon' />,
  "machineLearningEngineer": <SR_SOFTWARE_ENGINEER_ML_ICON className='careerCardIcon' />,
  "mobileEngineer": <SR_MOBILE_ENGINEER_ICON className='careerCardIcon' />,
  "devopsEngineer": <DEVOPS_ENGINEER_ICON className='careerCardIcon' />,
  "testingEngineer": <SOFTWARE_ENGINEER_TESTING_ICON className='careerCardIcon' />,
  "projectManager": <TECH_PROJECT_MANAGER_ICON className='careerCardIcon' />,
  "digitalMarketing": <DIGITAL_MARKETING_ICON className='careerCardIcon' />,
  "salesforceEngineer": <SALESFORCE_ICON className='careerCardIcon' />,
  "humanResource": <HUMAN_RESOURCE_ICON className='careerCardIcon' />,
  "dataScientist": <DATA_SCIENCE_ENGINEER_ICON className='careerCardIcon' />,
  "businessAnalyst": <BUSINESS_ANALYST_ICON className='careerCardIcon' />,
  "productManager": <PROJECT_MANAGER_ICON className='careerCardIcon' />,
  "uiuxDesigner": <UI_UX_DESIGNER_ICON className='careerCardIcon' />
} as Record<string, any>

export {iconMap};