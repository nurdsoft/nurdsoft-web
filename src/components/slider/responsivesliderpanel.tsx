import * as React from "react";
import "./sliderleftpanel.scss";
import Button from "../button";

interface ResponsiveSliderPanelI {
  headerLinkText?: string;
  buttonText: string;
  title: string;
  description: string[];
  children: JSX.Element;
}

const ResponsiveSliderPanel = ({
  headerLinkText,
  buttonText,
  title,
  description = [],
  children,
}: ResponsiveSliderPanelI) => {
  return (
    <div className="sliderleftpanel_parentContainer">
      <div className="sliderleftpanel_headerLink">{headerLinkText}</div>
      <h4 className="sliderleftpanel_title">{title}</h4>
      {description?.map((paraDescription: string) => {
        return (
          <p className="sliderleftpanel_description w-4/6 sliderleftpanel_lineUp">
            {paraDescription}
          </p>
        );
      })}
      <div className="mt-12 mb-32 flex items-center">{children}</div>
      <Button buttonText={buttonText} />
    </div>
  );
};

export default ResponsiveSliderPanel;
