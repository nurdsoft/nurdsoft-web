import './industriesheropage.scss'

import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Wrapper from '../wrapper'

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
                  data.map((industry, _) => (
                    <div className='bulletPoint'>
                      <div className='circle'></div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, _) => (
                    <div className='bulletPoint'>
                      <div className='circle'></div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, _) => (
                    <div className='bulletPoint'>
                      <div className='circle'></div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, _) => (
                    <div className='bulletPoint'>
                      <div className='circle'></div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, _) => (
                    <div className='bulletPoint'>
                      <div className='circle'></div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, _) => (
                    <div className='bulletPoint'>
                      <div className='circle'></div>
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
                  data.map((industry, _) => (
                    <div className='bulletPoint'>
                      <div className='circle'></div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, _) => (
                    <div className='bulletPoint'>
                      <div className='circle'></div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, _) => (
                    <div className='bulletPoint'>
                      <div className='circle'></div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, _) => (
                    <div className='bulletPoint'>
                      <div className='circle'></div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, _) => (
                    <div className='bulletPoint'>
                      <div className='circle'></div>
                      <div className='text'>{industry}</div>
                    </div>
                  ))
                }
              </div>
              <div className='carouselRibbon'>
                {
                  data.map((industry, _) => (
                    <div className='bulletPoint'>
                      <div className='circle'></div>
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