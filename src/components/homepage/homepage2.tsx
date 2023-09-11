import "./homepage2.scss";
import "../../styles/carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as React from "react";

import AuditTrustImg from '../../images/slider_dashboard.png';
import BitfleqImg from '../../images/showcase_nft.png';
import BndImg from '../../images/simplify_work.png';
import LogixaImg from '../../images/logixa.png';
import Slider from "react-slick";
import SliderLeftPanel from "../slider/sliderleftpanel";
import Wrapper from "../wrapper";

const Homepage2 = () => {
  const [_sliderIndex, _setSliderIndex] = React.useState(0);

  const CustomIndicator = (
    dot: any
  ) => {
    return (
      <span
        className={`dotBorder`}
        key={dot.key}
        role="button"
        tabIndex={0}
        aria-label={`${dot.li} ${dot.key + 1}`}
      >
        <div
          className={`dotContent`}
        ></div>
      </span>
    );
  };

  const leftPanellArr = [
    <SliderLeftPanel
      headerLinkText="WEB3"
      link="/work/bitfleq"
      title="BitFleqs"
      description={[
        "With the invaluable assistance of Nurdsoft, BitFleqs.co has emerged as a leading blockchain-powered supply chain management platform since its establishment in 2018. The platform revolutionizes the industry by delivering end-to-end visibility, traceability, and automation throughout the entire supply chain ecosystem. Through the expert guidance of Nurdsoft, BitFleqs.co seamlessly integrates distributed ledger technology, smart contracts, and data analytics to provide a secure and transparent infrastructure.",
        "Nurdsoft played a pivotal role in the development of BitFleqs.co, enabling businesses to optimize their supply chain operations effectively. Their expertise and collaboration resulted in a robust platform that empowers organizations to streamline their processes and drive efficiency. By leveraging Nurdsoft's guidance and technical prowess, BitFleqs.co has become a game-changer in the supply chain management landscape, offering enhanced security, reliability, and transparency to businesses worldwide.",
      ]}
      img={BitfleqImg}
    />,
    <SliderLeftPanel
      headerLinkText="INFRASTRUCTURE"
      link="/work/bnd"
      title="Build’n Deploy"
      description={[
        "This case study delves into the collaborative journey between Nurdsoft and BND, a software development firm, resulting in the creation of BuildnDeploy.co. This cloud-based platform presents extensive solutions for software development, continuous integration, and deployment processes. It showcases how Nurdsoft's assistance empowered BND to streamline their software development lifecycle and amplify their overall efficiency.",
      ]}
      img={BndImg}
    />,
    <SliderLeftPanel
      headerLinkText="AUDIT TRUST"
      link="/work/audit_trust"
      title="Assessor Portal"
      description={[
        "Introducing the AuditTrust Assessor Portal – a cutting-edge cybersecurity dashboard developed by Nurdsoft. This innovative platform offers real-time monitoring and management capabilities to effectively handle cybersecurity programs and automate compliance requirements. With Nurdsoft's expertise and collaboration, the AuditTrust Assessor Portal has revolutionized the field of cybersecurity.",
        "The AuditTrust Assessor Portal represents a remarkable achievement in cybersecurity innovation, thanks to Nurdsoft's dedication, expertise, and commitment to excellence. By leveraging this advanced platform, organizations can proactively address security challenges, streamline compliance efforts, and safeguard their digital assets. Stay one step ahead in the ever-changing cybersecurity landscape with the AuditTrust Assessor Portal, powered by Nurdsoft.",
      ]}
      img={AuditTrustImg}
    />,
    <SliderLeftPanel
      headerLinkText="LOGIXA"
      link="/work/logixa"
      title="Logixa"
      description={[
        "Logistics and transportation software solutions have revolutionized the way companies handle their supply chain and distribution networks. These software platforms offer a comprehensive suite of tools designed to streamline, optimize, and enhance every aspect of the logistics lifecycle.",
        "From inventory management and route optimization to real-time tracking and data analytics, these software systems provide a holistic approach to managing the intricate web of processes involved in getting shipment from point A to point B.",
      ]}
      img={LogixaImg}
    />,
  ];
  
  return(
    <Wrapper id="homepage2_parentContainer">
      <div className="homepage2_parentContainer">
        <Slider
          dots={true}
          infinite={true}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          pauseOnDotsHover
          pauseOnFocus
          pauseOnHover
          autoplay
          speed={500}
          easing="ease-out"
          appendDots= {dots => <ul>{dots}</ul>}
          afterChange={(index: number) => {
            _setSliderIndex(index)
          }}
          customPaging={CustomIndicator}
          fade
          swipe
        >
          {
            leftPanellArr.map((item) => (item))
          }
        </Slider>
      </div>
    </Wrapper>
  )
}
export default Homepage2;
