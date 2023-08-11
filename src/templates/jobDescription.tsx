import React, { useEffect, useState } from 'react'

import JobDescriptionlayout from '../components/layouts/jobDescriptionlayout'
import Layout from '../components/layout'
import Seo from '../components/seo'
import jobDataJSON from "../../job_data.json";

const JobDescription = () => {
  return (
    <>
      <Layout>
        <JobDescriptionlayout />
      </Layout>
    </>
  )
}

export default JobDescription

export const Head = () => {
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
    <Seo
      title={`Nurdsoft - ${jobData?.position}`}
      description={jobData?.about}
    />
  )
}