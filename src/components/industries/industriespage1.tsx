import "./industriespage1.scss";

import React, {useState} from 'react'

import IndustryView from "./industryview";
import Wrapper from '../wrapper'

const Industriespage1 = () => {
    const data = [
      {
        hash:'Media',
        heading: `Media & Entertainment`,
        description:
          "Fuel creativity with Media & Entertainment software. Craft visual and audio marvels, bringing stories to life. Empower creators in film, music, gaming, and more to reshape entertainment.",
      },
      {
        hash:'Sports',
        heading: "Sports",
        description:
          "Revolutionize sports with advanced software. Boost athlete performance and fan engagement. Transform training, strategy, and spectator experiences.",
      },
      {
        hash:'Logistics',
        heading: "Logistics",
        description:
          "Elevate logistics with cutting-edge software. Manage global movement effortlessly – from route planning to real-time tracking.",
      },
      {
        hash:'Healthcare',
        heading: "Healthcare",
        description:
          "Simplify admin tasks, digitize records, and enhance communication among professionals. Empower medical teams for better decisions, improved workflows, and secure data management.",
      },
      {
        hash:'Fintech',
        heading: "Fintech",
        description:
          "Shape finance with fintech software. Modernize transactions, banking, and payments. From budgeting to trading, experience innovation driving efficiency and security.",
      },
      {
        hash:'Retail',
        heading: "Retail",
        description:
          "Revamp retail with advanced software. Simplify sales, inventory, and customer experiences. Whether online or in-store, this tech transforms business and customer interactions.",
      },
      {
        hash:'Gaming',
        heading: "Gaming",
        description:
          "Dive into immersive visuals, dynamic gameplay, and interactive experiences. From RPGs to eSports, tech transforms entertainment.",
      },
      {
        hash:'Hospitality',
        heading: "Hospitality & Leisure",
        description:
          "Enhance guest services, streamline operations, and personalize experiences. From hotels to leisure spots, tech shapes a new era of hospitality.",
      },
      {
        hash:'RealEstate',
        heading: "Real Estate",
        description:
          "Revamp real estate with innovative software. Simplify listings, workflows, and communication. From agents to investors, tech reshapes transactions and interactions.",
      },
    ];

    const [currentActiveSlide, setCurrentActiveSlide] = useState(0)

    return (
        <Wrapper id='industriespage1_parentContainer'>
            <div className='industriespage1_parentContainer'>
                <div className='industriespage1_menu'>
                    {
                        data.map(({heading, hash}, index) => (
                            <a href={`#${hash}`} key={index} className={`menuItem ${currentActiveSlide === index && "active"}`}>{heading}</a>
                        ))
                    }
                </div>
                <div className='industriespage1_content' id='industriespage1_content'>
                    {
                        data.map(({heading, description, hash}, index) => (
                            <IndustryView
                                heading={heading}
                                description={description}
                                key={index}
                                index={index + 1}
                                setCurrentActiveSlide={setCurrentActiveSlide}
                                currentActiveSlide={currentActiveSlide}
                                id={hash}
                            />
                        ))
                    }
                </div>
            </div>
        </Wrapper>
    )
}

export default Industriespage1
