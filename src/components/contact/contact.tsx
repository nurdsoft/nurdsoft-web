import * as React from "react";
import "./contact.scss";
import Wrapper from "../wrapper";
import { Link } from "gatsby";

const Contact = () => {
  // const buttonOptions = [
  //   {
  //     title: "Mobile App",
  //   },
  //   {
  //     title: "Website",
  //   },
  //   {
  //     title: "Desktop App",
  //   },
  //   {
  //     title: "Not Sure",
  //   },
  // ];

  return (
    <>
      <Wrapper>
        <div className="contact_parentContainer">
          <div className="contact_gridContainer">
            <div className="contact_gridLeftContainer">
              <h3 className="contact_leftTitle">Let's Talk</h3>
            </div>
            <div className="contact_gridRightContainer">
              {/* <div>
                <div className="contact_formSection1 contact_formContent">
                  My name is
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="username"
                    className="contact_input ml-4"
                  />
                </div>
                <div className="contact_formSection2 pt-8 contact_formContent">
                  I am looking to build
                  {buttonOptions.map((options: { title: string }) => {
                    return (
                      <div className="contact_buildButtonOptions">
                        <button className="contact_buildButton">
                          {options.title}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div> */}
            </div>
            <div className="contact_mailContainer">
              <p className="contact_sendMessage">Send us a message.</p>
              <p className="mt-2">
                <a className="contact_mailTo" href="mailto:hello@nurdsoft.co">
                  hello@nurdsoft.co
                </a>
              </p>
            </div>
          </div>
          <Wrapper>
            <div className="contact_footer">
              <div>© Copyright 2023.</div>
              <div>
                <span>Work</span>
                <span className="ml-16">Carrer</span>
                <span className="ml-16">About</span>
              </div>
              <div className="cursor-pointer">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
          </Wrapper>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
