import React from 'react'
import './IndustryPageCard.scss'

interface IndustryPageCardProps {
    data: {
        img: string;
        title: string;
        description: string;
    }
}

const IndustryPageCard = ({data}: IndustryPageCardProps) => {
  return (
    <div className='industryPageCard'>
        <div className='cardImg'>
            <img src={data.img} alt='cardImg' />
        </div>
        <div className='content'>
            <p className='title'>{data.title}</p>
            <p className='description'>{data.description}</p>
        </div>
    </div>
  )
}

export default IndustryPageCard