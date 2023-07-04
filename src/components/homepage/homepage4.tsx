import * as React from "react";
import "./homepage4.scss";
import Wrapper from "../wrapper";
import Lottie from "react-lottie";
import * as discoverJson from "../../animations/discover.json";
import * as uiuxJson from "../../animations/ui_ux.json";
import * as mvpJSON from "../../animations/mvp.json";
import * as implementationJSON from "../../animations/implementation.json";

const Homepage4 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const servicesContainer = [
    {
      title: "Discover, Investigate & Conceptualize",
      description:
        "Understand the problem set and ideate to conceptualize a product and vision.",
      lottieJson: { ...defaultOptions, animationData: discoverJson },
    },
    {
      title: "UI/UX, Design & Development",
      description:
        "Design a fresh look & feel for an energized user experience for an increased customer base.",
      lottieJson: { ...defaultOptions, animationData: uiuxJson },
    },
    {
      title: "MVP (Minimum Viable Product)",
      description:
        "Build a prototype to prove minimum viability and functionality to obtain funding, stake and interest.",
      lottieJson: { ...defaultOptions, animationData: mvpJSON },
    },
    {
      title: "Implementation, Redesign & Refactor",
      description:
        "Implementation per specification as well as  application refactor or a complete redesign for improved performance, stability and/ or cost optimization.",
      lottieJson: { ...defaultOptions, animationData: implementationJSON },
    },
  ];

  return (
    <Wrapper>
      <div className="homepage4_parentContainer">
        <h4 className="homepage4_servicesHeading">Services</h4>
        <div>
          {servicesContainer.map((serviceBlock: Record<string, any>, index: number) => {
            return (
              <div key={index} className="homepage4_boxContainer">
                <div className="w-1/5">
                  <div className="homepage4_lottieContainer">
                    <Lottie
                      height={150}
                      width={150}
                      options={serviceBlock.lottieJson}
                    />
                  </div>
                </div>
                <div className="homepage4_textContainer">
                  <h4 className="homepage4_heading">{serviceBlock.title}</h4>
                  <p className="homepage4_description">
                    {serviceBlock.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Homepage4;
