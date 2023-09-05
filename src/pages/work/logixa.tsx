import { type PageProps } from 'gatsby'
import React from 'react'
import Seo from '../../components/seo'
import Layout from '../../components/layout'
import Logixalayout from '../../components/layouts/logixalayout'

const Logixa: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Logixalayout />
    </Layout>
  )
}

export default Logixa

export const Head = () => (
  <Seo 
    title="Nurdsoft - Logixa"
    description="Logixa is an inventory management and route optimization to real-time tracking and data analytics application."
  />
)