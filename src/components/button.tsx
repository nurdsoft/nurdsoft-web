import * as React from "react";
import "./button.scss";
import { BsArrowRight } from "react-icons/bs";

const Button = ({
  buttonText,
  isLinkButton = false,
  showArrowIcon = true,
  className,
  onClick,
}: {
  buttonText: string;
  isLinkButton?: boolean;
  showArrowIcon?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <div className={`buttonContainer ${className}`}>
      <button
        onClick={(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          onClick && onClick(ev)
        }
        className="button"
      >
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
