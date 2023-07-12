import React from 'react'
import Wrapper from '../wrapper'
import './industryPage1.scss'
import IndustryPageCard from './industryPageCard'
import CyberSecurity from '../../components/videos/cyber_security_industry.gif'
import Blockchain from "../../components/videos/blockchain_industry.gif"
import RealEstate from "../../components/videos/real_estate_industry.gif"
import Healthcare from "../../components/videos/healthcare_industry.gif"
import Fintech from "../../components/videos/fintech_industry.gif"
import Crypto from "../../components/videos/crypto_industry.gif"

const IndustryPage1 = () => {
  const data = [
    {
      img: CyberSecurity,
      title: "Cyber Security",
      description: "Understand the problem set and ideate to conceptualize a product and vision. Understand the problem set and ideate to conceptualize a product and vision."
    },
    {
      img: Blockchain,
      title: "Blockchain",
      description: "Blockchain is a decentralized and distributed ledger technology that enables the secure and transparent recording of transactions across multiple computers or nodes."
    },
    {
      img: RealEstate,
      title: "Real Estate",
      description: "Real estate refers to property consisting of land and the buildings or structures on it, along with the natural resources present on or beneath the land. It is a vast and diverse industry that encompasses residential, commercial, industrial, and agricultural properties."
    },
    {
      img: Healthcare,
      title: "Healthcare",
      description: "The healthcare sector comprises various entities, including hospitals, clinics, primary care providers, specialists, laboratories, pharmaceutical companies, and healthcare professionals such as doctors, nurses, technicians, and therapists."
    },
    {
      img: Fintech,
      title: "Fintech",
      description: "Understand the problem set and ideate to conceptualize a product and vision. Understand the problem set and ideate to conceptualize a product and vision."
    },
    {
      img: Crypto,
      title: "Crypto",
      description: "Fintech companies leverage cutting-edge technologies such as artificial intelligence, big data analytics, blockchain, cloud computing, and mobile applications to offer a diverse array of financial products and services."
    },
  ]
  return (
    <Wrapper>
      <div className='industryPage1_parentContainer'>
        <h1>Software <span>solutions</span><br /> for every sector</h1>
        <div className='cardsContainer'>
          {
            data.map((cardData, index) => <IndustryPageCard data={cardData} key={index} />)
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default IndustryPage1