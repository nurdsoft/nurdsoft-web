import "./bitfleqslayout.scss";

import BitFleqpage from "../work/bitfleq/bitfleqpage";
import BreadCrumb from "../breadcrumb";
import React from "react";

const BitFleqsLayout = () => {
  return (
    <div className="bitfleq_scroller">
      <BreadCrumb title="BITFLEQS" />
      <BitFleqpage />
    </div>
  );
};

export default BitFleqsLayout;
