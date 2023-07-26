import * as React from "react";
import Contact from "../contact/contact";
import Industriespage1 from "../industries/industriespage1";
import Industriespage2 from "../industries/industriespage2";
import './industrylayout.scss'

const IndustryLayout = () => {
  return (
    <div className="parallaxLayoutIndustry" id="parallaxLayoutIndustry">
      <Industriespage1 />
      <Industriespage2 />
      <Contact />
    </div>
  );
};

export default IndustryLayout;
