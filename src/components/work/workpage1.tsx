import "./workpage1.scss";

import AuditTrust from "../../images/slider_dashboard.webp";
import BitFleq from "../../images/showcase_nft.webp";
import BnD from "../../images/simplify_work.webp";
import Logixa from "../../images/logixa.webp";
import React from "react";
import StackableCard from "./stackablecard";
import Wrapper from "../wrapper";

const Workpage1 = () => {

  const portfolioContainer = [
    {
      img: BitFleq,
      caption: "WEB3",
      title: "BitFleqs",
      path: "/work/bitfleq",
      description: "Revolutionizing Supply Chain Management with Blockchain Technology."
    },
    {
      img: BnD,
      caption: "INFRASTRUCTURE",
      title: "Build’n Deploy",
      path: "/work/bnd",
      description: "Leveraging BuildnDeploy.co for Streamlined Software engineering and Deployment."
    },
    {
      img: AuditTrust,
      caption: "CYBER SECURITY",
      title: "Audit Trust",
      path: "/work/audit_trust",
      description: "One Platform to Manage Your Security Program and  Compliance Posture."
    },
    {
      img: Logixa,
      caption: "Transportation & Logistics",
      title: "Logixa",
      path: "/work/logixa",
      description: "Revolutionizing Shipment Management Solutions for Enhanced Logistics and Seamless Supply Chain Operations"
    },
  ];

  return (
    <Wrapper>
      <div className="workpage1_parentContainer">
        <h4 className="workpage1_title">Portfolio</h4>
        <div className="workpage1_stack pb-80" id="workpage1_stack">
          {portfolioContainer.map((work, index) => {
            return(<StackableCard work={work} index={index} key={index} />)
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Workpage1;
