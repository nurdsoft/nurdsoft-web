import React from "react";
import { Carousel } from "react-responsive-carousel";
import Quotes from "../../images/quotes.svg";
import "./clientFeedbackCarousel.scss";
import { IClientCarouselData } from "../../types/carouselTypes";

const CustomIndicator = (
  onClickHandler: any,
  isSelected: any,
  index: any,
  label: any
) => {
  return (
    <span
      className={`dotBorder ${isSelected ? "selectedDotBorder" : ""}`}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      key={index}
      role="button"
      tabIndex={0}
      aria-label={`${label} ${index + 1}`}
    >
      <div
        className={`dotContent ${isSelected ? "selectedDotContent" : ""}`}
      ></div>
    </span>
  );
};

const ClientFeedbackCarousel = ({ data }: IClientCarouselData) => {
  return (
    <Carousel
      // autoPlay={true}
      infiniteLoop={true}
      showArrows={false}
      selectedItem={0}
      showThumbs={false}
      interval={2000}
      animationHandler={"slide"}
      showStatus={false}
      stopOnHover={false}
      axis="horizontal"
      showIndicators={true}
      renderIndicator={CustomIndicator}
    >
      {data.map((feedback, index) => (
        <div key={index} className="clientFeedbackCarouselSlide">
          <div className="clientFeedbackCarouselSlideLeft">
            <img src={feedback.clientImg} alt="slide1" />
          </div>
          <div className="clientFeedbackCarouselSlideRight">
            <img className="quote" src={Quotes} alt="quotes" />
            <p className="description">{feedback.clientResponse}</p>
            <div className="testGiverInfo">
              <p className="name">{feedback.clientName}</p>,
              <p className="designation">{feedback.clientDesignation}</p>
              {feedback?.clientCompanyLogo && (
                <img
                  className="logo"
                  src={feedback.clientCompanyLogo}
                  alt="quotes"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
    // </div>
  );
};

export default ClientFeedbackCarousel;
