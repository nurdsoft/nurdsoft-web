import React from 'react'
import './industryPage2.scss'
import Wrapper from '../wrapper'
import IndustryPageCarousel from './IndustryPageCarousel'

const IndustryPage2 = () => {
  return (
    <Wrapper>
      <div className='industryPage2_parentContainer'>
        <h1>Client <br/> Testimonials</h1>
        <IndustryPageCarousel />
      </div>
    </Wrapper>
  )
}

export default IndustryPage2