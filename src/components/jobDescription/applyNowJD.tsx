import React from 'react';
import { FACEBOOK, GITHUB, LINKEDIN, TWITTER } from '../../icons';
import Button from '../button';
import './applyNowJD.scss'

const ApplyNowJD = () => {
  const handleOpen = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <div className='applyNow_wrapper'>
      <Button buttonText='APPLY NOW' />
      <div className="socialIcons_wrapper">
        <div className="socialIcon" >
          <FACEBOOK
            onClick={() => handleOpen("https://www.facebook.com/nurdsoft")}
          />
        </div>
        <div className="socialIcon" >
          <TWITTER
            onClick={() => handleOpen("https://www.twitter.com/nurdsoft")}
          />
        </div>
        <div className="socialIcon" >
          <LINKEDIN
            onClick={() =>
              handleOpen("https://www.linkedin.com/company/nurdsoft")
            }
          />
        </div>
        <div className="socialIcon" >
          <GITHUB
            onClick={() => handleOpen("https://www.github.com/nurdsoft")}
          />
        </div>
      </div>
    </div>
  )
}

export default ApplyNowJD