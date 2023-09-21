import './aboutlayout.scss';

import React, {useEffect} from "react";

import AboutPage1 from "../about/aboutPage1";
import AboutPage2 from "../about/aboutPage2";
import AboutPage3 from "../about/aboutPage3";
import AboutPage4 from "../about/aboutPage4";
import AboutPage5 from "../about/aboutPage5";
import Background from "../common/background";
import Contact from "../contact/contact";

const AboutLayout = () => {
  

  return (  
    <div className="parallaxLayoutAbout" id="parallaxLayoutAbout">
      <AboutPage1 />
      <AboutPage2 />
      <AboutPage3 />
      <AboutPage4 />
      {React.useMemo(() => (<AboutPage5 />), [])}
      <Contact />
      {React.useMemo(() => (<Background />), [])}
    </div>
  );
};

export default AboutLayout;
