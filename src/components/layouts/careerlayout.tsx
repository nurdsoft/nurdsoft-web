import './careerlayout.scss'

import * as React from "react";

import Background from "../common/background";
import CareerPage1 from "../career/careerPage1";
import CareerPage2 from "../career/careerPage2";
import CareerPage3 from "../career/careerPage3";
import Contact from '../contact/contact';

const CareerLayout = () => {
  return (
    <div id="career_scroller" className="career_scroller">
      <CareerPage1 />
      <CareerPage2 />
      <CareerPage3 />
      <Contact scrollerId='career_scroller' />
      {React.useMemo(() => (<Background />), [])}
    </div>
  );
};

export default CareerLayout;
