import "./servicespage2.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  DEFINE,
  DEFINE_PURPLE,
  EMPHATHISE,
  EMPHATHISE_PURPLE,
  IDEATE,
  IDEATE_PURPLE,
  IMPLEMENT,
  IMPLEMENT_PURPLE,
  LAUNCH,
  LAUNCH_PURPLE,
  PROTOTYPE,
  PROTOTYPE_PURPLE,
  TEST,
  TEST_PURPLE,
} from "../../icons";
import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Carousel } from "react-responsive-carousel";
import Wrapper from "../wrapper";
import { debounce } from "lodash";
import { isMobileDevice } from "../../utils/utils";
import useIntersectionObserver from "../common/intersectionObserver";
import { useWindowSize } from "../common/screenSizeObserver";

const boxArr = [
  {
    icon: <EMPHATHISE className="servicepage2_Icon" />,
    iconHover: <EMPHATHISE_PURPLE className="servicepage2_IconHover" />,
    text: "Emphathise",
    paraText:
      "Emphathise is the first stage of design thinking process, where the focus is on understanding the needs, feelings, and experiences of the users or stakeholders.",
  },
  {
    icon: <DEFINE className="servicepage2_Icon" />,
    iconHover: <DEFINE_PURPLE className="servicepage2_IconHover" />,
    text: "Define",
    paraText:
      "In the define stage, designers analyze and synthesize the information gathered during the emphatize stage.",
  },
  {
    icon: <IDEATE className="servicepage2_Icon" />,
    iconHover: <IDEATE_PURPLE className="servicepage2_IconHover" />,
    text: "Ideate",
    paraText:
      "Brainstorming sessions, sketches, mind mapping, and other techniques, are used to encourage free thinking and explore different possibilities.",
  },
  {
    icon: <PROTOTYPE className="servicepage2_Icon" />,
    iconHover: <PROTOTYPE_PURPLE className="servicepage2_IconHover" />,
    text: "Prototype",
    paraText:
      "The purpose of prototyping is to quickly test and interate on different solutions, allowing designers to gather feedback, learn and define their designs.",
  },
  {
    icon: <IMPLEMENT className="servicepage2_Icon" />,
    iconHover: <IMPLEMENT_PURPLE className="servicepage2_IconHover" />,
    text: "Implement",
    paraText:
      "The implement stage is where design solution is put into action. It invloves executing the plans and strategies developed during the earlier stages.",
  },
  {
    icon: <TEST className="servicepage2_Icon" />,
    iconHover: <TEST_PURPLE className="servicepage2_IconHover" />,
    text: "Test",
    paraText:
      "Testing helps identify strengths, weaknesses, and areas for improvement in the design, allowing designers to make informed refinements before moving forward.",
  },
  {
    icon: <LAUNCH className="servicepage2_Icon" />,
    iconHover: <LAUNCH_PURPLE className="servicepage2_Icon" />,
    text: "Launch",
    paraText:
      "The launch stage marks the implementation or release of the final solution to the intended audience or market.",
  },
];

const sliderCaptions = ["Understand", "Explore", "Materialise"];


const Servicespage2 = () => {
  
  const _counter = useRef({
    current: 0,
    previous: 0,
  });
  const [currentActiveItem, setCurrentActiveItem] = useState(1)
  const triggerRef = useRef<any>();
  const fromTop = useRef<boolean>(true)
  const activatingFromOutside = useRef(true)
  const disableRef = useRef(false)
  const [width, _] = useWindowSize();
  
  let dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.4,
    freezeOnceVisible: false,
    root: !(typeof document === "undefined") ? document.getElementById('parallaxLayoutServices') : null
  });
  
  const scrollHorizontally = debounce((evt: any) => {
    console.log("we are here", fromTop.current, disableRef.current)
    const scroller = document.getElementById('parallaxLayoutServices')
    if(!scroller) return;
    scroller.style.overflow = 'hidden'
    evt.preventDefault();
    if(disableRef.current && ![6, 0].includes(_counter.current.current)) return;
    console.log(_counter);
    
    if(_counter.current.previous !== _counter.current.current){
      disableRef.current = true
    }

    console.log(evt.deltaY);
    
    
    if(evt.deltaY > 0){
      console.log('got here');
      
      document.getElementById('move_right')?.click()
      if(_counter.current.current === 6){
        _counter.current = {current: 7, previous: 6}
      }
    }else{
      console.log('got here as well');
      document.getElementById('move_left')?.click()
      if(_counter.current.current === 0){
        _counter.current = {current: -1, previous: 0}
      }
    }

    if(_counter.current.current === 7){
      console.log('here');
      
      scroller.style.overflowY = 'scroll'
      activatingFromOutside.current = true
      fromTop.current = false
      _counter.current = {previous: 6, current: 6}
      scroller?.removeEventListener('wheel', debouceHandleHorizontalScroll)
    }else if(_counter.current.current === -1){
      console.log('there');
      
      scroller.style.overflowY = 'scroll'
      scroller.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      activatingFromOutside.current = true
      fromTop.current = true
      _counter.current = {previous: 0, current: 0}
      scroller?.removeEventListener('wheel', debouceHandleHorizontalScroll)
    }
  }, 40)

  const debouceHandleHorizontalScroll = useCallback((evt: Event) => scrollHorizontally(evt), []);

  const handleScrollMainPage = () => {
    
    const scroller = document.getElementById('parallaxLayoutServices')
    const processCarouselContainer = document.getElementById('servicespage2_parentContainer')
  
    if(!scroller || !processCarouselContainer) return;
    console.log(Math.floor(processCarouselContainer.getBoundingClientRect().top));
    
    if([90, 91].includes(Math.floor(processCarouselContainer.getBoundingClientRect().top))){
      scroller.style.overflow = 'hidden'
      scroller.addEventListener("wheel", debouceHandleHorizontalScroll)
    }
  }


  useEffect(() => {
    const scroller = document.getElementById('parallaxLayoutServices')
    const processCarouselContainer = document.getElementById('servicespage2_parentContainer')
    console.log('scrolling');
    
    if(dataRef && dataRef?.isIntersecting && scroller && processCarouselContainer){
      scroller.scrollTo({
        top: (scroller.scrollTop + processCarouselContainer.getBoundingClientRect().top) - 91,
        behavior: 'smooth'
      })
    }

    
    if(!isMobileDevice()){
      scroller?.addEventListener('scroll', handleScrollMainPage)
    }

  }, [dataRef?.isIntersecting])

  const setPercentage = () => {
    if(width > 1200){
      return 33
    }else if(width > 600 && width <= 1200){
      return 50
    }else{
      return 100
    }
  }
  
  return (
    <Wrapper id="servicespage2_parentContainer">
      <div className="servicespage2_parentContainer" ref={triggerRef}>
        <div className="servicespage2_flexContainer">
          <div>
            <div className="servicespage2_titleDiv lineUp">Our Process</div>
          </div>
          <div className="servicespage2_rightContainer">
            <p className="servicespage2_paragraph">
              From ideation to graphic design, UX/UI design is the historical
              discipline of our company. Fluidity, performance and creative
              development are what NurdSoft live for.
            </p>
          </div>
        </div>
        <div className="servicespage2_wrapper mt-24">
          <Carousel
            infiniteLoop={false}
            centerMode
            centerSlidePercentage={setPercentage()}
            showArrows
            showIndicators={false}
            dynamicHeight
            stopOnHover
            swipeable
            showThumbs={false}
            showStatus={false}
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                  <button type="button" id="move_left" onClick={onClickHandler} title={label} />
              )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                  <button type="button" id="move_right" onClick={onClickHandler} title={label} />
              )
          }
          onChange={(index, _) => {
            _counter.current = {previous: _counter.current.current, current: index}
            if(index !== 0){
              setCurrentActiveItem(index)
            }
            disableRef.current = false
          }}
          
          >
            {boxArr.map(
              (
                item: {
                  icon: JSX.Element;
                  iconHover: JSX.Element;
                  text: string;
                  paraText: string;
                },
                index: number
              ) => {
                return (
                  <div key={index} className="servicespage2_boxContainer">
                    <span className="servicespage2_iconWhite">{item.icon}</span>
                    <span className="servicespage2_iconPurple">
                      {item.iconHover}
                    </span>
                    <div className="servicespage2_boxText mt-8">
                      {item.text}
                    </div>
                    <p className="servicespage2_boxPara">{item.paraText}</p>
                  </div>
                );
              }
            )}
          </Carousel>
        </div>
        <div className="flex items-center">
          {sliderCaptions.map((slider: string, index: number) => {
            return (
              <div className="servicespage2_dotContainer flex flex-1 items-center gap-4 mt-8">
                <span
                  className={`servicespage2_dotBorder ${
                    Math.ceil(currentActiveItem / 2) - 1 === index ? "servicespage2_selectedDotBorder" : ""
                  }`}
                  role="button"
                  tabIndex={0}
                >
                  <div
                    className={`servicespage2_dotContent ${
                      Math.ceil(currentActiveItem / 2) - 1 === index
                        ? "servicespage2_selectedDotContent"
                        : ""
                    }`}
                  ></div>
                </span>
                <span
                  className={`${
                    Math.ceil(currentActiveItem / 2) - 1 === index
                    ? "primary100" : "offGray"
                  } servicespage2_dotText`}
                >
                  {slider}
                </span>
                {index !== sliderCaptions.length - 1 && (
                  <span className="flex-1">
                    <hr className="servicespage2_divider" />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default Servicespage2