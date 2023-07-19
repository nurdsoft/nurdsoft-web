import React from "react";
import "./workpage1.scss";
import Wrapper from "../wrapper";
import BitFleq from "../../images/showcase_nft.png";
import BnD from "../../images/simplify_work.png";
import AuditTrust from "../../images/slider_dashboard.png";
import { Link } from "gatsby";

const Workpage1 = () => {
  const portfolioContainer = [
    {
      img: BitFleq,
      caption: "WEB3",
      title: "BitFleqs",
      path: "/work/bitfleq",
    },
    {
      img: BnD,
      caption: "INFRASTRUCTURE",
      title: "Build’n Deploy",
      path: "/work/bnd",
    },
    {
      img: AuditTrust,
      caption: "CYBER SECURITY",
      title: "Audit Trust",
      path: "/work/audit_trust",
    },
  ];

  return (
    <Wrapper>
      <div className="workpage1_parentContainer">
        <h4 className="workpage1_title">Portfolio</h4>
        <div className="workpage1_cardsContainer">
          {portfolioContainer.map(
            (portfolio: Record<string, any>, index: number) => {
              return (
                <div key={index} className="workpage1_workBox">
                  <Link to={portfolio.path}>
                    <div className="workpage1_cardImg">
                      <img src={portfolio.img} alt="cardImg" />
                    </div>
                  </Link>
                  <div className="workpage1_content">
                    <p className="workpage1_caption">{portfolio.caption}</p>
                    <p className="workpage1_title">{portfolio.title}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Workpage1;
