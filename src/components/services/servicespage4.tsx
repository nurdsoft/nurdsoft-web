import * as React from "react";
import "./servicespage4.scss";
import Wrapper from "../wrapper";
import Button from "../button";
import Video from "../video";
import Blockchain from "../videos/blockchain.mp4";
import Security from "../videos/security.mp4";
import Crypto from "../videos/crypto.mp4";
import Finance from "../videos/finance.mp4";
import Healthcare from "../videos/healthcare.mp4";
import RealEstate from "../videos/real-estate.mp4";

const Servicespage4 = () => {
  return (
    <Wrapper>
      <div className="servicespage4_parentContainer">
        <div className="servicespage4_gridContainer">
          <div className="servicespage4_boxContainer servicespage4_item1">
            <span className="servicespage4_hide">Blockchain</span>
            <span className="servicespage4_showVideo">
              <Video
                videoSrcURL={Blockchain}
                videoTitle="Blockchain"
                autoplay={true}
                loop={true}
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
              <Video
                videoSrcURL={Security}
                videoTitle="Security"
                autoplay={true}
                loop={true}
              />
            </span>
          </div>
          <div className="servicespage4_boxContainer servicespage4_item4">
            <span className="servicespage4_hide">Crypto</span>
            <span className="servicespage4_showVideo">
              <Video
                videoSrcURL={Crypto}
                videoTitle="Crypto"
                autoplay={true}
                loop={true}
              />
            </span>
          </div>
          <div className="servicespage4_boxContainer servicespage4_item5">
            <span className="servicespage4_hide">Fintech</span>
            <span className="servicespage4_showVideo">
              <Video
                videoSrcURL={Finance}
                videoTitle="Fintech"
                autoplay={true}
                loop={true}
              />
            </span>
          </div>
          <div className="servicespage4_boxContainer servicespage4_item6">
            <span className="servicespage4_hide"> Real Estate</span>
            <span className="servicespage4_showVideo">
              <Video
                videoSrcURL={RealEstate}
                videoTitle="Real Estate"
                autoplay={true}
                loop={true}
              />
            </span>
          </div>
          <div className="servicespage4_boxContainer servicespage4_item7">
            <span className="servicespage4_hide"> Healthcare</span>
            <span className="servicespage4_showVideo">
              <Video
                videoSrcURL={Healthcare}
                videoTitle="Healthcare"
                autoplay={true}
                loop={true}
              />
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Servicespage4;
