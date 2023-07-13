import React from "react";
import "./industrypage2.scss";
import Wrapper from "../wrapper";
import IndustryPageCarousel from "./industryPageCarousel";

const IndustryPage2 = () => {
  return (
    <Wrapper>
      <div className="industryPage2_parentContainer">
        <h1 className="heading">
          Client <br /> Testimonials
        </h1>
        <IndustryPageCarousel />
      </div>
    </Wrapper>
  );
};

export default IndustryPage2;
