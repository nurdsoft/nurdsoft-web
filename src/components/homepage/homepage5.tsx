import * as React from "react";
import "./homepage5.scss";
import Wrapper from "../wrapper";
import { StaticImage } from "gatsby-plugin-image";
import { DOUBLE_QUOTE_PINK } from "../../icons";

const Homepage5 = () => {
  return (
    <>
      <Wrapper>
        <div className="pl-2 pr-2">
          <div className="homepage5_parentContainer">
            <div className="homepage5_reviewDiv">READ OUR REVIEWS</div>
            <div className="homepage5_textContainer homepage5_lineUp">
              We Create an Intelligent
              <span className="ml-4 homepage5_imageBlock">
                <StaticImage
                  src="../../images/img.png"
                  className="homepage5_placeholder_image"
                  width={120}
                  alt="dumy_img1"
                />
                <span className="homepage5_tooltiptext">
                  <div className="homepage5_doubleQuoteIcon"><DOUBLE_QUOTE_PINK /></div>I
                  recently worked with Nurdsoft to develop a new software
                  application for my business. I was very impressed with
                  company's overall performance.
                </span>
              </span>
              <br />
              Products. Perfect
              <span className="ml-4 mr-4 homepage5_imageBlock">
                <StaticImage
                  className="homepage5_placeholder_image"
                  src="../../images/img1.png"
                  width={120}
                  alt="dumy_img2"
                />
                <span className="homepage5_tooltiptext">
                  <div className="homepage5_doubleQuoteIcon"><DOUBLE_QUOTE_PINK /></div>The
                  team was highly skilled and experienced, and they were able to
                  quickly understand my needs and deliver a high-quality product
                  on time and within budget.
                </span>
              </span>
              Solutions <br />
              for
              <span className="ml-4 mr-4 mt-8 homepage5_imageBlock">
                <StaticImage
                  className="homepage5_placeholder_image"
                  src="../../images/img2.png"
                  width={120}
                  alt="dumy_img3"
                />
                <span className="homepage5_tooltiptext">
                  <div className="homepage5_doubleQuoteIcon"><DOUBLE_QUOTE_PINK /></div>I was
                  impressed with the company's communication and transparency
                  throughout the development process. They kept me updated on
                  their progress regularly, and they were always available to
                  answer my questions. I would highly recommend Nurdsoft to
                  anyone looking for a reliable and experienced software
                  development partner.
                </span>
              </span>
              Your Business.
            </div>
            <div className="flex items-center justify-evenly">
              <StaticImage
                src="../../images/clutch.png"
                quality={100}
                width={250}
                alt="Clutch"
              />
              <StaticImage
                src="../../images/google.png"
                quality={100}
                width={250}
                alt="Google"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Homepage5;
