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

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 1,
    freezeOnceVisible: false,
    root: document.getElementById("home_scroller")
  });

  useEffect(() => {
    console.log(dataRef?.intersectionRatio);
    
    if(!dataRef) return
    if (dataRef?.intersectionRatio > 0.2){
      // add class to title
      document.getElementById("homepage6-title")?.classList.add("active")
    }else{
      document.getElementById("homepage6-title")?.classList.remove("active")
    }
    if (dataRef?.intersectionRatio > 0.7){
      // add class to images
    }
  }, [dataRef?.intersectionRatio])

  return (
    <>
      <Wrapper>
        <div className="scrolling-images-container pl-4 pr-4" ref={triggerRef}>
          <h1 className="homepage6_title" id="homepage6_title" >Awards & <br />Certifications</h1>
          <div className="image-wrapper" >
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
