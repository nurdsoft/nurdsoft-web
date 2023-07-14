import React from "react";
import "./industriespage2.scss";
import Wrapper from "../wrapper";
import Client from "../../images/client.png";
import Logo from "../../images/Logo.svg";
import { IClientFeedback } from "../../types/carouselTypes";
import ClientFeedbackCarousel from "../common/clientFeedbackCarousel";

const Industriespage2 = () => {
  const data: IClientFeedback[] = [
    {
      clientImg: Client,
      clientResponse:
        "Nurdsoft is a software engineering studio specializing in bespoke software for businesses of all sizes including early stage startups.",
      clientName: "Client Name",
      clientDesignation: "Designation",
      clientCompanyLogo: Logo,
    },
    {
      clientImg: Client,
      clientResponse:
        "Nurdsoft is a software engineering studio specializing in bespoke software for businesses of all sizes including early stage startups.",
      clientName: "Client Name",
      clientDesignation: "Designation",
      clientCompanyLogo: Logo,
    },
  ];
  return (
    <Wrapper>
      <div className="industryPage2_parentContainer">
        <h1 className="heading">
          Client <br /> Testimonials
        </h1>
        <ClientFeedbackCarousel data={data} />
      </div>
    </Wrapper>
  );
};

export default Industriespage2;
