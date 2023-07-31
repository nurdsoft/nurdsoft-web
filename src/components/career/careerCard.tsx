import React from "react";
import Button from "../button";
import { iconMap } from "../../jobData";
import jobDataJSON from "../../../job_data.json";
import { navigate } from "gatsby";

const CareerCard = () => {

  const typedJobDataJSON = jobDataJSON as Record<
    string,
    Record<string, string | string[]>
  >;

  const handleViewDetails = (dataKey: string) => {
    navigate(`/career/${dataKey}`)
  }

  return (
    <>
      {Object.keys(jobDataJSON).map((dataKey: string, index: number) => {
        const SVG = iconMap[typedJobDataJSON[dataKey].icon as string]
        return(
          <div className="careerPage3_card" key={index}>
            <div className="icon_container">
              <SVG className="careerCardIcon" />
            </div>
            <p className="jobPosition">{typedJobDataJSON[dataKey].position}</p>
            <div className="otherInfo">
              <p className="location">Remote</p>
              <Button className="viewDetailButton" onClick={() => handleViewDetails(dataKey)} buttonText="VIEW DETAILS" />
            </div>
          </div>
        )
      })}
    </>
  );
};

export default CareerCard;
