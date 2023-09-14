import './worklayout.scss'

import * as React from "react";

import Workpage1 from "../work/workpage1";

const WorkLayout = () => {
  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
      }}
      className="parallaxWorkLayout"
      id="parallaxWorkLayout"
    >
      <Workpage1 />
    </div>
  );
};

export default WorkLayout;
