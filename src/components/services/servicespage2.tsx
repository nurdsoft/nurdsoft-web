import * as React from "react";
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

const ServicesPage2 = () => {
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

  const wrapperRef = React.useRef() as any;

  const onNextClick = () => {
    wrapperRef.current.scrollLeft += 900;
    _setCounter((prevCounter) => prevCounter + 1);
  };

  const onPrevClick = () => {
    wrapperRef.current.scrollLeft -= 900;
    _setCounter((prevCounter) => prevCounter - 1);
  };

  const sliderCaptions = ["Understand", "Explore", "Materialise"];

  return (
    <Wrapper>
      <div className="servicespage2_parentContainer">
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
          {_counter > 0 && (
            <button onClick={onPrevClick} className="servicespage2_prev">
              &lt;
            </button>
          )}
          {_counter > -1 && _counter < 2 && (
            <button onClick={onNextClick} className="servicespage2_next">
              &gt;
            </button>
          )}
        </div>
        <div className="flex items-center">
          {sliderCaptions.map((slider: string, index: number) => {
            return (
              <div className="servicespage2_dotContainer flex flex-1 items-center gap-4 mt-44">
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
