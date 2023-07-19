import * as React from "react";
import Wrapper from "./wrapper";
import "./breadcrumb.scss";
import { navigate } from "gatsby";

const BreadCrumb = ({ title }: { title: string }) => {
  const onBreadCrumbClick = () => {
    navigate("/work/");
  };

  return (
    <Wrapper>
      <div className="text-sm mt-8 mb-8 ml-8">
        <span
          onClick={onBreadCrumbClick}
          className="mr-2 cursor-pointer offWhite100 uppercase breadCrumbTitle"
        >
          Work
        </span>
        <span className="mr-2 offWhite100">&gt;</span>
        <span className="primary100">{title}</span>
      </div>
    </Wrapper>
  );
};

export default BreadCrumb;
