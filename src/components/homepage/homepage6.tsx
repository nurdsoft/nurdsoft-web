import React, { useEffect, useRef } from "react";
import "./homepage6.scss";

import Wrapper from "../wrapper";
import { StaticImage } from "gatsby-plugin-image";
import Terraform from '../../images/Terraform.png'
import Azure from '../../images/Azure.png'
import useIntersectionObserver from "../common/intersectionObserver";

const Homepage6 = () => {
  if(typeof document === "undefined") return<></>;

  const triggerRef = useRef<any>();
  const podiumTriggerRef = useRef<any>();

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.2,
    freezeOnceVisible: false,
    root: document.getElementById("home_scroller")
  });

  const podiumDataRef = useIntersectionObserver(podiumTriggerRef, {
    threshold: 1,
    freezeOnceVisible: false,
    root: document.getElementById("home_scroller")
  });

  useEffect(() => {
    console.log(dataRef?.intersectionRatio);
    const title = document.getElementById("homepage6_title")
    const azure = document.getElementById("azure")
    const terraform = document.getElementById("terraform")
    
    if(!dataRef || !title) return
    if (dataRef.isIntersecting){
      title.classList.add("animate")
    }else{
      title.classList.remove("animate")
    }
    if(!podiumDataRef || !azure || !terraform) return
    if (podiumDataRef.isIntersecting){
      terraform.classList.add("animate")
      azure.classList.add("animate")
    }else{
      azure.classList.remove("animate")
      terraform.classList.remove("animate")
    }
  }, [podiumDataRef?.isIntersecting, dataRef?.isIntersecting])

  return (
    <>
      <Wrapper>
        <div className="scrolling-images-container pl-4 pr-4" ref={triggerRef}>
          <h1 className="homepage6_title" id="homepage6_title" >Awards & <br />Certifications</h1>
          <div className="image-wrapper" ref={podiumTriggerRef} >
            <StaticImage
              src="../../images/podium.svg"
              alt="podium image"
              quality={100}
            />
            <img src={Terraform} className="terraform" alt="terraform" id="terraform" />
            <img src={Azure} className="azure" alt="azure" id="azure" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Homepage6;
