import React from 'react';
import './aboutPage1.scss';
import Wrapper from '../wrapper';
import Image1 from '../../images/aboutCarousel1.png';
import Image2 from '../../images/aboutCarousel2.png';
import Image3 from '../../images/aboutCarousel3.png';
import Image4 from '../../images/aboutCarousel4.png';
import Image5 from '../../images/aboutCarousel5.png';

const AboutPage1 = () => {


  const carouselData = [{
    img: Image1,
    alt: "image1"
  },{
    img: Image2,
    alt: "image2"
  },{
    img: Image3,
    alt: "image3"
  },{
    img: Image4,
    alt: "image4"
  },{
    img: Image5,
    alt: "image5"
  },{
    img: Image1,
    alt: "image1"
  },{
    img: Image2,
    alt: "image2"
  },{
    img: Image3,
    alt: "image3"
  },{
    img: Image4,
    alt: "image4"
  },{
    img: Image5,
    alt: "image5"
  }]

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

        <div className='aboutPage1_hireUs_wrapper'>
          <div className='aboutPage1_hireUs'>Hire Us</div>
        </div>
        <div className='aboutPage1_carouselWrapper'>
          <div className='wrapper'>
            {
              carouselData.map(({img, alt}, index) => (
                <img className="carouselImage" key={index} src={img} alt={alt} />
              ))
            }
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default AboutPage1