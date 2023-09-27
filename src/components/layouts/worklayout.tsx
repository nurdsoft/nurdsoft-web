import './worklayout.scss'

import * as React from "react";

import Background from '../common/background';
import Contact from '../contact/contact';
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
      <Contact showform={false} scrollerId='parallaxWorkLayout' />
      {React.useMemo(() => (<Background />), [])}
    </div>
  );
};

export default WorkLayout;
