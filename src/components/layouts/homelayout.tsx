import './homelayout.scss';

import React, { useEffect } from "react";

import { Background } from '../../images/background';
import { BackgroundLine } from '../../images/backgroundLine';
import Contact from "../contact/contact";
import HeroSection from '../homepage/herosection';
import Homepage1 from "../homepage/homepage1";
import Homepage2 from "../homepage/homepage2";
import Homepage3 from "../homepage/homepage3";
import Homepage4 from "../homepage/homepage4";
import Homepage5 from "../homepage/homepage5";

const HomeLayout = () => {
  if(typeof window === "undefined") return <></>;

  
  useEffect(() => {
    const hash = window.location.hash
    if(hash === "#contact-us"){
      const scroller = document.getElementById("home_scroller");
      if(!scroller) return;
      scroller.scrollTop = scroller.scrollHeight;
    }
  }, [window?.location?.hash])
  return (
    <div className="home_scroller" id="home_scroller">
      <HeroSection />
      <Homepage1 />
      <Homepage2 />
      <Homepage3 />
      <Homepage4 />
      <Homepage5 />
      <Contact />
      <div className='universalBackgroundWrapper'>
        <Background className='universalBackground'/>
        <BackgroundLine className='universalBackgroundLine'/>
      </div>
    </div>
  );
};

export default HomeLayout;
