import "./industriespage1.scss";

import { IndustryData } from "../../types/industryTypes";
import React from "react";
import Wrapper from "../wrapper";

const Industriespage1 = () => {
  const data: IndustryData[] = [
    {
      img: '',
      title: "Cyber Security",
      description:
        "Understand the problem set and ideate to conceptualize a product and vision. Understand the problem set and ideate to conceptualize a product and vision.",
    },
    {
      img: '',
      title: "Blockchain",
      description:
        "Blockchain is a decentralized and distributed ledger technology that enables the secure and transparent recording of transactions across multiple computers or nodes.",
    },
    {
      img: '',
      title: "Real Estate",
      description:
        "Real estate refers to property consisting of land and the buildings or structures on it, along with the natural resources present on or beneath the land. It is a vast and diverse industry that encompasses residential, commercial, industrial, and agricultural properties.",
    },
    {
      img: '',
      title: "Healthcare",
      description:
        "The healthcare sector comprises various entities, including hospitals, clinics, primary care providers, specialists, laboratories, pharmaceutical companies, and healthcare professionals such as doctors, nurses, technicians, and therapists.",
    },
    {
      img: '',
      title: "Fintech",
      description:
        "Understand the problem set and ideate to conceptualize a product and vision. Understand the problem set and ideate to conceptualize a product and vision.",
    },
    {
      img: '',
      title: "Crypto",
      description:
        "Fintech companies leverage cutting-edge technologies such as artificial intelligence, big data analytics, blockchain, cloud computing, and mobile applications to offer a diverse array of financial products and services.",
    },
  ];
  return (
    <Wrapper>
      <div className="industryPage1_parentContainer">
        <p>industry page 1</p>
      </div>
    </Wrapper>
  );
};

export default Industriespage1;
