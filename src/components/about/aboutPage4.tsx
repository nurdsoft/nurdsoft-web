import "./aboutPage4.scss";

import React, { useRef } from "react";
import { animated, useSpring } from '@react-spring/web';

import Akshay from '../../images/akshay.png';
import ClientFeedbackCarousel from "../common/clientFeedbackCarousel";
import Darshan from '../../images/darshan.png';
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
      clientImg: Akshay,
      clientResponse:
        "Nurdsoft is a company that values a collaborative and supportive work environment. They prioritize personal growth, offering opportunities for learning and development. Employees are trusted to take ownership of their projects, and challenges are seen as opportunities for improvement. Overall, Nurdsoft fosters a culture of growth and teamwork, making it a rewarding place to work.",
      clientName: "Akshay Padashala",
      clientDesignation: "UX/UI & Product Designer",
    },
    {
      clientImg: Darshan,
      clientResponse:
        "I’ve been fortunate to be a part of this wonderful company for a considerable period of time. The environment here is truly exceptional, with supportive founders who are always receptive to fresh ideas. One of the standout aspects is the regular opportunity to engage with the founders and share thoughts, fostering a sense of collaboration and innovation. The atmosphere here is remarkably conducive to personal and professional growth.",
      clientName: "Darshan Ghetiya",
      clientDesignation: "Full-stack Engineer",
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
