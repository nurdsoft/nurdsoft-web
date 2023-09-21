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
  const handleParallaxScroll = () => {
    const section2 = document.getElementsByClassName('aboutPage2_parentContainer')[0]
    const scroller = document.getElementById('parallaxLayoutAbout')
    const section3 = document.getElementById('aboutPage3_parentContainer')
    if (!section2 || !scroller || !section3) return

    if(
      Math.abs(section2?.getBoundingClientRect().bottom) <= scroller?.clientHeight
    ){
      section3.style.opacity = '1'
    }else if(
      (Math.abs(section2?.getBoundingClientRect().bottom) - 20) > scroller?.clientHeight
    ){
      section3.style.opacity = '0'
    }
  }

  useEffect(() => {
    const scroller = document.getElementById('parallaxLayoutAbout')
    scroller?.addEventListener('scroll', handleParallaxScroll)
    return () => scroller?.removeEventListener('scroll', handleParallaxScroll)
  }, [])

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
