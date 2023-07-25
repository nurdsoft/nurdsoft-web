import * as React from "react";
import { Link } from "gatsby";
import "./footer.scss";
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
        <FOOTER_FACEBOOK
          onClick={() => window.open("https://www.facebook.com/nurdsoft")}
          className="cursor-pointer"
        />
        <FOOTER_TWITTER
          onClick={() => window.open("https://www.twitter.com/nurdsoft")}
          className="cursor-pointer"
        />
        <FOOTER_LINKEDIN
          onClick={() =>
            window.open("https://www.linkedin.com/company/nurdsoft")
          }
          className="cursor-pointer"
        />
        <FOOTER_GITHUB
          onClick={() => window.open("https://www.github.com/nurdsoft")}
          className="cursor-pointer"
        />
      </div>
      <div className="text-base offGray uppercase">
        <Link to="/privacy-policy">privacy policy</Link>
      </div>
    </div>
  );
};

export default Footer;
