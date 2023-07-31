import React, { useRef } from "react";
import "./jobDescriptionPage4.scss";
import Wrapper from "../wrapper";
import { CHECK_ICON } from "../../icons";
import useIntersectionObserver from "../common/intersectionObserver";
import ApplyNowJD from "./applyNowJD";

const JobDescriptionPage4 = ({ data }: any) => {
  const triggerRef = useRef<any>();

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.5,
    freezeOnceVisible: false
  });

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
        <ApplyNowJD />
      </div>
    </Wrapper>
  );
};

export default JobDescriptionPage4;
