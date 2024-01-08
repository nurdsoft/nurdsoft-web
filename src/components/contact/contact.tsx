import "./contact.scss";

import {
  ARROW_RIGHT_SMALL,
  FACEBOOK,
  GITHUB,
  LINKEDIN,
  TWITTER,
} from "../../icons";
import React, { useState } from "react";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Wrapper from "../wrapper";

interface IContact {
  scrollerId: string;
  showform?: boolean;
}
const Contact = ({ scrollerId = "", showform = true }: IContact) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [resMsg, setResMsg] = useState("");

  const [formValue, setFormValue] = useState<any>({
    name: "",
    platform: "",
    message: "",
    budget: "",
    email: "",
  });

  const [errorKeys, setErrorKeys] = useState<string[]>([]);

  const platformOptions = [
    {
      text: "Mobile app",
      value: "Mobile app",
    },
    {
      text: "Website",
      value: "Website",
    },
    {
      text: "Desktop app",
      value: "Desktop app",
    },
    {
      text: "Not Sure",
      value: "Not Sure",
    },
  ];

  const budgetOptions = [
    {
      text: "$15k - $30K",
      value: "$15k - $30K",
    },
    {
      text: "$30k - $60K",
      value: "$30k - $60K",
    },
    {
      text: "$60k - $100K",
      value: "$60k - $100K",
    },
    {
      text: "$100K+",
      value: "$100K+",
    },
  ];

  const handleFormValue = (key: string, value: string) => {
    setFormValue({
      ...formValue,
      [key]: value,
    });
  };

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleValidateForm = () => {
    let isValid = true;
    Object.keys(formValue).map((key) => {
      if (formValue[key].trim().length < 1) {
        isValid = false;
        if (!errorKeys.includes(key)) {
          setErrorKeys([...errorKeys, key]);
        }
      }
    });

    if (!validateEmail(formValue.email)) {
      isValid = false;
      if (!errorKeys.includes("email")) {
        setErrorKeys([...errorKeys, "email"]);
      }
    }

    return isValid;
  };

  const handleSubmitForm = async (e: React.MouseEvent) => {
    setIsLoading(true);
    e.preventDefault();

    const isFormValid = handleValidateForm();
    console.log("here");

    if (!isFormValid) {
      setIsError(true);
      setIsLoading(false);
      setResMsg("* Please fill all the fields properly.");
      return;
    }

    const formVal = new FormData();
    formVal.append("name", formValue.name.trim());
    formVal.append("email", formValue.email.trim());
    formVal.append("platform", formValue.platform.trim());
    formVal.append("message", formValue.message.trim());
    formVal.append("budget", formValue.budget.trim());
    formVal.append("_gotcha", "");

    let res;
    try {
      res = await fetch(
        "https://getform.io/f/4edb0f6b-0271-4728-821a-41f9704b98f1",
        {
          method: "POST",
          body: formVal,
          headers: {
            Accept: "application/json",
          },
        }
      );
      res = await res.json();
      if (res.success) {
        setIsError(false);
        setIsLoading(false);
        setResMsg(
          "* Thank you! Your message is on its way to us, Expect to hear from our team soon."
        );
      } else {
        setIsError(true);
        setIsLoading(false);
        setResMsg(
          "* Looks like there is some problem submitting form, please reach out directly on hello@nurdsoft.co"
        );
      }
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      setResMsg(
        "* Looks like there is some problem submitting form, please reach out directly on hello@nurdsoft.co"
      );
    }

    setTimeout(() => {
      setIsError(false);
      setIsLoading(false);
      setResMsg("");
      setFormValue({
        name: "",
        platform: "",
        message: "",
        budget: "",
        email: "",
      });
    }, 5000);
  };

  const handleBackToTop = () => {
    const scroller = document.getElementById(`${scrollerId}`);
    if (scroller) {
      scroller.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <Wrapper id="contact_parentContainer">
        <div className="contact_parentContainer" id="contact-us">
          {showform && (
            <div className="contact_formWrapper">
              <div className="contact_formHeading">
                <p>Let’s Talk</p>
              </div>
              <form
                method="post"
                action="#"
                id="form"
                className="flex_container"
              >
                <div className="contact_formRight">
                  <div className="contact_formContainer">
                    <div className="contact_formField">
                      <p className="label">My name is</p>
                      <input
                        name="full_name"
                        form="form"
                        onChange={(e) =>
                          handleFormValue("name", e.target.value)
                        }
                        className="inputBox"
                        value={formValue.name}
                        type="text"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="contact_formField">
                      <p className="label">Contact me back at</p>
                      <input
                        name="email"
                        form="form"
                        onChange={(e) =>
                          handleFormValue("email", e.target.value)
                        }
                        value={formValue.email}
                        className="inputBox"
                        type="email"
                        placeholder="Your Email"
                      />
                    </div>

                    <div className="contact_formField">
                      <p className="label">I am looking to build a</p>
                      <div className="optionWrapper">
                        {platformOptions.map((platform, index) => (
                          <button
                            name="platform"
                            onClick={(e) => {
                              e.preventDefault();
                              handleFormValue("platform", platform.value);
                            }}
                            className={`option ${
                              formValue.platform === platform.value
                                ? "active"
                                : ""
                            }`}
                            key={index}
                          >
                            <p className="optionText">
                              <span className="animateUp">{platform.text}</span>
                              <span className="animateUp">{platform.text}</span>
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="contact_formField">
                      <p className="label">My budget is</p>
                      <div className="optionWrapper">
                        {budgetOptions.map((budget, index) => (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleFormValue("budget", budget.value);
                            }}
                            className={`option ${
                              formValue.budget === budget.value ? "active" : ""
                            }`}
                            key={index}
                            name="budget"
                          >
                            <p className="optionText">
                              <span className="animateUp">{budget.text}</span>
                              <span className="animateUp">{budget.text}</span>
                            </p>
                          </button>
                        ))}
                      </div>
                      <input
                        type="hidden"
                        name="_gotcha"
                        style={{ display: "none !important" }}
                      />
                    </div>

                    <div className="contact_formField column">
                      <p className="label">What can Nurdsoft help you with?</p>
                      <input
                        name="message"
                        form="form"
                        onChange={(e) =>
                          handleFormValue("message", e.target.value)
                        }
                        value={formValue.message}
                        className="inputBox"
                        type="text"
                        placeholder="Type your message here..."
                      />
                    </div>

                    <div className="submitWrapper">
                      <button
                        className="contact_formSubmit"
                        disabled={isLoading}
                        style={
                          isLoading
                            ? { cursor: "not-allowed", opacity: 0.5 }
                            : {}
                        }
                        form="form"
                        type="submit"
                        onClick={handleSubmitForm}
                      >
                        <p>SUBMIT</p>
                        <ARROW_RIGHT_SMALL />
                      </button>
                    </div>
                    {!isLoading && (
                      <p
                        className={`text-xs mt-4 ${
                          isError ? "text-red-800" : "text-green-800"
                        }`}
                      >
                        {resMsg}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          )}
          <div className="contact_subFooter">
            <Link to="/">
              <StaticImage
                width={60}
                src="../../images/nurdsoft-logo.png"
                placeholder="blurred"
                alt="nurdsoft"
              />
            </Link>
            <div className="link-wrapper">
              <div className="cursor-pointer contact_footer_links">
                <Link to="/about">ABOUT US</Link>
              </div>
              <div className="cursor-pointer contact_footer_links">
                <Link to="/work">WORK</Link>
              </div>
              <div className="cursor-pointer contact_footer_links">
                <Link to="/career">CAREERS</Link>
              </div>
            </div>
          </div>
          <div className="contact_footer">
            <div className="copyright">© Copyright 2023.</div>
            <div className="socialIcons_wrapper">
              <div className="icon_container">
                <FACEBOOK
                  onClick={() =>
                    window.open("https://www.facebook.com/nurdsoft")
                  }
                  className="socialIcon"
                />
              </div>
              <div className="icon_container">
                <TWITTER
                  onClick={() =>
                    window.open("https://www.twitter.com/nurdsoft")
                  }
                  className="socialIcon"
                />
              </div>
              <div className="icon_container">
                <LINKEDIN
                  onClick={() =>
                    window.open("https://www.linkedin.com/company/nurdsoft")
                  }
                  className="socialIcon"
                />
              </div>
              <div className="icon_container">
                <GITHUB
                  onClick={() => window.open("https://www.github.com/nurdsoft")}
                  className="socialIcon"
                />
              </div>
            </div>
            <div className="cursor-pointer contact_footer_links">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
            <span onClick={handleBackToTop} className="backToTop">
              <ARROW_RIGHT_SMALL />
            </span>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
