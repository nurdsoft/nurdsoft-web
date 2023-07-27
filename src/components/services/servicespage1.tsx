import React, {useRef} from "react";
import { animated, useSpring } from '@react-spring/web';
import "./servicespage1.scss";
import Wrapper from "../wrapper";
import {
  SERVICES_HOME_ICON_1,
  SERVICES_HOME_ICON_2,
  SERVICES_HOME_ICON_3,
} from "../../icons";
import useIntersectionObserver from "../common/intersectionObserver";

const ServicesPage1 = () => {
  const options = [
    "Branding",
    "Website",
    "Mobile App",
    "Landing Page",
    "Desktop App",
    "SaaS",
    "Product",
  ];

  const triggerRef = useRef<any>();

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.7,
    freezeOnceVisible: false
  });

  const headerStyle = useSpring({
    config: { duration: 500 },
    from: { transform: 'translateY(-200px)', opacity: 0 },
    to: {
      transform: dataRef?.isIntersecting ? 'translateY(0px)' : 'translateY(-200px)',
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
  });

  return (
    <Wrapper>
      <div className="servicespage1_parentContainer" ref={triggerRef} >
        <animated.div style={headerStyle}>
          <div className="servicespage1_gridContainer">
            <div className="servicespage1_titleDiv lineUp">
              Turn your
              <span className="ml-2 mr-2 servicespage1_ideasDiv">ideas</span>
              <br />
              into reality.
            </div>
            <div className="servicespage1_grid">
              <div className="servicespage1_boxContainer servicespage1_item1">
                <SERVICES_HOME_ICON_1 />
                <h4 className="servicepage1_boxTitle">Websites and Portals</h4>
                <p className="servicepage1_boxPara">
                  Showcase your company at its best
                </p>
              </div>
              <div className="servicespage1_item2 servicespage1_boxContainer">
                <SERVICES_HOME_ICON_2 />
                <h4 className="servicepage1_boxTitle">Sass Projects</h4>
                <p className="servicepage1_boxPara w-5/6">
                  Win engagement through flawless design
                </p>
              </div>
              <div className="servicespage1_ctaButton">
                <a href="mailto:hr@nurdsoft.co" target="_blank">
                  Hire Us
                </a>
              </div>
              <div className="servicespage1_boxContainer servicespage1_item3">
                <SERVICES_HOME_ICON_3 />
                <h4 className="servicepage1_boxTitle">Mobile Apps</h4>
                <p className="servicepage1_boxPara">
                  Small screen = big needs; ensure you fulfil them!
                </p>
              </div>
              <div className="servicespage1_item4">
                {options.map((option: string, index: number) => {
                  return (
                    <div
                      key={index}
                      className="servicespage1_optionTypes"
                    >
                      {option}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </Wrapper>
  );
};

export default ServicesPage1;
