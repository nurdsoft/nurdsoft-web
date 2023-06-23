/* eslint-disable no-undef */
import { useState } from "react";
import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Wrapper from "./wrapper";
import NurdsoftImage from "../images/nurdsoft-logo-expanded.png";

const Header = () => {
  const [_showHamburgerMenu, _setShowHamburgerMenu] = useState(false);

  return (
    <div className="header">
      <Wrapper className="wrapperContainer">
        <div className="boxContainer">
          <div className="headerContainer">
            <div>
              <Link to="/home/">
                <img src={NurdsoftImage} width={200} alt="OriginML Logo" />
              </Link>
            </div>
              <div className="menuContainer">
                <Link activeClassName="active" to="/home/">
                  <span>SERVICES</span>
                </Link>
                <Link activeClassName="active" to="/essentials/">
                  <span>INDUSTRY</span>
                </Link>
                <Link activeClassName="active" to="/dcoc/">
                  <span>ABOUT</span>
                </Link>
                {/* <Link activeClassName="active} to="/benchmark/">
                  <span>Benchmark</span>
                </Link> */}
                <Link activeClassName="active" to="/about/">
                  <span>WORK</span>
                </Link>
                <Link activeClassName="active" to="/contact/">
                  <span>ESTIMATE PROJECT</span>
                </Link>
              </div>
            </div>
          </div>
      </Wrapper>
    </div>
  );
};

export default Header;
