import * as React from "react";
import "./servicespage4.scss";
import Wrapper from "../wrapper";
import Button from "../button";
import CyberSecurity from "../videos/cyber_security_industry.gif";
import Blockchain from "../videos/blockchain_industry.gif";
import RealEstate from "../videos/real_estate_industry.gif";
import Healthcare from "../videos/healthcare_industry.gif";
import Fintech from "../videos/fintech_industry.gif";
import Crypto from "../videos/crypto_industry.gif";

const Servicespage4 = () => {
  return (
    <Wrapper>
      <div className="servicespage4_parentContainer">
        <div className="servicespage4_gridContainer">
          <div className="servicespage4_boxContainer servicespage4_item1">
            <span className="servicespage4_hide">Blockchain</span>
            <span className="servicespage4_showVideo">
              <img
                src={Blockchain}
                className="servicespage4_backgroundImg"
                alt="Blockchain"
              />
            </span>
          </div>
          <div className="servicespage4_item2">
            <div className="h-full">
              <div className="cursor-pointer servicespage4_gridBox1  flex-col text-center items-center justify-center servicespage4_gridBorder">
                <h4 className="servicespage4_industryTitle lineUp">Industry</h4>
                <p className="servicespage4_industryPara lineUp">
                  We provide services to clients in a variety of industries
                </p>
              </div>
              <div className="cursor-pointer servicespage4_gridBox3 pl-20">
                <Button buttonText="VIEW OUR WORK" />
              </div>
            </div>
          </div>
          <div className="servicespage4_boxContainer servicespage4_item3">
            <span className="servicespage4_hide"> Cyber Security</span>
            <span className="servicespage4_showVideo">
              <img
                src={CyberSecurity}
                className="servicespage4_backgroundImg"
                alt="Cyber Security"
              />
            </span>
          </div>
          <div className="servicespage4_boxContainer servicespage4_item4">
            <span className="servicespage4_hide">Crypto</span>
            <span className="servicespage4_showVideo">
              <img
                src={Crypto}
                className="servicespage4_backgroundImg"
                alt="Crypto"
              />
            </span>
          </div>
          <div className="servicespage4_boxContainer servicespage4_item5">
            <span className="servicespage4_hide">Fintech</span>
            <span className="servicespage4_showVideo">
              <img
                src={Fintech}
                className="servicespage4_backgroundImg"
                alt="Fintech"
              />
            </span>
          </div>
          <div className="servicespage4_boxContainer servicespage4_item6">
            <span className="servicespage4_hide"> Real Estate</span>
            <span className="servicespage4_showVideo">
              <img
                src={RealEstate}
                className="servicespage4_backgroundImg"
                alt="Real Estate"
              />
            </span>
          </div>
          <div className="servicespage4_boxContainer servicespage4_item7">
            <span className="servicespage4_hide"> Healthcare</span>
            <span className="servicespage4_showVideo">
              <img
                src={Healthcare}
                className="servicespage4_backgroundImg"
                alt="Healthcare"
              />
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Servicespage4;
