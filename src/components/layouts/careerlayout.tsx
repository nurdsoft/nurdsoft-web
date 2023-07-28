import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import CareerPage1 from "../career/careerPage1";
import CareerPage2 from "../career/careerPage2";
import CareerPage3 from "../career/careerPage3";
import CareerPage4 from "../career/careerPage4";
import './careerlayout.scss'

const CareerLayout = () => {
  return (
    <div id="career_scroller" className="career_scroller">
      <CareerPage1 />
      <CareerPage2 />
      <CareerPage3 />
      <CareerPage4 />
    </div>
  );
};

export default CareerLayout;
