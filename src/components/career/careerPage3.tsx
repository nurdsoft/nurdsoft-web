import React, { useEffect, useRef } from "react";
import Wrapper from "../wrapper";
import "./careerPage3.scss";
import Button from "../button";
import { navigate } from "gatsby";
import useIntersectionObserver from "../common/intersectionObserver";
import CareerCard from "./careerCard";

const CareerPage3 = () => {
  const elementsToStack = useRef(-1);
  const activatingFromOutside = useRef(true);
  const lockMainScroll = useRef(false);
  const scrollLockingPos = 91;
  const scrollingToTop = useRef(false);
  const scrollingToBottom = useRef(false);

  const triggerRef = useRef<any>();

  const cardRef = useIntersectionObserver(triggerRef, {
    threshold: 0.2,
    freezeOnceVisible: false,
    root:
      typeof document !== "undefined"
        ? document.getElementById("career_scroller")
        : "",
  });

  const handleAboutUs = () => {
    navigate("/about/");
  };

  const handleScrollCardView = () => {
    const scroller = document.getElementById("career_scroller");
    const careerPageCardView = document.getElementById("careerPage3_cardView");
    const section2 = document.getElementById("careerPage2_parentContainer");

    if (!scroller || !careerPageCardView || !section2) {
      return;
    }
    if(!lockMainScroll.current){
      return
    }
    activatingFromOutside.current = false;
    if (
      careerPageCardView?.scrollHeight - careerPageCardView?.scrollTop <=
        1556 ||
      (careerPageCardView?.scrollTop === 0 && elementsToStack.current <= 0)
    ) {
      if (
        careerPageCardView?.scrollHeight - careerPageCardView?.scrollTop <=
        1556
      ) {
        scrollingToBottom.current = true
        scroller.style.overflow = "hidden scroll";
        scroller.scrollTo({
          top: 3336,
          behavior: "smooth",
        });
        careerPageCardView.style.overflow = "hidden";
      } else if (
        careerPageCardView?.scrollTop === 0 &&
        elementsToStack.current <= 0
      ) {
        scrollingToTop.current = true
        scroller.style.overflow = "hidden scroll";
        scroller.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        careerPageCardView.style.overflow = "hidden";
      }
      activatingFromOutside.current = true
      lockMainScroll.current = false;
    }
    const cardsArray = Array.from(
      document.getElementsByClassName("careerPage3_card")
    );
    if (careerPageCardView) {
      // logic to remove the fixed class
      if (careerPageCardView.scrollTop === 0 && elementsToStack.current >= 0) {
        cardsArray[elementsToStack.current].classList.remove("fixed");
        if (elementsToStack.current === 0) {
          careerPageCardView.style.paddingTop = `0px`;
        }
        if (elementsToStack.current > 0) {
          careerPageCardView.scrollTop = 200;
        }
        elementsToStack.current = elementsToStack.current - 1;
      }

      // logic to increment the fixed elements
      if (
        Math.floor(careerPageCardView.scrollTop / 306) >= 1 &&
        elementsToStack.current < cardsArray.length - 2
      ) {
        elementsToStack.current = elementsToStack.current + 1;
      } else if (
        careerPageCardView.scrollTop >= 5 &&
        elementsToStack.current === -1
      ) {
        elementsToStack.current = elementsToStack.current + 1;
      }

      // logic to add the fixed class
      for (let i = 0; i < cardsArray.length; i++) {
        if (
          i <= elementsToStack.current &&
          !cardsArray[i].classList.contains("fixed") &&
          elementsToStack.current < cardsArray.length - 1
        ) {
          cardsArray[i].classList.add("fixed");
          careerPageCardView.style.paddingTop = `${332}px`;
          careerPageCardView.scrollTop = 1;
        }
      }
    }
  };

  const handleScrollMainPage = (evt: Event) => {
    if (lockMainScroll.current) {
      evt.preventDefault();
    }
    const scroller = document.getElementById("career_scroller");
    const scrollTopContainer = document.getElementById(
      "careerPage3_parentContainer"
    );

    if (!scroller || !scrollTopContainer) return;
    if(Math.floor(scrollTopContainer.getBoundingClientRect().top) !== scrollLockingPos){
      scrollingToBottom.current = false
      scrollingToTop.current = false
    }
    
    if (
      Math.floor(scrollTopContainer.getBoundingClientRect().top) === scrollLockingPos && 
      activatingFromOutside.current &&
      !scrollingToTop.current && !scrollingToBottom.current
    ) {
      activatingFromOutside.current = false;
      scroller.style.overflow = "hidden";
      lockMainScroll.current = true;
    }
  };

  useEffect(() => {
    const scroller = document.getElementById("career_scroller");
    const scrollTopContainer = document.getElementById(
      "careerPage3_parentContainer"
    );
    const careerPageCardView = document.getElementById("careerPage3_cardView");

    if (!scrollTopContainer || !scroller || !careerPageCardView) return;

    if (cardRef && cardRef?.isIntersecting && activatingFromOutside.current) {
      scroller.scrollTo({
        top:
          scroller.scrollTop +
          scrollTopContainer.getBoundingClientRect().top -
          scrollLockingPos,
        behavior: "smooth",
      });
      careerPageCardView.style.overflow = "hidden scroll";
      careerPageCardView.scrollTop = 1;
    }

    scroller?.addEventListener("scroll", handleScrollMainPage);

    careerPageCardView?.addEventListener("scroll", handleScrollCardView);
  }, [cardRef?.intersectionRatio]);

  return (
    <Wrapper>
      <div
        className="careerPage3_parentContainer"
        ref={triggerRef}
        id="careerPage3_parentContainer"
      >
        <div className="careerPage3_headingWrapper">
          <h1 className="careerPage3_heading">
            Open <br /> Position
          </h1>
          <Button buttonText="ABOUT US" onClick={handleAboutUs} />
        </div>
        <div className="careerPage3_cardView_wrapper">
          <div className="careerPage3_cardView" id="careerPage3_cardView">
            <CareerCard />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CareerPage3;
