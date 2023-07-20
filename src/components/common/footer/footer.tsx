import * as React from "react";
import { Link } from "gatsby";
import {
  FOOTER_FACEBOOK,
  FOOTER_GITHUB,
  FOOTER_LINKEDIN,
  FOOTER_TWITTER,
} from "../../../icons/index";

const Footer = () => {
  return (
    <div className="footerpage_footer flex justify-between w-100 items-center">
      <div className="text-base offGray uppercase">© Copyright 2023.</div>
      <div className="flex gap-4 items-center">
        <FOOTER_FACEBOOK className="cursor-pointer" />
        <FOOTER_TWITTER className="cursor-pointer" />
        <FOOTER_LINKEDIN className="cursor-pointer" />
        <FOOTER_GITHUB className="cursor-pointer" />
      </div>
      <div className="text-base offGray uppercase">
        <Link to="/privacy-policy">privacy policy</Link>
      </div>
    </div>
  );
};

export default Footer;
