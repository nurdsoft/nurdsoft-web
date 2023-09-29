import "./careerPage3.scss";

import CareerCard from "./careerCard";
import React from "react";
import Wrapper from "../wrapper";
import jobDataJSON from "../../../job_data.json";

const CareerPage3 = () => {

  const typedJobDataJSON = jobDataJSON as Record<
    string,
    Record<string, string | string[]>
  >;

  return (
    <Wrapper id="careerPage3">
      <div
        className="careerPage3_parentContainer"
        id="careerPage3_parentContainer"
      >
        <div className="careerPage3_headingWrapper">
          <h1 className="careerPage3_heading">
            Open Positions
          </h1>
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
