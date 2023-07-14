import * as React from "react";
import "./dashboard.scss";
import Wrapper from "./wrapper";
import Button from "./button";
import { navigate } from "gatsby";

const Dashboard = () => {
  const onServiceButtonClick = () => {
    navigate("/services/");
  };

  return (
    <>
      <Wrapper>
        <div>
          <div className="dashboardParentContainer">
            <div className="softwareDiv">SOFTWARE ENGINEERING STUDIO</div>
            <div className="mainTitleDashboardDiv lineUp">
              We build stunning online experiences
            </div>
            <Button onClick={onServiceButtonClick} buttonText="OUR SERVICES" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Dashboard;
