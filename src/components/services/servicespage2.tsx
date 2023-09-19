import "./servicespage2.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import Slider from "react-slick";
import Wrapper from "../wrapper";
import { isMobileDevice } from "../../utils/utils";
import useIntersectionObserver from "../common/intersectionObserver";
import { useWindowSize } from "../common/screenSizeObserver";

const boxArr = [
  {
    icon: <EMPHATHISE className="servicepage2_Icon" />,
    iconHover: <EMPHATHISE_PURPLE className="servicepage2_IconHover" />,
    text: "Emphathise",
    classGroup: "understand",
    paraText:
    "Emphathise is the first stage of design thinking process, where the focus is on understanding the needs, feelings, and experiences of the users or stakeholders.",
  },
  {
    icon: <DEFINE className="servicepage2_Icon" />,
    iconHover: <DEFINE_PURPLE className="servicepage2_IconHover" />,
    text: "Define",
    classGroup: "understand",
    paraText:
    "In the define stage, designers analyze and synthesize the information gathered during the emphatize stage.",
  },
  {
    icon: <IDEATE className="servicepage2_Icon" />,
    iconHover: <IDEATE_PURPLE className="servicepage2_IconHover" />,
    text: "Ideate",
    classGroup: "understand",
    paraText:
    "Brainstorming sessions, sketches, mind mapping, and other techniques, are used to encourage free thinking and explore different possibilities.",
  },
  {
    icon: <PROTOTYPE className="servicepage2_Icon" />,
    iconHover: <PROTOTYPE_PURPLE className="servicepage2_IconHover" />,
    text: "Prototype",
    classGroup: "explore",
    paraText:
    "The purpose of prototyping is to quickly test and interate on different solutions, allowing designers to gather feedback, learn and define their designs.",
  },
  {
    icon: <IMPLEMENT className="servicepage2_Icon" />,
    iconHover: <IMPLEMENT_PURPLE className="servicepage2_IconHover" />,
    text: "Implement",
    classGroup: "explore",
    paraText:
    "The implement stage is where design solution is put into action. It invloves executing the plans and strategies developed during the earlier stages.",
  },
  {
    icon: <TEST className="servicepage2_Icon" />,
    iconHover: <TEST_PURPLE className="servicepage2_IconHover" />,
    text: "Test",
    classGroup: "materialise",
    paraText:
    "Testing helps identify strengths, weaknesses, and areas for improvement in the design, allowing designers to make informed refinements before moving forward.",
  },
  {
    icon: <LAUNCH className="servicepage2_Icon" />,
    iconHover: <LAUNCH_PURPLE className="servicepage2_Icon" />,
    text: "Launch",
    classGroup: "materialise",
    paraText:
      "The launch stage marks the implementation or release of the final solution to the intended audience or market.",
  },
];

const sliderCaptions = ["Understand", "Explore", "Materialise"];


const Servicespage2 = () => {

  const classes = ['understand', 'explore', 'materialise']
  
  const _counter = useRef({
    current: 0,
    previous: 0,
  });
  const [currentActiveItem, setCurrentActiveItem] = useState(0)
  const triggerRef = useRef<any>();
  const fromTop = useRef<boolean>(true)
  const initialRender = useRef(false)
  const disableRef = useRef(true)
  const [width, _] = useWindowSize();
  const horizontalScrollFunctionRun = useRef(0)
  const scrollLockingPos = 91;
  const wheelTriggerCount = useRef(0)
  const [removeHorizontalScrollListner, setRemoveHorizontalScrollListener] = useState(false)
  const extremePos = useRef(3)
  
  let dataRef = useIntersectionObserver(triggerRef, {
    threshold: [0.4, 0.5],
    freezeOnceVisible: false,
    root: !(typeof document === "undefined") ? document.getElementById('parallaxLayoutServices') : null
  });
  
  const scrollHorizontallyCopy = (evt: any) => {
    var isTouchPad = evt.wheelDeltaY ? evt.wheelDeltaY === -3 * evt.deltaY : evt.deltaMode === 0
    // this is our threshold vvalue to determine when to scroll
    wheelTriggerCount.current += 1
    // 50 is our threshhold that after 50 wheel invocation we scroll once
    const invocationThreshold = isTouchPad ? 50 : 6
    if(wheelTriggerCount.current % invocationThreshold !== 0) return
    // this determine how many times we have scrolled req for locking the parent scroller
    const scroller = document.getElementById('parallaxLayoutServices')
    const servicePage3 = document.getElementById("servicespage3_parentContainer")
    if(!scroller || !servicePage3 ) return;
    scroller.style.overflow = 'hidden'
    evt.preventDefault();
    if(disableRef.current && ![extremePos.current, 0].includes(_counter.current.current)) return;
    if(evt.deltaY >= 0){
      // document.getElementById('move_right')?.click()
      if(_counter.current.current < 2){
        setCurrentActiveItem(_counter.current.current + 1)
      }
      if(_counter.current.current < extremePos.current){
        horizontalScrollFunctionRun.current = _counter.current.current + 1
        _counter.current = {previous: _counter.current.current, current: _counter.current.current + 1}
      }
    }else{
      // document.getElementById('move_left')?.click()
      if(_counter.current.current > 0){
        setCurrentActiveItem(_counter.current.current - 1)
      }
      if(_counter.current.current > 0){
        _counter.current = {previous: _counter.current.current, current: _counter.current.current - 1}
        horizontalScrollFunctionRun.current = extremePos.current - _counter.current.current
      }
    }
    if(_counter.current.current === extremePos.current){
      // document.getElementById('move_right')?.click()
      scroller.style.overflowY = 'scroll'
      scroller.scrollTo({
        top: (servicePage3.getBoundingClientRect().top + scroller.scrollTop) - scrollLockingPos,
        behavior: 'smooth'
      })
      fromTop.current = false
      disableRef.current = true
      setRemoveHorizontalScrollListener(true)
      _counter.current = {previous: extremePos.current, current: extremePos.current}
    }else if(_counter.current.current === 0){
      // document.getElementById('move_left')?.click()
      scroller.style.overflowY = 'scroll'
      fromTop.current = true
      disableRef.current = true
      setRemoveHorizontalScrollListener(true)
      _counter.current = {previous: 0, current: 0}
    }else{
      disableRef.current = false
    }
  }

  // const debouceHandleHorizontalScroll = useCallback((evt: Event) => scrollHorizontallyCopy(evt), []);
  const debouceHandleHorizontalScroll = useMemo(() => (evt: Event) => scrollHorizontallyCopy(evt), [])

  const handleScrollMainPage = () => {
    
    const scroller = document.getElementById('parallaxLayoutServices')
    const processCarouselContainer = document.getElementById('servicespage2_parentContainer')
    disableRef.current = true
    if(!scroller || !processCarouselContainer) return;
    if(
      [scrollLockingPos].includes(Math.round(processCarouselContainer.getBoundingClientRect().top)) && 
      horizontalScrollFunctionRun.current === 0
    ){
      scroller.style.overflow = 'hidden'
      scroller.addEventListener("wheel", debouceHandleHorizontalScroll)
      setRemoveHorizontalScrollListener(false)
    }
  }


  useEffect(() => {
    const scroller = document.getElementById('parallaxLayoutServices')
    const processCarouselContainer = document.getElementById('servicespage2_parentContainer')
    if(dataRef && dataRef?.isIntersecting && scroller && processCarouselContainer){
      scroller.scrollTo({
        top: (scroller.scrollTop + processCarouselContainer.getBoundingClientRect().top) - scrollLockingPos,
        behavior: 'smooth'
      })
    }

    
    if(!isMobileDevice()){
      scroller?.addEventListener('scroll', handleScrollMainPage)
      scroller?.addEventListener('scrollend', () => {
        disableRef.current = false
        horizontalScrollFunctionRun.current = 0
      })
    }
    
    return () => {
      scroller?.removeEventListener('scroll', handleScrollMainPage)
      scroller?.removeEventListener("wheel", debouceHandleHorizontalScroll)

    }

  }, [dataRef?.isIntersecting])

  useEffect(() => {
    const scroller = document.getElementById('parallaxLayoutServices')
    if(removeHorizontalScrollListner){
      wheelTriggerCount.current = 0
      initialRender.current = false
      scroller?.removeEventListener('wheel', debouceHandleHorizontalScroll)
    }
  }, [removeHorizontalScrollListner])

  useEffect(() => {
    if(currentActiveItem < 0 || currentActiveItem > 2) return
    const classGroup = classes[currentActiveItem]
    classes.forEach((item, _) => {
      const itemGroup = document.getElementsByClassName(item) as unknown as HTMLDivElement[]
      console.log(itemGroup)
      for(let i =0; i< itemGroup.length; i++){
        if(item === classGroup){
          // itemGroup[i].style.display = 'flex'
          itemGroup[i].style.height = 'inherit'
          itemGroup[i].style.padding = '2rem'
          itemGroup[i].style.margin = '20px auto'
          itemGroup[i].style.opacity = '1'
        }else{
          itemGroup[i].style.height = '0'
          itemGroup[i].style.padding = '0'
          itemGroup[i].style.margin = '0px auto'
          itemGroup[i].style.opacity = '0'
        }
      }
    })
  }, [currentActiveItem])

  const handleDotClick = (index: number) => {
    _counter.current = {previous: _counter.current.current, current: index}
    setCurrentActiveItem(index)
    horizontalScrollFunctionRun.current = index
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
        <div className="flex items-center max-w-[60%] ml-auto mr-auto mt-24">
          {sliderCaptions.map((slider: string, index: number) => {
            return (
              <div onClick={() => {handleDotClick(index)}} className={`servicespage2_dotContainer flex ${sliderCaptions.length - 1 !== index && "flex-1"} items-center gap-4 mt-8`}>
                <span
                  className={`servicespage2_dotBorder ${
                    currentActiveItem === index ? "servicespage2_selectedDotBorder" : ""
                  }`}
                  role="button"
                  tabIndex={0}
                >
                  <div
                    className={`servicespage2_dotContent ${
                      currentActiveItem === index
                        ? "servicespage2_selectedDotContent"
                        : ""
                    }`}
                  ></div>
                </span>
                <span
                  className={`${
                    currentActiveItem === index
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
        <div className="servicespage2_wrapper mt-10">
          {
            currentActiveItem > 0 &&
            <div className="upperIndicator"></div>
          }
          {boxArr.map(
            (
              item: {
                icon: JSX.Element;
                iconHover: JSX.Element;
                text: string;
                paraText: string;
                classGroup: string;
              },
              index: number
              ) => {
                return (
                  <div key={index} className={`servicespage2_boxContainer ${item.classGroup}`}>
                  <div>
                    <span className="servicespage2_iconWhite">{item.icon}</span>
                    <span className="servicespage2_iconPurple">
                      {item.iconHover}
                    </span>
                  </div>
                  <div className="servicespage2_boxText">
                    {item.text}
                  </div>
                  <p className="servicespage2_boxPara">{item.paraText}</p>
                </div>
              );
            }
          )}
          {
            currentActiveItem < 2 &&
            <div className="lowerIndicator"></div>
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default Servicespage2