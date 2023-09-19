import './servicespage5.scss'

import React, {useEffect, useState} from 'react'

import ServiceView from './serviceview'
import Wrapper from '../wrapper'

const ServicesPage5 = () => {
    const servicesData = [
        {
            heading: 'Application Development',
            description: 'Creating software for specific needs, like mobile apps or web tools, combining coding, testing, and deployment. Enhancing efficiency and user experience across industries.',
            hash: "application-development"
        },
        {
            heading: 'Data & Analytics',
            description: 'Data & analytics involves collecting, processing, and interpreting data to gain insights and make informed decisions across industries and domains.',
            hash: "data-analytics"
        },
        {
            heading: 'Metaverse',
            description: 'The metaverse is a virtual shared space where users interact, socialize, and engage through avatars, combining elements of the physical and digital worlds for various activities and experiences.',
            hash: "metaverse"
        },
        {
            heading: 'Artificial Intelligence',
            description: 'Artificial Intelligence refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human cognitive abilities.',
            hash: "artificial-intelligence"
        },
        {
            heading: 'E-Commerce',
            description: 'E-commerce involves buying and selling goods or services online, providing a convenient platform for transactions, browsing products, and secure payment processing.',
            hash: "e-commerce"
        },
        {
            heading: 'Technology Consulting',
            description: 'Technology consulting offers expert guidance to businesses, helping them leverage advanced tools and strategies to enhance efficiency, solve challenges, and achieve their goals in the ever-evolving digital landscape.',
            hash: "technology-consulting"
        },
        {
            heading: 'Cloud/DevOps',
            description: 'Cloud/DevOps combines cloud computing and development operations, streamlining software development and deployment processes. It optimizes collaboration, automation, and scalability for faster and more efficient application delivery.',
            hash: "cloud-devops"
        },
        {
            heading: 'Enterprise Platforms',
            description: 'Enterprise platforms are comprehensive software systems that support critical business functions. They enhance efficiency, data management, and communication across large organizations.',
            hash: "enterprise-platforms"
        },
        {
            heading: 'Blockchain',
            description: 'Blockchain is a decentralized digital ledger that securely records and verifies transactions, providing transparency and immutability for various applications, from cryptocurrencies to supply chain tracking.',
            hash: "blockchain"
        }
    ]

    const [currentActiveSlide, setCurrentActiveSlide] = useState(0)

    return (
        <Wrapper id='servicespage5_parentContainer'>
            <div className='servicespage5_parentContainer'>
                <div className='servicespage5_menu'>
                    {
                        servicesData.map(({heading, hash}, index) => (
                            <a href={`#${hash}`} key={index} className={`menuItem ${currentActiveSlide === index && "active"}`}>{heading}</a>
                        ))
                    }
                </div>
                <div className='servicespage5_content' id='servicespage5_content'>
                    {
                        servicesData.map(({heading, description, hash}, index) => (
                            <ServiceView
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

export default ServicesPage5