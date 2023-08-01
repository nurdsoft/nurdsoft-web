import "./bndlayout.scss";

import * as React from "react";

import Bndpage from "../work/bnd/bndpage";
import BreadCrumb from "../breadcrumb";

const BndLayout = () => {
  return (
    <div className="bnd_scroller">
      <BreadCrumb title="BnD" />
      <Bndpage />
    </div>
  );
};

export default BndLayout;
