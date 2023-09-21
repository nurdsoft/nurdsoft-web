import "./aboutPage1.scss";

import Image1 from "../../images/aboutCarousel1.png";
import Image2 from "../../images/aboutCarousel2.png";
import Image3 from "../../images/aboutCarousel3.png";
import Image4 from "../../images/aboutCarousel4.png";
import Image5 from "../../images/aboutCarousel5.png";
import React from "react";
import Wrapper from "../wrapper";

const AboutPage1 = () => {
  const carouselData = [
    {
      img: Image1,
      alt: "image1",
    },
    {
      img: Image2,
      alt: "image2",
    },
    {
      img: Image3,
      alt: "image3",
    },
    {
      img: Image4,
      alt: "image4",
    },
    {
      img: Image5,
      alt: "image5",
    },
    {
      img: Image1,
      alt: "image1",
    },
    {
      img: Image2,
      alt: "image2",
    },
    {
      img: Image3,
      alt: "image3",
    },
    {
      img: Image4,
      alt: "image4",
    },
    {
      img: Image5,
      alt: "image5",
    },
  ];

  return (
    <Wrapper id="aboutPage1_parentContainer" >
      <div className="aboutPage1_parentContainer" >
        <h1 className="aboutPage1_heading">
          Life @<span className="blue">nurdsoft</span>
        </h1>
        <div className="companyDescription">
          <p className="companyDescriptionText">
            Nurdsoft is a software engineering studio specializing in bespoke software 
            for businesses of all sizes including early stage startups. It was formed by 
            like minded entrepreneurs realizing the need for customized software across 
            industries to build a first in its class software engineering studio.
          </p>
        </div>

        <div className="aboutPage1_hireUs_wrapper">
          <a href="mailto:hr@nurdsoft.co" target="_blank">
            <div className="aboutPage1_hireUs">Hire Us</div>
          </a>
        </div>
        <div className="aboutPage1_carouselWrapper">
          <div className="wrapper">
            {carouselData.map(({ img, alt }, index) => (
              <img className="carouselImage" key={index} src={img} alt={alt} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutPage1;
