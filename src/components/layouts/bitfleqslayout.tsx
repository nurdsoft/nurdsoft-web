import React from "react";
import BreadCrumb from "../breadcrumb";
import BitFleqpage from "../work/bitfleq/bitfleqpage";
import './bitfleqslayout.scss';

const BitFleqsLayout = () => {
  return (
    <div className="bitfleq_scroller">
      <BreadCrumb title="BITFLEQS" />
      <BitFleqpage />
    </div>
  );
};

export default BitFleqsLayout;
