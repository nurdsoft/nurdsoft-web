import './industrylayout.scss'

import * as React from "react";

import Background from "../common/background";
import Contact from "../contact/contact";
import Industriespage1 from "../industries/industriespage1";
import Industriespage2 from "../industries/industriespage2";

const IndustryLayout = () => {
  return (
    <div className="parallaxLayoutIndustry" id="parallaxLayoutIndustry">
      <Industriespage1 />
      <Industriespage2 />
      <Contact />
      {React.useMemo(() => (<Background />), [])}
    </div>
  );
};

export default IndustryLayout;
