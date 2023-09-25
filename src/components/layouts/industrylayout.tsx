import './industrylayout.scss'

import * as React from "react";

import Background from "../common/background";
import Contact from "../contact/contact";
import IndustriesHeroPage from '../industries/industriesheropage';
import Industriespage1 from "../industries/industriespage1";
import Industriespage2 from "../industries/industriespage2";

const IndustryLayout = () => {
  return (
    <div className="parallaxLayoutIndustry" id="parallaxLayoutIndustry">
      <IndustriesHeroPage />
      <Industriespage1 />
      <Industriespage2 />
      <Contact scrollerId='parallaxLayoutIndustry' />
      {React.useMemo(() => (<Background />), [])}
    </div>
  );
};

export default IndustryLayout;
