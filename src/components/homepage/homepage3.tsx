import "./homepage3.scss";

import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import Wrapper from "../wrapper";

const Homepage3 = () => {
  return (
    <Wrapper>
      <div className="homepage3_parentContainer">
        <h4 className="trustedHeading">Trusted By</h4>
        <div className="gridContainer">
          <div className="boxContainer item1">
            <StaticImage
              src="../../images/image_works.png"
              quality={100}
              width={368}
              alt="Image Works"
            />
          </div>
          <div className="item2">
            <div className="h-full">
              <div className="gridBox1 gridBorder">
                <StaticImage
                  src="../../images/disney.png"
                  quality={100}
                  alt="Deluxe"
                />
              </div>
              <div className="gridBox3">
                <StaticImage
                  src="../../images/ticket-master.png"
                  quality={100}
                  alt="Deluxe"
                />
              </div>
            </div>
          </div>
          <div className="boxContainer item3">
            <StaticImage
              src="../../images/fox.png"
              quality={100}
              alt="Deluxe"
            />
          </div>
          <div className="boxContainer item4">
            <StaticImage
              src="../../images/deluxe.png"
              quality={100}
              alt="Deluxe"
            />
          </div>
          <div className="boxContainer item5">
            <StaticImage
              src="../../images/rough_draft.png"
              quality={100}
              alt="Deluxe"
            />
          </div>
          <div className="boxContainer item6">
            <StaticImage
              src="../../images/webdotcom.png"
              quality={100}
              width={230}
              alt="Deluxe"
            />
          </div>
          <div className="boxContainer item7">
            <StaticImage
              src="../../images/keysight.png"
              quality={100}
              alt="Deluxe"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Homepage3;
