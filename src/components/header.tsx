import "./header.scss";

import * as React from "react";

import { Link, navigate } from "gatsby";

import Button from "./button";
import NurdsoftImage from "../images/nurdsoft-logo-expanded.png";
import { StaticImage } from "gatsby-plugin-image";
import Wrapper from "./wrapper";
/* eslint-disable no-undef */
import { useState } from "react";

const Header = () => {
  const [_showHamburgerMenu, _setShowHamburgerMenu] = useState(false);

  const handleProjectEstimate = (evt: React.SyntheticEvent) => {
    evt.preventDefault()
    navigate("/#contact-us")
  }

  return (
    <div className="header" id="header">
      <Wrapper className="wrapperContainer">
        <>
          <div className="boxContainer">
            <div className="headerContainer">
              <div>
                <Link to="/">
                  <img src={NurdsoftImage} width={200} alt="Nurdsoft Logo" />
                </Link>
              </div>
              <div className="navBar">
                <div
                  role="button"
                  tabIndex={-4}
                  onKeyDown={() => _setShowHamburgerMenu(!_showHamburgerMenu)}
                  onClick={() => _setShowHamburgerMenu(!_showHamburgerMenu)}
                  className="burgerMenu"
                >
                  <StaticImage
                    src="../images/hamburger.svg"
                    height={28}
                    width={28}
                    alt="Hamburger Icon"
                  />
                </div>
                <div className="menuContainer">
                  <Link
                    activeClassName="activeMenuLink"
                    className="menuLink"
                    to="/services/"
                  >
                    <span className="withoutHover">SERVICES</span>
                    <span className="onHover">SERVICES</span>
                  </Link>
                  <Link
                    activeClassName="activeMenuLink"
                    className="menuLink"
                    to="/industry/"
                  >
                    <span className="withoutHover">INDUSTRIES</span>
                    <span className="onHover">INDUSTRIES</span>
                  </Link>
                  <Link
                    activeClassName="activeMenuLink"
                    className="menuLink"
                    to="/about/"
                  >
                    <span className="withoutHover">ABOUT</span>
                    <span className="onHover">ABOUT</span>
                  </Link>

                  <Link
                    activeClassName="activeMenuLink"
                    className="menuLink"
                    to="/work/"
                  >
                    <span className="withoutHover">WORK</span>
                    <span className="onHover">WORK</span>
                  </Link>
                  <div className="activeSpan">
                    <Button
                      buttonText="ESTIMATE PROJECT"
                      isLinkButton={true}
                      showArrowIcon={false}
                      onClick={handleProjectEstimate}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {_showHamburgerMenu && (
            <div
              onKeyDown={() => _setShowHamburgerMenu(!_showHamburgerMenu)}
              onClick={() => _setShowHamburgerMenu(!_showHamburgerMenu)}
              role="button"
              tabIndex={-2}
              className="burgerContainer"
            >
              <Link className="menuLink" to="/services/">
                <div>SERVICES</div>
              </Link>
              <Link className="menuLink" to="/industry/">
                <div>INDUSTRY</div>
              </Link>
              <Link className="menuLink" to="/about/">
                <div>ABOUT</div>
              </Link>
              <Link className="menuLink" to="/work/">
                <div>WORK</div>
              </Link>
              <a className="menuLink" onClick={handleProjectEstimate}>
                <div>ESTIMATE PROJECT</div>
              </a>
            </div>
          )}
        </>
      </Wrapper>
    </div>
  );
};

export default Header;
