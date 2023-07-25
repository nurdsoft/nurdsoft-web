/* eslint-disable react/prop-types */
import * as React from "react";
import "./wrapper.scss";

const Wrapper = ({
  children,
  className,
  id=''
}: {
  children: JSX.Element;
  className?: string;
  id?: string;
}) => (
  <div className={`wrapperContainer ${className}`} id={id}>
    <div></div>
    {children}
    <div></div>
  </div>
);

export default Wrapper;
