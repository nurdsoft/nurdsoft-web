import * as React from "react";
import Workpage1 from "../work/workpage1";

const WorkLayout = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--black-100)",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <Workpage1 />
    </div>
  );
};

export default WorkLayout;
