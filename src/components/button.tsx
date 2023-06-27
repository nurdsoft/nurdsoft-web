import * as React from "react";
import "./button.scss";
import { BsArrowRight } from "react-icons/bs";

const Button = ({
  buttonText,
  isLinkButton = false,
  showArrowIcon = true,
}: {
  buttonText: string;
  isLinkButton?: boolean;
  showArrowIcon?: boolean;
}) => {
  return (
    <div className="buttonContainer">
      <button className="button">
        <span
          className={`circle ${
            isLinkButton ? "circleColorTransparent" : "circleColorPrimary"
          }`}
        >
          <span className="icon"></span>
        </span>
        <span
          className={`buttonText flex items-center ${
            isLinkButton ? "buttonTextTransparent" : "buttonTextPrimary"
          }`}
        >
          {buttonText}
          {showArrowIcon && (
            <span className="ml-4">
              <BsArrowRight />
            </span>
          )}
        </span>
      </button>
    </div>
  );
};

export default Button;
