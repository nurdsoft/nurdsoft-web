import * as React from "react";
import "./sliderleftpanel.scss";
import Button from "../button";

interface SliderLeftPanelI {
  headerLinkText?: string;
  buttonText: string;
  title: string;
  description: string[];
}

const SliderLeftPanel = ({
  headerLinkText,
  buttonText,
  title,
  description = [],
}: SliderLeftPanelI) => {
  return (
    <div className="sliderleftpanel_parentContainer">
      <div className="sliderleftpanel_headerLink">{headerLinkText}</div>
      <h4 className="sliderleftpanel_title">{title}</h4>
      {description?.map((paraDescription: string) => {
        return (
          <p className="sliderleftpanel_description sliderleftpanel_lineUp">
            {paraDescription}
          </p>
        );
      })}
      {/* <p className="sliderleftpanel_description sliderleftpanel_lineUp">
          {description[0]}
        </p> */}
      <Button buttonText={buttonText} className="mt-12" />
    </div>
  );
};

export default SliderLeftPanel;
