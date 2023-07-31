import React, { useEffect, useState } from "react";
import JobDescriptionPage1 from "../jobDescription/jobDescriptionPage1";
import JobDescriptionPage2 from "../jobDescription/jobDescriptionPage2";
import JobDescriptionPage3 from "../jobDescription/jobDescriptionPage3";
import jobDataJSON from "../../../job_data.json";
import JobDescriptionPage4 from "../jobDescription/jobDescriptionPage4";
import './jobDescriptionlayout.scss';

const JobDescriptionlayout = () => {
  const [jobData, setJobData] = useState<any>();

  const typedJobDataJSON = jobDataJSON as Record<
    string,
    Record<string, string | string[]>
  >;

  useEffect(() => {
    const splitPathName = window.location.pathname.split("/");
    const slug = splitPathName[2];
    setJobData(typedJobDataJSON[`${slug}`]);
  }, []);
  return (
    <>
      {jobData ? (
        <div className="jobDescription_scroller" id={`jobDescription_scroller ${jobData?.qualities?.length ? 4 : 3}`} >
          <JobDescriptionPage1 data={jobData} />
          <JobDescriptionPage2 data={jobData} />
          <JobDescriptionPage3 data={jobData} />
          {
            jobData?.qualities?.length ?
            <JobDescriptionPage4 data={jobData} />:
            <></>
          }
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default JobDescriptionlayout;
