import "./contact.scss";

import { ARROW_RIGHT_SMALL, FACEBOOK, GITHUB, LINKEDIN, TWITTER } from "../../icons";
import { Link, navigate } from "gatsby";
import React, { useState } from "react";

import Button from "../button";
import { StaticImage } from "gatsby-plugin-image";
import Wrapper from "../wrapper";

const Contact = () => {

  const [formValue, setFormValue] = useState<any>({
    name: "",
    platform: "",
    message: "",
    budget: "",
    email: ""
  })

  const [errorKeys, setErrorKeys] = useState<string[]>([]) 

  const platformOptions = [
    {
      text: 'Mobile app',
      value: 'Mobile app'
    },
    {
      text: 'Website',
      value: 'Website'
    },
    {
      text: 'Desktop app',
      value: 'Desktop app'
    },
    {
      text: 'Not Sure',
      value: 'Not Sure'
    }
  ]

  const budgetOptions = [
    {
      text: '< $10k',
      value: '< $10k'
    },
    {
      text: '$10k - $30K',
      value: '$10k - $30K'
    },
    {
      text: '$30k - $60K',
      value: '$30k - $60K'
    },
    {
      text: '$60k - $100K',
      value: '$60k - $100K'
    },
    {
      text: '$100K+',
      value: '$100K+'
    }
  ]

  const handleFormValue = (key: string, value: string) => {
    setFormValue({
      ...formValue,
      [key]: value.trim()
    })
  }

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleValidateForm = () => {
    let isValid = true 
    Object.keys(formValue).map((key) => {
      if(formValue[key].trim().length < 1){
        isValid = false
        if(!errorKeys.includes(key)){
          setErrorKeys([...errorKeys, key])
        }
      }
    })

    if(!validateEmail(formValue.email)){
      isValid = false
      if(!errorKeys.includes('email')){
        setErrorKeys([...errorKeys, 'email'])
      }
    }

    return isValid;
  }

  const handleSubmitForm = (e: React.MouseEvent) => {

    e.preventDefault()

    const isFormValid = handleValidateForm()

    if(!isFormValid) return
  }

  const handleOpenPosition = () => {
    navigate('/career')
  }

  return (
    <>
      <Wrapper id="contact_parentContainer">
        <div className="contact_parentContainer">
          <div className="contact_formWrapper">
            <div className="contact_formHeading">
              <p>Let’s Talk</p>
            </div>
            <div className="flex_container">
              <div className="contact_formRight">
                <div className="contact_formContainer">
                  <div className="contact_formField">
                    <p className="label">My name is</p>
                    <input onChange={(e) => handleFormValue('name', e.target.value)} className="inputBox" type="text" placeholder="Your Name" />
                  </div>

                  <div className="contact_formField">
                    <p className="label">I am looking to build</p>
                    <div className="optionWrapper">
                      {
                        platformOptions.map((platform, index) => (
                          <button 
                            onClick={(e) => {
                              e.preventDefault()
                              handleFormValue('platform', platform.value)
                            }} 
                            className={`
                              option 
                              ${formValue.platform === platform.value ? 'active' : ''}
                            `} 
                            key={index}
                          >
                            <p className="optionText">
                              <span className="animateUp">{platform.text}</span>
                              <span className="animateUp">{platform.text}</span>
                            </p>
                          </button>
                        ))
                      }
                    </div>
                  </div>

                  <div className="contact_formField column">
                    <p className="label">What can we help you with?</p>
                    <input onChange={(e) => handleFormValue('message', e.target.value)}  className="inputBox" type="text" placeholder="Type your message here..." />
                  </div>

                  <div className="contact_formField">
                    <p className="label">My budget is</p>
                    <div className="optionWrapper">
                      {
                        budgetOptions.map((budget, index) => (
                          <button 
                            onClick={(e) => {
                              e.preventDefault()
                              handleFormValue('budget', budget.value)
                            }} 
                            className={`
                              option 
                              ${formValue.budget === budget.value ? 'active' : ''}
                            `} 
                            key={index}
                          >
                            <p className="optionText">
                              <span className="animateUp">{budget.text}</span>
                              <span className="animateUp">{budget.text}</span>
                            </p>
                          </button>
                        ))
                      }
                    </div>
                  </div>

                  <div className="contact_formField">
                    <p className="label">Contact me back at</p>
                    <input onChange={(e) => handleFormValue('email', e.target.value)} className="inputBox" type="email" placeholder="Your Email" />
                  </div>
                  <div className="submitWrapper">
                    <button className="contact_formSubmit" onClick={handleSubmitForm}>
                      <p>SUBMIT</p>
                      <ARROW_RIGHT_SMALL />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="contact_subFooter">
            <Link to="/">
              <StaticImage width={200} src="../../images/nurdsoft-logo-expanded.png" placeholder="blurred" alt="nurdsoft" />
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
            <div>© Copyright 2023.</div>
            <div className="socialIcons_wrapper">
              <div className="icon_container">
                <FACEBOOK
                  onClick={() => window.open("https://www.facebook.com/nurdsoft")}
                  className="socialIcon"
                />
              </div>
              <div className="icon_container">
                <TWITTER
                  onClick={() => window.open("https://www.twitter.com/nurdsoft")}
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
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
