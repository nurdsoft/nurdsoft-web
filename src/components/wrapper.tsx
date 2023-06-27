/* eslint-disable react/prop-types */
import * as React from "react";
import "./wrapper.scss";

const Wrapper = ({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) => (
  <div className={`wrapperContainer ${className}`}>
    <div></div>
    {children}
    <div></div>
  </div>
);

export default Wrapper;
