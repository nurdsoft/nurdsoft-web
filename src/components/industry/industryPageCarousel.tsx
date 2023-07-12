import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Quotes from '../../images/quotes.svg'
import Logo from '../../images/Logo.svg'
import './industryPageCarousel.scss'
import Client from '../../images/client.png'

const CustomIndicator = (onClickHandler: any, isSelected: any, index: any, label: any) => {
  
  return (
    <span
      style={isSelected ? {border: '1px solid #6164FA'} : {}}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      key={index}
      role="button"
      tabIndex={0}
      aria-label={`${label} ${index + 1}`}
    >
      <div style={isSelected ? {background: "#6164FA"} : {}}></div>
    </span>
  );
}

const IndustryPageCarousel = () => {
  const arr = [0,0,0,0]
  return (
      <Carousel
          // autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          selectedItem={0}
          showThumbs={false}
          interval={2000}
          animationHandler={"slide"}
          showStatus={false}
          stopOnHover={false}
          axis="horizontal"
          showIndicators={true}
          renderIndicator={CustomIndicator}
        >
          {
            arr.map((index) => (
              <div key={index} className='industryCarouselSlide'>
                <div className='left'>
                  <img src={Client} alt='slide1' />
                </div>
                <div className='right'>
                  <img className='quote' src={Quotes} alt='quotes' />
                  <p className='description'>"Nurdsoft is a software engineering studio specializing in bespoke software for businesses of all sizes including early stage startups."</p>
                  <div className='testGiverInfo'>
                    <p className='name'>Name here</p>
                    <p className='designation'>Designation</p>
                    <img src={Logo} alt='quotes' />
                  </div>
                </div>
              </div>
            ))
          }
          
        </Carousel>
    // </div>
  )
}

export default IndustryPageCarousel