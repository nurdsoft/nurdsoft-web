import * as React from "react";
import Dashboard from "../dashboard";
import Homepage1 from "../homepage/homepage1";
import Homepage3 from "../homepage/homepage3";
import Homepage4 from "../homepage/homepage4";
import Homepage2 from "../homepage/homepage2";
import Homepage5 from "../homepage/homepage5";
import Contact from "../contact/contact";
import Homepage6 from "../homepage/homepage6";
import './homelayout.scss';

const HomeLayout = () => {
  return (
    <div className="home_scroller">
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
