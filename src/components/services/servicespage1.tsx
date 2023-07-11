import * as React from "react";
import "./servicespage1.scss";
import Wrapper from "../wrapper";
import { StaticImage } from "gatsby-plugin-image";

const ServicesPage1 = () => {
  return (
    <Wrapper>
      <div className="servicespage1_parentContainer">
        <div className="servicespage1_gridContainer">
          <div className="servicespage1_boxContainer servicespage1_item1">
            <h4 className="servicepage1_boxTitle">Websites and Portals</h4>
          </div>
          <div className="servicespage1_item2 servicespage1_boxContainer servicespage1_gridBorder">
            <h4 className="servicepage1_boxTitle">Sass Projects</h4>
          </div>
          <div className="servicespage1_boxContainer servicespage1_item3">
            <h4 className="servicepage1_boxTitle">Mobile Apps</h4>
          </div>
          <div className="servicespage1_boxContainer servicespage1_item4">
            <StaticImage
              src="../../images/deluxe.png"
              quality={100}
              alt="Deluxe"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ServicesPage1;
