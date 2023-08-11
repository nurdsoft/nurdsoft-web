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

export const Head = (props: any) => {
  
  const typedJobDataJSON = jobDataJSON as Record<
  string,
  Record<string, string | string[]>
  >;

  return (
    <Seo
      title={`Nurdsoft - ${typedJobDataJSON[`${props?.pageContext?.slug}`]?.position}`}
      description={typedJobDataJSON[`${props?.pageContext?.slug}`]?.about as string}
    />
  )
}