import React from 'react';
import Wrapper from '../wrapper';
import ClientFeedbackCarousel from '../common/ClientFeedbackCarousel';
import Client from '../../images/client2.png';
import { IClientFeedback } from '../../types/carouselTypes';
import './aboutPage4.scss';

const AboutPage4 = () => {
    const data: IClientFeedback[] = [
        {
          clientImg: Client,
          clientResponse: "Nurdsoft is a software engineering studio specializing in bespoke software for businesses of all sizes including early stage startups.",
          clientName: "Client Name",
          clientDesignation: "Designation",
        },
        {
          clientImg: Client,
          clientResponse: "Nurdsoft is a software engineering studio specializing in bespoke software for businesses of all sizes including early stage startups.",
          clientName: "Client Name",
          clientDesignation: "Designation",
        }
      ]
      return (
        <Wrapper>
          <div className='aboutPage4_parentContainer'>
            <h1 className='heading'>What Our People <br/> Say About Us</h1>
            <ClientFeedbackCarousel data={data} />
          </div>
        </Wrapper>
      )
}

export default AboutPage4