import React from "react";
import "./homepage6.scss";

import Wrapper from "../wrapper";
import { StaticImage } from "gatsby-plugin-image";

const Homepage6 = () => {
  return (
    <>
      <Wrapper>
        <div className="scrolling-images-container pl-4 pr-4">
          <StaticImage
            src="../../images/award-section.png"
            alt="podium image"
            quality={100}
          />
        </div>
      </Wrapper>
    </>
  );
};

export default Homepage6;
