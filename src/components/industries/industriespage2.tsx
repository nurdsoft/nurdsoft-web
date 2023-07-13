import React from "react";
import "./industriespage2.scss";
import Wrapper from "../wrapper";
import Industrypagecarousel from "./industrypagecarousel";

const Industriespage2 = () => {
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

export default Industriespage2;
