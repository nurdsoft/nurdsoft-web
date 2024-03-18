import Button from '../button';
import './applyNowJD.scss'

import React from 'react';

const ApplyNowJD = ({ data }: any) => {
  const [emailCopied, setEmailCopied] = React.useState(false)
  
  const compyEmail = async () => {
    await navigator.clipboard.writeText("recruiting@nurdsoft.co")
    setEmailCopied(true)
  }

  const handleApplyNow = () => {
    window.open(data?.applyURL, "_blank");
  }

  return (
    <div className='applyNow_wrapper'>
      <p className='extrasmall'>WANT TO JOIN US?</p>
      {
        data?.applyURL ?
        <Button onClick={handleApplyNow} buttonText='Apply Now' />:
        <>
          <p className='mainText'>
            Send your resume and cover letter to <br />
            <span onClick={compyEmail} className='primary'>recruiting@nurdsoft.co</span>
          </p>
          {
            emailCopied &&
            <p className='extrasmall'>email copied to clipboard</p>
          }
        </>
      }
    </div>
  )
}

export default ApplyNowJD
