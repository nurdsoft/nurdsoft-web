import { IJobDescripttionContext } from '../types/industryTypes'
import JobDescriptionlayout from '../components/layouts/jobDescriptionlayout'
import Layout from '../components/layout'
import React from 'react'
import Seo from '../components/seo'

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

export const Head = ({pageContext}: IJobDescripttionContext) => {

  return (
    <Seo
      title={`Nurdsoft - ${pageContext?.data?.position}`}
      description={pageContext?.data?.about as string}
    />
  )
}