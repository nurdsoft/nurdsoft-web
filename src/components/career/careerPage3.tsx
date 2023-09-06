import "./careerPage3.scss";

import Button from "../button";
import CareerCard from "./careerCard";
import React from "react";
import Wrapper from "../wrapper";
import jobDataJSON from "../../../job_data.json";
import { navigate } from "gatsby";

const CareerPage3 = () => {

  const typedJobDataJSON = jobDataJSON as Record<
    string,
    Record<string, string | string[]>
  >;

  const handleAboutUs = () => {
    navigate("/about/");
  };

  return (
    <Wrapper id="careerPage3">
      <div
        className="careerPage3_parentContainer"
        id="careerPage3_parentContainer"
      >
        <div className="careerPage3_headingWrapper">
          <h1 className="careerPage3_heading">
            Open <br /> Position
          </h1>
          <Button buttonText="ABOUT US" onClick={handleAboutUs} />
        </div>
        <div className="careerPage3_cardView_wrapper">
          <div className="careerPage3_cardView" id="careerPage3_cardView">
            {Object.keys(jobDataJSON).map((dataKey: string, index: number) => {
              return(
                <CareerCard 
                  data={typedJobDataJSON[dataKey]}
                  dataKey={dataKey}
                  key={dataKey} 
                  index={index}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CareerPage3;
