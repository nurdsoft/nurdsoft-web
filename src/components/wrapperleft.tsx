/* eslint-disable react/prop-types */
import * as React from "react";
import "./wrapper.scss";

const WrapperLeft = ({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) => (
  <div className={`wrapperLeftContainer ${className}`}>
    <div></div>
    {children}
    <div></div>
  </div>
);

export default WrapperLeft;
