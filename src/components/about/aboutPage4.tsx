import "./aboutPage4.scss";

import React, { useRef } from "react";
import { animated, useSpring } from '@react-spring/web';

import Client from "../../images/client2.png";
import ClientFeedbackCarousel from "../common/clientFeedbackCarousel";
import { IClientFeedback } from "../../types/carouselTypes";
import Wrapper from "../wrapper";
import useIntersectionObserver from "../common/intersectionObserver";

const AboutPage4 = () => {

  const triggerRef = useRef<any>();

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.2,
    freezeOnceVisible: false
  });

  const headerStyle = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, transform: 'translateY(100px) translateX(150px)' },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: dataRef?.isIntersecting ? 'translateY(0px) translateX(0px)' : 'translateY(100px) translateX(150px)'
    },
  });

  const data: IClientFeedback[] = [
    {
      clientImg: Client,
      clientResponse:
        "Nurdsoft is a software engineering studio specializing in bespoke software for businesses of all sizes including early stage startups.",
      clientName: "Client Name",
      clientDesignation: "Designation",
    },
    {
      clientImg: Client,
      clientResponse:
        "Nurdsoft is a software engineering studio specializing in bespoke software for businesses of all sizes including early stage startups.",
      clientName: "Client Name",
      clientDesignation: "Designation",
    },
  ];
  return (
    <Wrapper id="aboutPage4_parentContainer" >
      <div className="aboutPage4_parentContainer" ref={triggerRef} >
        <animated.div className="aboutPage5_animatedDiv" style={headerStyle}>
          <h1 className="heading">
            What Our Team <br /> Say About Us
          </h1>
        </animated.div>
        <ClientFeedbackCarousel data={data} />
      </div>
    </Wrapper>
  );
};

export default AboutPage4;
