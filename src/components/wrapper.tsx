/* eslint-disable react/prop-types */
import * as React from "react";

const Wrapper = ({ children }: any) => (
  <div className="wrapperContainer">
    <div></div>
    {children}
    <div></div>
  </div>
);

export default Wrapper;
