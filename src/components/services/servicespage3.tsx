import * as React from "react";
import "./servicespage3.scss";
import Wrapper from "../wrapper";
import {
  SERVICES_HOME_ICON_1,
  SERVICES_HOME_ICON_2,
  SERVICES_HOME_ICON_3,
} from "../../icons";
import Button from "../button";

const ServicesPage3 = () => {
  const options = [
    "Flexible work terms",
    "Hungry and Unstoppable",
    "Full-stack, Fully-managed",
    "True partnership",
  ];

  return (
    <Wrapper>
      <div className="servicespage3_parentContainer">
        <div className="servicespage3_gridContainer">
          <div className="w-5/12 mt-12">
            <div className="servicespage3_titleDiv lineUp">
              Why to Work with Us
            </div>
            <div className="mt-12">
              <Button buttonText="SCHEDULE CONSULTATION" />
            </div>
          </div>
          <div className="servicespage3_rightContainer">
            <div className="servicespage3_listContainer mt-20 ml-12">
              {options.map((option: string, index: number) => {
                return (
                  <div key={index} className={index ^ 0 ? "mt-16" : ""}>
                    <small className="servicespage3_count ml-14">{`0${
                      index + 1
                    }`}</small>
                    <div className="servicespage3_options flex items-center">
                      <span className="mr-4 w-10">
                        <hr className="servicespage3_line" />
                      </span>
                      <div className="servicespage3_optionsList">{option}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ServicesPage3;
