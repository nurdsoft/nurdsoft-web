import React, {useEffect, useRef} from "react";
import "./servicespage3.scss";
import { animated, useSpring } from '@react-spring/web';
import Wrapper from "../wrapper";
import Button from "../button";
import useIntersectionObserver from "../common/intersectionObserver";

const ServicesPage3 = () => {
  const triggerRef = useRef<any>();

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.4,
    freezeOnceVisible: false
  });

  const headerStyle = useSpring({
    config: { duration: 500 },
    from: { transform: 'translateY(200px)', opacity: 0 },
    to: {
      transform: dataRef?.isIntersecting ? 'translateY(0px)' : 'translateY(200px)',
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
  });

  const options = [
    "Flexible work terms",
    "Hungry and Unstoppable",
    "Full-stack, Fully-managed",
    "True partnership",
  ];

  return (
    <Wrapper>
      <div className="servicespage3_parentContainer" id="servicespage3_parentContainer" ref={triggerRef}>
        <div className="servicespage3_gridContainer">
          <div className="servicespage3_leftContainer mt-12">
            <div className="servicespage3_titleDiv lineUp">
              Why to Work <br/> with Us
            </div>
            <div className="mt-12">
              <Button buttonText="SCHEDULE CONSULTATION" />
            </div>
          </div>
          <div className="servicespage3_rightContainer">
            <animated.div style={headerStyle}>
              <div className="servicespage3_listContainer ml-12">
                {options.map((option: string, index: number) => {
                  return (
                    <div key={index} className={index ^ 0 ? "mt-20" : ""}>
                      <small className="servicespage3_count ml-14">{`0${
                        index + 1
                      }`}</small>
                      <div className="servicespage3_options flex items-center">
                        <span className="mr-4 w-10">
                          <hr className="servicespage3_line" />
                        </span>
                        <div className="servicespage3_optionsList">{option}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ServicesPage3;
