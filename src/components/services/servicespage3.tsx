import "./servicespage3.scss";

import { FLEXIBLE_TIME_ICON, FLEXIBLE_TIME_ICON_PURPLE, HUNGRY_ICON, HUNGRY_ICON_PURPLE, PARTERNERSHIP_ICON, PARTERNERSHIP_ICON_PURPLE, STACK_ICON, STACK_ICON_PURPLE } from "../../icons";

import React from "react";
import Wrapper from "../wrapper";

const ServicesPage3 = () => {

  const boxArr = [
    {
      icon: <FLEXIBLE_TIME_ICON className="servicepage3_Icon" />,
      iconHover: <FLEXIBLE_TIME_ICON_PURPLE className="servicepage3_IconHover" />,
      text: "Flexible work terms",
      paraText:
      "Our software company embraces flexible work terms, allowing our team to balance their personal and professional lives seamlessly.",
    },
    {
      icon: <HUNGRY_ICON className="servicepage3_Icon" />,
      iconHover: <HUNGRY_ICON_PURPLE className="servicepage3_IconHover" />,
      text: "Hungry and Unstoppable",
      paraText:
      "We're a team of passionate individuals who are hungry for innovation and unstoppable in our pursuit of excellence.",
    },
    {
      icon: <STACK_ICON className="servicepage3_Icon" />,
      iconHover: <STACK_ICON_PURPLE className="servicepage3_IconHover" />,
      text: "Full-stack, Fully-managed",
      paraText:
      "We handle every aspect of your software project, from inception to maintenance, ensuring a seamless and stress-free experience.",
    },
    {
      icon: <PARTERNERSHIP_ICON className="servicepage3_Icon" />,
      iconHover: <PARTERNERSHIP_ICON_PURPLE className="servicepage3_IconHover" />,
      text: "True partnership",
      paraText:
      "We don't just work for you; we work with you, building a true partnership that fosters collaboration and mutual success.",
    },
  ];

  return (
    <Wrapper>
      <div className="servicespage3_parentContainer" id="servicespage3_parentContainer" >
        <div className="servicespage3_gridContainer">
          <div className="servicespage3_leftContainer mt-12">
            <div className="servicespage3_titleDiv lineUp">
              Why to Work with Us
            </div>
          </div>
          <div className="servicespage3_rightContainer">
              <div className="servicespage3_listContainer ">
                {boxArr.map(
                  (
                    item: {
                      icon: JSX.Element;
                      iconHover: JSX.Element;
                      text: string;
                      paraText: string;
                    },
                    index: number
                    ) => {
                      return (
                        <div key={index} className='servicespage3_boxContainer'>
                        <div>
                          <span className="servicespage3_iconWhite">{item.icon}</span>
                          <span className="servicespage3_iconPurple">
                            {item.iconHover}
                          </span>
                        </div>
                        <div className="servicespage3_boxText">
                          {item.text}
                        </div>
                        <p className="servicespage3_boxPara">{item.paraText}</p>
                      </div>
                    );
                  }
                )}
              </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ServicesPage3;
