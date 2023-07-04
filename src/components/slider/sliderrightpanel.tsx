import * as React from "react";
import "./sliderrightpanel.scss";
import Wrapper from "../wrapper";

interface SliderRightPanelI {
  children: JSX.Element;
}

const SliderRightPanel = ({ children }: SliderRightPanelI) => {
  return <div className="sliderrightpanel_parentContainer">{children}</div>;
};

export default SliderRightPanel;
