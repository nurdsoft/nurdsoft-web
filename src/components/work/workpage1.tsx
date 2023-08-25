import "./workpage1.scss";

import React, { useEffect } from "react";

import AuditTrust from "../../images/slider_dashboard.png";
import BitFleq from "../../images/showcase_nft.png";
import BnD from "../../images/simplify_work.png";
import Logixa from "../../images/logixa.png";
import StackableCard from "./stackablecard";
import Wrapper from "../wrapper";

const Workpage1 = () => {
  if(typeof window === "undefined") return <></>;

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
      description: "Leveraging BuildnDeploy.co for Streamlined Software Development and Deployment."
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
      path: "/work",
      description: "Revolutionizing Shipment Management Solutions for Enhanced Logistics and Seamless Supply Chain Operations"
    },
  ];

  useEffect(() => {
    const stack = document.getElementById('workpage1_stack')
    if(!stack) return    
    stack.style.paddingBottom = `${window.innerHeight - 400}px`
  }, [window])

  return (
    <Wrapper>
      <div className="workpage1_parentContainer">
        <h4 className="workpage1_title">Portfolio</h4>
        <div className="workpage1_stack" id="workpage1_stack">
          {portfolioContainer.map((work, index) => {
            return(<StackableCard work={work} index={index} key={index} />)
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Workpage1;
