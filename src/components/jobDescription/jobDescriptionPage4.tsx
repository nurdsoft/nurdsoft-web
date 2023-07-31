import React, { useRef } from "react";
import "./jobDescriptionPage4.scss";
import Wrapper from "../wrapper";
import { CHECK_ICON } from "../../icons";
import Button from "../button";
import { FACEBOOK, GITHUB, LINKEDIN, TWITTER } from "../../icons";
import useIntersectionObserver from "../common/intersectionObserver";

const JobDescriptionPage4 = ({ data }: any) => {
  const triggerRef = useRef<any>();

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.5,
    freezeOnceVisible: false
  });

  const handleOpen = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <Wrapper>
      <div className="jobDescription4_parentContainer">
        <div className="jobDescription4_header" ref={triggerRef} >
          <h1 className={`section_title ${dataRef?.isIntersecting ? 'slide' : ''}`}>Qualities </h1>
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
            <div className="socialIcon" >
              <FACEBOOK
                onClick={() => handleOpen("https://www.facebook.com/nurdsoft")}
              />
            </div>
            <div className="socialIcon" >
              <TWITTER
                onClick={() => handleOpen("https://www.twitter.com/nurdsoft")}
              />
            </div>
            <div className="socialIcon" >
              <LINKEDIN
                onClick={() =>
                  handleOpen("https://www.linkedin.com/company/nurdsoft")
                }
              />
            </div>
            <div className="socialIcon" >
              <GITHUB
                onClick={() => handleOpen("https://www.github.com/nurdsoft")}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default JobDescriptionPage4;
