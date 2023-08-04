import './homelayout.scss';

import React, { useEffect } from "react";

import Contact from "../contact/contact";
import Dashboard from "../dashboard";
import Homepage1 from "../homepage/homepage1";
import Homepage2 from "../homepage/homepage2";
import Homepage3 from "../homepage/homepage3";
import Homepage4 from "../homepage/homepage4";
import Homepage5 from "../homepage/homepage5";
import Homepage6 from "../homepage/homepage6";

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
      <Dashboard />
      <Homepage1 />
      <Homepage2 />
      <Homepage3 />
      <Homepage4 />
      <Homepage6 />
      <Homepage5 />
      <Contact />
    </div>
  );
};

export default HomeLayout;
