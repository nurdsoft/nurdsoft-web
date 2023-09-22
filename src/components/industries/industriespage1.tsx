import "./industriespage1.scss";

import React, { useRef } from "react";

import { ARROW_RIGHT_SMALL } from "../../icons";
import Fintech from '../../images/Industries/fintech.jpg'
import Gaming from '../../images/Industries/gaming.jpg'
import Healthcare from '../../images/Industries/healthcare.jpg'
import Hospitality from '../../images/Industries/hospitality.jpg'
import { IndustryData } from "../../types/industryTypes";
import Logistics from '../../images/Industries/logistics.jpg'
import Media from '../../images/Industries/media.jpg'
import RealEstate from '../../images/Industries/realEstate.jpg'
import Retail from '../../images/Industries/retail.jpg'
import Slider from "react-slick";
import Sports from '../../images/Industries/sports.jpg'
import Wrapper from "../wrapper";

const Industriespage1 = () => {
  const IndustrySlider = useRef<any>()
  const data: IndustryData[] = [
    {
      img: Media,
      title: `Media & Entertainment`,
      description:
        "Fuel creativity with Media & Entertainment software. Craft visual and audio marvels, bringing stories to life. Empower creators in film, music, gaming, and more to reshape entertainment.",
    },
    {
      img: Sports,
      title: "Sports",
      description:
        "Revolutionize sports with advanced software. Boost athlete performance and fan engagement. Transform training, strategy, and spectator experiences.",
    },
    {
      img: Logistics,
      title: "Logistics",
      description:
        "Elevate logistics with cutting-edge software. Manage global movement effortlessly – from route planning to real-time tracking.",
    },
    {
      img: Healthcare,
      title: "Healthcare",
      description:
        "Simplify admin tasks, digitize records, and enhance communication among professionals. Empower medical teams for better decisions, improved workflows, and secure data management.",
    },
    {
      img: Fintech,
      title: "Fintech",
      description:
        "Shape finance with fintech software. Modernize transactions, banking, and payments. From budgeting to trading, experience innovation driving efficiency and security.",
    },
    {
      img: Retail,
      title: "Retail",
      description:
        "Revamp retail with advanced software. Simplify sales, inventory, and customer experiences. Whether online or in-store, this tech transforms business and customer interactions.",
    },
    {
      img: Gaming,
      title: "Gaming",
      description:
        "Dive into immersive visuals, dynamic gameplay, and interactive experiences. From RPGs to eSports, tech transforms entertainment.",
    },
    {
      img: Hospitality,
      title: "Hospitality & Leisure",
      description:
        "Enhance guest services, streamline operations, and personalize experiences. From hotels to leisure spots, tech shapes a new era of hospitality.",
    },
    {
      img: RealEstate,
      title: "Real Estate",
      description:
        "Revamp real estate with innovative software. Simplify listings, workflows, and communication. From agents to investors, tech reshapes transactions and interactions.",
    },
  ];

  const handleCenterImageAnimate = (oldIndex: number, newIndex: number) => {
    document.getElementById(`industryImage${oldIndex}`)?.classList.remove('animate')
    document.getElementById(`industryImage${newIndex}`)?.classList.add('animate')
    if(oldIndex < newIndex){
      document.getElementById(`industrySlideContent${oldIndex}`)?.classList.remove('animateRight', 'animateLeft')
      document.getElementById(`industrySlideContent${newIndex}`)?.classList.add('animateRight')
    }else{
      document.getElementById(`industrySlideContent${oldIndex}`)?.classList.remove('animateRight', 'animateLeft')
      document.getElementById(`industrySlideContent${newIndex}`)?.classList.add('animateLeft')
    }
  }

  return (
    <Wrapper>
      <div className="industryPage1_parentContainer">
        <Slider
          easing={undefined}
          speed={0}
          infinite={false}
          ref={IndustrySlider}
          arrows={false}
          beforeChange={handleCenterImageAnimate}
        >
          {
            data.map(({img, title, description}, index) => (
              <div className="industrySliderWrapper" key={index}>
                <div className="industrySlide">
                  <div className="content" id={`industrySlideContent${index}`}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                  </div>
                  <div className="industryImage" id={`industryImage${index}`} style={{backgroundImage: `url(${img})`}} />
                </div>
                <div className="sliderFooter">
                  <div className="previousSlide">
                    {
                      index > 0 &&
                      <div className="footerLink">
                        <ARROW_RIGHT_SMALL className="leftArrow" />
                        <p onClick={() => IndustrySlider.current.slickPrev()}>{data[index - 1].title}</p>
                      </div>
                    }
                  </div>
                  <div className="slideProgress">
                    <p>{index + 1}/{data.length}</p>
                  </div>
                  <div className="nextSlide">
                    {
                      index < data.length - 1 &&
                      <div className="footerLink">
                        <p onClick={() => IndustrySlider.current.slickNext()}>{data[index + 1].title}</p>
                        <ARROW_RIGHT_SMALL className="rightArrow" />
                      </div>
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </Wrapper>
  );
};

export default Industriespage1;
