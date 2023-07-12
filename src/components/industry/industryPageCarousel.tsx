import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Quotes from '../../images/quotes.svg';
import Logo from '../../images/Logo.svg';
import './industryPageCarousel.scss';
import Client from '../../images/client.png';

const CustomIndicator = (onClickHandler: any, isSelected: any, index: any, label: any) => {
  
  return (
    <span
      className={`dotBorder ${isSelected ? 'selectedDotBorder' : '' }`}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      key={index}
      role="button"
      tabIndex={0}
      aria-label={`${label} ${index + 1}`}
    >
      <div className={`dotContent ${isSelected ? 'selectedDotContent' : '' }`} ></div>
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
            arr.map((_, index) => (
              <div key={index} className='industryCarouselSlide'>
                <div className='industryCarouselSlideLeft'>
                  <img src={Client} alt='slide1' />
                </div>
                <div className='industryCarouselSlideRight'>
                  <img className='quote' src={Quotes} alt='quotes' />
                  <p className='description'>
                    "Nurdsoft is a software engineering studio specializing in bespoke software for businesses of all sizes including early stage startups."
                  </p>
                  <div className='testGiverInfo'>
                    <p className='name'>Name here</p>
                    <p className='designation'>Designation</p>
                    <img className='logo' src={Logo} alt='quotes' />
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