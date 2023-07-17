import React from 'react';
import './aboutPage1.scss';
import Wrapper from '../wrapper';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../../images/aboutCarousel1.png';
import Image2 from '../../images/aboutCarousel2.png';
import Image3 from '../../images/aboutCarousel3.png';
import Image4 from '../../images/aboutCarousel4.png';
import Image5 from '../../images/aboutCarousel5.png';

const AboutPage1 = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    swipe: true,

    responsive: [{
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }]
  };

  return (
    <Wrapper>
      <div className="aboutPage1_parentContainer">
        <h1 className="aboutPage1_heading">
          Life @<span className="blue">nurdsoft</span>
        </h1>
        <div className='companyDescription'>
          <p className='companyDescriptionText'>
            Nurdsoft is a software engineering studio specializing in bespoke software for businesses of all sizes including early stage startups. It was formed by like minded entrepreneurs realizing the need for customized software across industries to build a first in its class software engineering studio.
          </p>
          <div className='divider'></div>
          <p className='companyDescriptionText'>
            Our team consists of warm, amazing and humble individuals who have worked for multiple Fortune 100 companies spanning across all major industries, playing an integral role in their success and scaling.
          </p>
        </div>
        <div className='aboutPage1_carousel'>
          <div className='aboutPage_hireUs'>Hire Us</div>
          <Slider {...settings}>
            <div className='image_coniatiner'>
              <img className="carouselImage" src={Image1} alt='image1' />
            </div>
            <div className='image_coniatiner'>
              <img className="carouselImage" src={Image2} alt='image2' />
            </div>
            <div className='image_coniatiner'>
              <img className="carouselImage" src={Image3} alt='image3' />
            </div>
            <div className='image_coniatiner'>
              <img className="carouselImage" src={Image4} alt='image4' />
            </div>
            <div className='image_coniatiner'>
              <img className="carouselImage" src={Image5} alt='image5' />
            </div>
          </Slider>
        </div>
      </div>
    </Wrapper>
  )
}

export default AboutPage1