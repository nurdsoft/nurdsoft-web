import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React, { useEffect, useState } from 'react';
import JobDescriptionPage1 from '../jobDescription/jobDescriptionPage1'
import JobDescriptionPage2 from '../jobDescription/jobDescriptionPage2'
import JobDescriptionPage3 from '../jobDescription/jobDescriptionPage3'
import jobDataJSON from "../../../job_data.json";
import JobDescriptionPage4 from '../jobDescription/jobDescriptionPage4';

const JobDescriptionlayout = () => {
  const [jobData, setJobData] = useState<any>()

  const typedJobDataJSON = jobDataJSON as Record<
    string,
    Record<string, string | string[]>
  >;

  useEffect(() => {
    const splitPathName = window.location.pathname.split('/')
    const slug = splitPathName[2]
    setJobData(typedJobDataJSON[`${slug}`])
  }, [])
  return (
    <>
      {
        jobData ?
        <Parallax id={`jobDescription_scroller ${jobData?.qualities?.length ? 4 : 3}`} pages={jobData?.qualities?.length ? 4 : 3}>
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={0}
            style={{
              backgroundColor: "var(--black-100)",
            }}
          >
            <JobDescriptionPage1 data={jobData} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0}
            factor={0}
            style={{
              backgroundColor: "var(--black-100)",
            }}
          >
            <JobDescriptionPage2 data={jobData} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0}
            factor={0}
            style={{
              backgroundColor: "var(--black-100)",
            }}
          >
            <JobDescriptionPage3 data={jobData} />
          </ParallaxLayer>
          {
            jobData?.qualities?.length ?
            <ParallaxLayer
              offset={3}
              speed={0}
              factor={0}
              style={{
                backgroundColor: "var(--black-100)",
              }}
            >
              <JobDescriptionPage4 data={jobData} />
            </ParallaxLayer> :
            <></>
          }
        </Parallax>:
        <></>
      }
    </>
  )
}

export default JobDescriptionlayout