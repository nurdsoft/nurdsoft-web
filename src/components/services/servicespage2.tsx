import * as React from "react";
import "./servicespage2.scss";
import Wrapper from "../wrapper";

const ServicesPage2 = () => {
  const options = [
    "Flexible work terms",
    "Hungry and Unstoppable",
    "Full-stack, Fully-managed",
    "True partnership",
  ];

  const wrapperRef = React.useRef() as any;

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    wrapperRef.current.addEventListener("mousedown", (e: any) => {
      isDown = true;
      startX = e.pageX - wrapperRef.current.offsetLeft;
      scrollLeft = wrapperRef.current.scrollLeft;
    });

    wrapperRef.current.addEventListener("mouseleave", () => {
      isDown = false;
    });

    wrapperRef.current.addEventListener("mouseup", () => {
      isDown = false;
    });

    if (wrapperRef && wrapperRef.current) {
      wrapperRef.current.addEventListener("mousemove", (e: MouseEvent) => {
        console.log("mousemove123", isDown);
        if (!isDown) return;
        e.preventDefault();
        console.log("called", e.pageX, wrapperRef.current.offsetLeft);
        const x = e.pageX - wrapperRef.current.offsetLeft;
        const walk = (x - startX) * 5; // You can adjust the scrolling speed here
        wrapperRef.current.scrollLeft = scrollLeft - 100;
      });
    }
  }, []);

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
            <img src="https://www.cnet.com/a/img/resize/3470424f360dd5f4c082bf7a5b7c3f5cd78e298b/hub/2022/10/11/3d748baf-46a0-499c-af4c-6e88a8dec985/pixel-7-pro-watch-lanxon-promo-53.jpg?auto=webp&width=1200" />
            <img src="https://www.cnet.com/a/img/resize/3470424f360dd5f4c082bf7a5b7c3f5cd78e298b/hub/2022/10/11/3d748baf-46a0-499c-af4c-6e88a8dec985/pixel-7-pro-watch-lanxon-promo-53.jpg?auto=webp&width=1200" />
            <img src="https://www.cnet.com/a/img/resize/3470424f360dd5f4c082bf7a5b7c3f5cd78e298b/hub/2022/10/11/3d748baf-46a0-499c-af4c-6e88a8dec985/pixel-7-pro-watch-lanxon-promo-53.jpg?auto=webp&width=1200" />
            <img src="https://www.cnet.com/a/img/resize/3470424f360dd5f4c082bf7a5b7c3f5cd78e298b/hub/2022/10/11/3d748baf-46a0-499c-af4c-6e88a8dec985/pixel-7-pro-watch-lanxon-promo-53.jpg?auto=webp&width=1200" />
            <img src="https://www.cnet.com/a/img/resize/3470424f360dd5f4c082bf7a5b7c3f5cd78e298b/hub/2022/10/11/3d748baf-46a0-499c-af4c-6e88a8dec985/pixel-7-pro-watch-lanxon-promo-53.jpg?auto=webp&width=1200" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ServicesPage2;
