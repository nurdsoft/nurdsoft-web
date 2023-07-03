import * as React from "react";
import "./homepage1.scss";
import Button from "../button";
import Wrapper from "../wrapper";
import { StaticImage } from "gatsby-plugin-image";

const Homepage1 = () => {
  return (
    <Wrapper>
      <div className="homepage1_parentContainer">
        <div className="flex">
          <div>
            <div className="mainTitleDiv lineUp">
              We’re a software and services company that builds and transforms
              businesses using technologies, data and AI.
            </div>
            <Button buttonText="WHO WE ARE" />
          </div>
          <div className="mt-36 imageContainer">
            <img
              src="/think-about.png"
              width={1000}
              height={1200}
              alt="Think About Image"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Homepage1;
