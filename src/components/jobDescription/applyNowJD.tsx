import './applyNowJD.scss'

import React from 'react';

const ApplyNowJD = () => {
  const [emailCopied, setEmailCopied] = React.useState(false)

  const compyEmail = async () => {
    await navigator.clipboard.writeText("hr@nurdsoft.co")
    setEmailCopied(true)
  }

  return (
    <div className='applyNow_wrapper'>
      <p className='extrasmall'>WANT TO JOIN US?</p>
      <p className='mainText'>
        Send your resume and cover letter to <br />
        <span onClick={compyEmail} className='primary'>hr@nurdsoft.co</span>
      </p>
      {
        emailCopied &&
        <p className='extrasmall'>email copied to clipboard</p>
      }
    </div>
  )
}

export default ApplyNowJD