import React from "react";
import "./careerPage4.scss";
import Wrapper from "../wrapper";
import { FACEBOOK, GITHUB, LINKEDIN, TWITTER } from "../../icons";

const CareerPage4 = () => {
  return (
    <Wrapper>
      <div className="h-screen careerPage4_wrapper">
        <div className="careerPage4_followUs">
          <p className="careerPage4_tagline">Follow us on</p>
          <div className="socialIcons_wrapper">
            <FACEBOOK
              onClick={() => window.open("https://www.facebook.com/nurdsoft")}
              className="socialIcon"
            />
            <TWITTER
              onClick={() => window.open("https://www.twitter.com/nurdsoft")}
              className="socialIcon"
            />
            <LINKEDIN
              onClick={() =>
                window.open("https://www.linkedin.com/company/nurdsoft")
              }
              className="socialIcon"
            />
            <GITHUB
              onClick={() => window.open("https://www.github.com/nurdsoft")}
              className="socialIcon"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CareerPage4;
