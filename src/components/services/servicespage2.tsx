import React, {useEffect, useRef} from "react";
import "./servicespage2.scss";
import Wrapper from "../wrapper";
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
import useIntersectionObserver from "../common/intersectionObserver";

const ServicesPage2 = () => {

  if(typeof document === "undefined") return<></>;

  const [_counter, _setCounter] = React.useState(0);

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

  const wrapperRef = useRef<any>();
  const fromTop = useRef<boolean>(true)

  const triggerRef = useRef<any>();
  const activatingFromOutside = useRef(true)

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.4,
    freezeOnceVisible: false,
    root: document.getElementById('parallaxLayoutServices')
  });

  const sliderCaptions = ["Understand", "Explore", "Materialise"];

  const scrollHorizontally = (evt: any) => {
    const scroller = document.getElementById('parallaxLayoutServices')
    if(!scroller) return;
    scroller.style.overflow = 'hidden'
    evt.preventDefault();
    
    wrapperRef.current.scrollLeft += (evt.deltaY * 0.1);

    const horizontalScrollPercentage = ((wrapperRef.current.scrollLeft + wrapperRef.current.clientWidth) / wrapperRef.current.scrollWidth) * 100

    if(horizontalScrollPercentage >= 0 && horizontalScrollPercentage < 68){
      _setCounter(0);
    } else if(horizontalScrollPercentage >= 68 && horizontalScrollPercentage < 90){
      _setCounter(1);
    }else if(horizontalScrollPercentage >= 90 && horizontalScrollPercentage <= 100){
      _setCounter(2);
    }else{
      _setCounter(0);
    }

    if(((wrapperRef.current.scrollLeft + wrapperRef.current.clientWidth) - wrapperRef.current.scrollWidth) === 0){
      scroller.style.overflowY = 'scroll'
      activatingFromOutside.current = true
      wrapperRef.current.scrollLeft = wrapperRef.current.scrollWidth - wrapperRef.current.clientWidth
      wrapperRef.current.style.overflow = "hidden"
      fromTop.current = false
      scroller?.removeEventListener('wheel', scrollHorizontally)
    }else if(wrapperRef.current.scrollLeft === 0){
      scroller.style.overflowY = 'scroll'
      scroller.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      activatingFromOutside.current = true
      wrapperRef.current.style.overflow = "hidden"
      fromTop.current = true
      scroller?.removeEventListener('wheel', scrollHorizontally)
    }
  }

  const handleScrollMainPage = () => {
    
    const scroller = document.getElementById('parallaxLayoutServices')
    const processCarouselContainer = document.getElementById('servicespage2_parentContainer')
  
    if(!scroller || !processCarouselContainer) return;
    activatingFromOutside.current = true
    
    if(Math.floor(processCarouselContainer.getBoundingClientRect().top) > 90 && Math.floor(processCarouselContainer.getBoundingClientRect().top) < 96){
      scroller.style.overflow = 'hidden'
      scroller.addEventListener("wheel", scrollHorizontally)
    }
    
  }

  function isMobileDevice() {
    const mobileKeywords = [
      'Mobi', 'Android', 'iPhone', 'iPad', 'BlackBerry',
      'Windows Phone', 'webOS', 'Mobile Safari', 'Opera Mini'
    ];
  
    return mobileKeywords.some(keyword => navigator.userAgent.includes(keyword));
  }


  useEffect(() => {
    const scroller = document.getElementById('parallaxLayoutServices')
    const processCarouselContainer = document.getElementById('servicespage2_parentContainer')
    
    if(dataRef && dataRef?.isIntersecting && scroller && processCarouselContainer && activatingFromOutside.current){
      scroller.scrollTo({
        top: (scroller.scrollTop + processCarouselContainer.getBoundingClientRect().top) - 94,
        behavior: 'smooth'
      })
      wrapperRef.current.style.overflow = 'scroll hidden'

      if(fromTop.current){
        wrapperRef.current.scrollLeft = 2
      }
      activatingFromOutside.current = false
    }

    
    if(!isMobileDevice()){
      scroller?.addEventListener('scroll', handleScrollMainPage)
    }

  }, [dataRef?.intersectionRatio])

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
        <div ref={wrapperRef} className="servicespage2_wrapper mt-24">
          <div className="servicespage2_slider">
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
          </div>
        </div>
        <div className="flex items-center">
          {sliderCaptions.map((slider: string, index: number) => {
            return (
              <div className="servicespage2_dotContainer flex flex-1 items-center gap-4 mt-8">
                <span
                  className={`servicespage2_dotBorder ${
                    _counter === index ? "servicespage2_selectedDotBorder" : ""
                  }`}
                  role="button"
                  tabIndex={0}
                >
                  <div
                    className={`servicespage2_dotContent ${
                      _counter === index
                        ? "servicespage2_selectedDotContent"
                        : ""
                    }`}
                  ></div>
                </span>
                <span
                  className={`${
                    _counter === index ? "primary100" : "offGray"
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
  );
};

export default ServicesPage2;
