import React, {useRef} from "react";
import "./careerPage4.scss";
import Wrapper from "../wrapper";
import { FACEBOOK, GITHUB, LINKEDIN, TWITTER } from "../../icons";
import useIntersectionObserver from "../common/intersectionObserver";
import { useSpring, animated } from "@react-spring/web";

const CareerPage4 = () => {
  const triggerRef = useRef<any>();

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.2,
    freezeOnceVisible: false
  });

  const headerStyle = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, width: '30%', margin: '0 auto' },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      width: dataRef?.isIntersecting ? '100%' : '30%',
      margin: '0 auto'
    },
  });

  const handleOpen = (url: string) => {
    window.open(url, '_blank');
  }
  return (
    <Wrapper>
      <div className="careerPage4_wrapper" ref={triggerRef}>
        <animated.div style={headerStyle}>
          <div className="careerPage4_followUs">
            <p className="careerPage4_tagline">Follow us on</p>
            <div className="socialIcons_wrapper">
              <FACEBOOK
                onClick={() => handleOpen("https://www.facebook.com/nurdsoft")}
                className="socialIcon"
              />
              <TWITTER
                onClick={() => handleOpen("https://www.twitter.com/nurdsoft")}
                className="socialIcon"
              />
              <LINKEDIN
                onClick={() =>
                  handleOpen("https://www.linkedin.com/company/nurdsoft")
                }
                className="socialIcon"
              />
              <GITHUB
                onClick={() => handleOpen("https://www.github.com/nurdsoft")}
                className="socialIcon"
              />
            </div>
          </div>
        </animated.div>
      </div>
    </Wrapper>
  );
};

export default CareerPage4;
