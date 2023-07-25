import React from "react";
import "./jobDescriptionPage4.scss";
import Wrapper from "../wrapper";
import { CHECK_ICON } from "../../icons";
import Button from "../button";
import { FACEBOOK, GITHUB, LINKEDIN, TWITTER } from "../../icons";

const JobDescriptionPage4 = ({ data }: any) => {
  return (
    <Wrapper>
      <div className="jobDescription4_parentContainer">
        <div className="jobDescription4_header">
          <h1 className="section_title">Qualities </h1>
        </div>
        {data.qualities.map((quality: string, index: number) => (
          <div className="jobDescription4_bulletPoint" key={index}>
            <CHECK_ICON className="bulletPoint_icon" />
            <p className="bulletPoint_data">{quality}</p>
          </div>
        ))}
        <div className="applyNow_wrapper">
          <Button buttonText="APPLY NOW" />
          <div className="socialIcons_wrapper">
            <FACEBOOK
              onClick={() => window.open("https://www.facebook.com/nurdsoft")}
              className="socialIcon"
            />
            <TWITTER
              onClick={() => window.open("https://www.twitter.com/nurdsoft")}
              className="socialIcon"
            />
            <LINKEDIN
              onClick={() =>
                window.open("https://www.linkedin.com/company/nurdsoft")
              }
              className="socialIcon"
            />
            <GITHUB
              onClick={() => window.open("https://www.github.com/nurdsoft")}
              className="socialIcon"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default JobDescriptionPage4;
