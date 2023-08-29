import './servicelayout.scss';

import * as React from "react";

import Contact from "../contact/contact";
import ServicesPage1 from "../services/servicespage1";
import ServicesPage2 from "../services/servicespage2";
import ServicesPage3 from "../services/servicespage3";
import ServicesPage5 from '../services/servicespage5';
import Servicespage4 from "../services/servicespage4";

const ServicesLayout = () => {
  return (
    <div className="parallaxLayoutServices" id="parallaxLayoutServices">
      <ServicesPage1 />
      <ServicesPage5 />
      {React.useMemo(() => <ServicesPage2 />, [])}
      <ServicesPage3 />
      {/* <Servicespage4 /> */}
      <Contact />
    </div>
  );
};

export default ServicesLayout;
