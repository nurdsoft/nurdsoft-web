import "./sliderleftpanel.scss";

import * as React from "react";

import Button from "../button";
import { navigate } from "gatsby";

interface SliderLeftPanelI {
  headerLinkText?: string;
  link: string;
  title: string;
  description: string;
  img: any;
}

const SliderLeftPanel = ({
  headerLinkText,
  link,
  title,
  description,
  img,
}: SliderLeftPanelI) => {
  const handleClick = () => {
    navigate(link)
  }
  return (
    <div className="sliderleftpanel_parentContainer">
      <div className="left">
        <div className="sliderleftpanel_headerLink">{headerLinkText}</div>
        <p className="sliderleftpanel_title">{title}</p>
        <div className="sliderleftpanel_description">
          {description}
        </div>
        <Button buttonText={"VIEW PROJECT"} onClick={handleClick} className="mt-12" />
      </div>
      <div className="right">
        <img src={img} alt="carouselImg" width={573} height={337} />
      </div>
    </div>
  );
};

export default SliderLeftPanel;
