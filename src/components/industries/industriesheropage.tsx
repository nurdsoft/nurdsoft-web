import './industriesheropage.scss'

import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Wrapper from '../wrapper'
import { INDUSTRY_FINTECH_ICON, INDUSTRY_GAMING_ICON, INDUSTRY_HEALTHCARE_ICON, INDUSTRY_HOSPLIES_ICON, INDUSTRY_LOGISTIC_ICON, INDUSTRY_MEDIAENT_ICON, INDUSTRY_REALESTATE_ICON, INDUSTRY_RETAIL_ICON, INDUSTRY_SPORTS_ICON } from '../../icons'

const IndustriesHeroPage = () => {
  const data = [
    "Healthcare",
    "Media & Entertainment",
    "Sports",
    "Logistics",
    "Fintech",
    "Retail",
    "Gaming",
    "Hospitality & Leisure",
    "Real Estate"
  ]
  const icons = [
    <INDUSTRY_HEALTHCARE_ICON />,
    <INDUSTRY_MEDIAENT_ICON />,
    <INDUSTRY_SPORTS_ICON />,
    <INDUSTRY_LOGISTIC_ICON />,
    <INDUSTRY_FINTECH_ICON />,
    <INDUSTRY_RETAIL_ICON />,
    <INDUSTRY_GAMING_ICON />,
    <INDUSTRY_HOSPLIES_ICON />,
    <INDUSTRY_REALESTATE_ICON />,
  ]
  return (
    <Wrapper id="industryHeroPage_parentContainer">
      <div className='industryHeroPage_parentContainer'>
        <h1 className='heroText'>
          Software <span className='primary100'>solutions </span> <br/> for every sector
        </h1>
        <div className='heroImg'>
          <StaticImage
            src="../../images/industryHeroImg.svg"
            quality={100}
            alt="Industry hero bg"
          />
        </div>
        <div className='ribbonWrapper'>
          <div className='ribbon'>
            <div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, index) => (
                    <div className='bulletPoint' key={index}>
                      <div className='circle'>{icons[index]}</div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, index) => (
                    <div className='bulletPoint' key={index}>
                      <div className='circle'>{icons[index]}</div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, index) => (
                    <div className='bulletPoint' key={index}>
                      <div className='circle'>{icons[index]}</div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, index) => (
                    <div className='bulletPoint' key={index}>
                      <div className='circle'>{icons[index]}</div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, index) => (
                    <div className='bulletPoint' key={index}>
                      <div className='circle'>{icons[index]}</div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, index) => (
                    <div className='bulletPoint' key={index}>
                      <div className='circle'>{icons[index]}</div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className='ribbon transparent'>
            <div className='transparent'>
              <div className='carouselRibbon'>
                {
                  data.map((industry, index) => (
                    <div className='bulletPoint' key={index}>
                      <div className='circle'>{icons[index]}</div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, index) => (
                    <div className='bulletPoint' key={index}>
                      <div className='circle'>{icons[index]}</div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, index) => (
                    <div className='bulletPoint' key={index}>
                      <div className='circle'>{icons[index]}</div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, index) => (
                    <div className='bulletPoint' key={index}>
                      <div className='circle'>{icons[index]}</div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, index) => (
                    <div className='bulletPoint' key={index}>
                      <div className='circle'>{icons[index]}</div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, index) => (
                    <div className='bulletPoint' key={index}>
                      <div className='circle'>{icons[index]}</div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default IndustriesHeroPage