import React from "react";
import Button from "../button";
import { iconMap } from "../../jobData";
import jobDataJSON from "../../../job_data.json";

const CareerCard = () => {
  console.log(jobDataJSON, "jobDataJSON");

  const typedJobDataJSON = jobDataJSON as Record<
    string,
    Record<string, string | string[]>
  >;

  // const jobData = [
  //   {
  //     position: "Lead Software Engineer",
  //     icon: iconMap["softwareEngineer"],
  //   },
  //   {
  //     position: "Sr. Software Engineer, Front-end",
  //     icon: iconMap["frontendEngineer"],
  //   },
  //   {
  //     position: "Sr. Software Engineer, Back-end",
  //     icon: iconMap["backendEngineer"],
  //   },
  //   {
  //     position: "Sr. Software Engineer, Machine Learning",
  //     icon: iconMap["machineLearningEngineer"],
  //   },
  //   {
  //     position: "Sr. Software Engineer, Mobile",
  //     icon: iconMap["mobileEngineer"],
  //   },
  //   {
  //     position: "DevOps Engineer",
  //     icon: iconMap["devopsEngineer"],
  //   },
  //   {
  //     position: "Software Engineer in Testing",
  //     icon: iconMap["testingEngineer"],
  //   },
  //   {
  //     position: "Technical Project Manager",
  //     icon: iconMap["projectManager"],
  //   },
  //   {
  //     position: "Digital Marketing & SEO Specialist",
  //     icon: iconMap["digitalMarketing"],
  //   },
  //   {
  //     position: "Salesforce Developer",
  //     icon: iconMap["salesforceEngineer"],
  //   },
  //   {
  //     position: "Head of Human Resources and Recruitment",
  //     icon: iconMap["humanResource"],
  //   },
  //   {
  //     position: "Data Science Engineer",
  //     icon: iconMap["dataScientist"],
  //   },
  //   {
  //     position: "Business Analyst",
  //     icon: iconMap["businessAnalyst"],
  //   },
  //   {
  //     position: "Product Manager",
  //     icon: iconMap["productManager"],
  //   },
  //   {
  //     position: "UI/UX Designer",
  //     icon: iconMap["uiuxDesigner"],
  //   },
  // ];

  return (
    <>
      {Object.keys(jobDataJSON).map((dataKey: string, index: number) => (
        <div className="careerPage3_card" key={index}>
          <div className="icon_container">
            {iconMap[typedJobDataJSON[dataKey].icon as string]}
          </div>
          <p className="jobPosition">{typedJobDataJSON[dataKey].position}</p>
          <div className="otherInfo">
            <p className="location">Remote</p>
            <Button className="viewDetailButton" buttonText="VIEW DETAILS" />
          </div>
        </div>
      ))}
    </>
  );
};

export default CareerCard;
