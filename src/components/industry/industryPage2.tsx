import React from "react";
import "./industrypage2.scss";
import Wrapper from "../wrapper";
import Industrypagecarousel from "./industrypagecarousel";

const Industrypage2 = () => {
  return (
    <Wrapper>
      <div className="industryPage2_parentContainer">
        <h1 className="heading">
          Client <br /> Testimonials
        </h1>
        <Industrypagecarousel />
      </div>
    </Wrapper>
  );
};

export default Industrypage2;
