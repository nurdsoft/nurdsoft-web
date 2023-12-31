import './servicelayout.scss';

import * as React from "react";

import Background from '../common/background';
import Contact from "../contact/contact";
import ServicesPage1 from "../services/servicespage1";
import ServicesPage2 from "../services/servicespage2";
import ServicesPage3 from "../services/servicespage3";
import ServicesPage5 from '../services/servicespage5';

const ServicesLayout = () => {
  return (
    <div className="parallaxLayoutServices" id="parallaxLayoutServices">
      <ServicesPage1 />
      <ServicesPage5 />
      {React.useMemo(() => <ServicesPage2 />, [])}
      <ServicesPage3 />
      <Contact scrollerId='parallaxLayoutServices' />
      {React.useMemo(() => (<Background />), [])}
    </div>
  );
};

export default ServicesLayout;
