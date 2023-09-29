import "./industriespage2.scss";

import React, { useRef } from "react";
import { animated, useSpring } from '@react-spring/web';

import Client from "../../images/client.png";
import ClientFeedbackCarousel from "../common/clientFeedbackCarousel";
import { IClientFeedback } from "../../types/carouselTypes";
import Logo from "../../images/Logo.svg";
import Wrapper from "../wrapper";
import useIntersectionObserver from "../common/intersectionObserver";

const Industriespage2 = () => {

  const triggerRef = useRef<any>();

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.2,
    freezeOnceVisible: false
  });

  const headerStyle = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, transform: 'translateX(150px)' },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: dataRef?.isIntersecting ? 'translateX(0px)' : 'translateX(150px)'
    },
  });

  const data: IClientFeedback[] = [
    {
      clientImg: Client,
      clientResponse:
        "Nurdsoft is a software development studio specializing in bespoke software for businesses of all sizes including early stage startups.",
      clientName: "Client Name",
      clientDesignation: "Designation",
      clientCompanyLogo: Logo,
    },
    {
      clientImg: Client,
      clientResponse:
        "Nurdsoft is a software development studio specializing in bespoke software for businesses of all sizes including early stage startups.",
      clientName: "Client Name",
      clientDesignation: "Designation",
      clientCompanyLogo: Logo,
    },
  ];
  return (
    <Wrapper>
      <div className="industryPage2_parentContainer" ref={triggerRef} >
        <animated.div className="aboutPage5_animatedDiv" style={headerStyle}>
          <h1 className="heading">
            Client <br /> Testimonials
          </h1>
        </animated.div>
        <ClientFeedbackCarousel data={data} />
      </div>
    </Wrapper>
  );
};

export default Industriespage2;
