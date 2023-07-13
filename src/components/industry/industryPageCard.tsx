import React from "react";
import "./industrypagecard.scss";
import { IndustryPageCardProps } from "../../types/industryTypes";

const Industrypagecard = ({ data }: IndustryPageCardProps) => {
  return (
    <div className="industryPageCard">
      <div className="cardImg">
        <img src={data.img} alt="cardImg" />
      </div>
      <div className="content">
        <p className="title">{data.title}</p>
        <p className="description">{data.description}</p>
      </div>
    </div>
  );
};

export default Industrypagecard;
