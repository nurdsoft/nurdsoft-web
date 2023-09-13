import "./homepage1.scss";

import * as React from "react";

import Button from "../button";
import HandInHand from "../../images/handInHand.svg";
import Wrapper from "../wrapper";
import { navigate } from "gatsby";

const Homepage1 = () => {
  return (
    <Wrapper>
      <div className="homepage1_parentContainer">
        <div className="contentWrapper">
          <div>
            <div className="mainTitleDiv lineUp">
              We’re a software and services company that builds and transforms
              businesses using technologies, data and AI.
            </div>
            <Button
              buttonText="WHO WE ARE"
              onClick={() => navigate("/about/")}
            />
          </div>
          <div className="mt-36 imageContainer">
            <img
              src={HandInHand}
              alt="Think About Image"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Homepage1;
