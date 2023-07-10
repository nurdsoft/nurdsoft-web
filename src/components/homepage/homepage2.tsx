import * as React from "react";
import "./homepage2.scss";
import Wrapper from "../wrapper";
import { StaticImage } from "gatsby-plugin-image";
import { Carousel } from "react-responsive-carousel";
import "../../styles/carousel.scss";
import SliderLeftPanel from "../slider/sliderleftpanel";
import SliderRightPanel from "../slider/sliderrightpanel";
import WrapperLeft from "../wrapperleft";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import ResponsiveSliderPanel from "../slider/responsivesliderpanel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Homepage2 = () => {
  const breakpoints = useBreakpoint();

  const [_sliderIndex, _setSliderIndex] = React.useState(0);

  const settings = {
    dots: false,
    autoplay: false,
    vertical: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const leftPanellArr = [
    <SliderLeftPanel
      headerLinkText="WEB3"
      buttonText="VIEW PROJECT"
      title="BitFleqs"
      description={[
        "With the invaluable assistance of Nurdsoft, BitFleqs.co has emerged as a leading blockchain-powered supply chain management platform since its establishment in 2018. The platform revolutionizes the industry by delivering end-to-end visibility, traceability, and automation throughout the entire supply chain ecosystem. Through the expert guidance of Nurdsoft, BitFleqs.co seamlessly integrates distributed ledger technology, smart contracts, and data analytics to provide a secure and transparent infrastructure.",
        "Nurdsoft played a pivotal role in the development of BitFleqs.co, enabling businesses to optimize their supply chain operations effectively. Their expertise and collaboration resulted in a robust platform that empowers organizations to streamline their processes and drive efficiency. By leveraging Nurdsoft's guidance and technical prowess, BitFleqs.co has become a game-changer in the supply chain management landscape, offering enhanced security, reliability, and transparency to businesses worldwide.",
      ]}
    />,
    <SliderLeftPanel
      headerLinkText="INFRASTRUCTURE"
      buttonText="VIEW PROJECT"
      title="Build’n Deploy"
      description={[
        "This case study delves into the collaborative journey between Nurdsoft and BND, a software development firm, resulting in the creation of BuildnDeploy.co. This cloud-based platform presents extensive solutions for software development, continuous integration, and deployment processes. It showcases how Nurdsoft's assistance empowered BND to streamline their software development lifecycle and amplify their overall efficiency.",
      ]}
    />,
    <SliderLeftPanel
      headerLinkText="AUDIT TRUST"
      buttonText="VIEW PROJECT"
      title="Assessor Portal"
      description={[
        "Introducing the AuditTrust Assessor Portal – a cutting-edge cybersecurity dashboard developed by Nurdsoft. This innovative platform offers real-time monitoring and management capabilities to effectively handle cybersecurity programs and automate compliance requirements. With Nurdsoft's expertise and collaboration, the AuditTrust Assessor Portal has revolutionized the field of cybersecurity.",
        "The AuditTrust Assessor Portal represents a remarkable achievement in cybersecurity innovation, thanks to Nurdsoft's dedication, expertise, and commitment to excellence. By leveraging this advanced platform, organizations can proactively address security challenges, streamline compliance efforts, and safeguard their digital assets. Stay one step ahead in the ever-changing cybersecurity landscape with the AuditTrust Assessor Portal, powered by Nurdsoft.",
      ]}
    />,
  ];

  const handleOnChange = (index: number) => {
    _setSliderIndex(index);
  };

  return breakpoints.md ? (
    <div className="pl-8 pr-8">
      <Wrapper>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          selectedItem={0}
          showThumbs={false}
          interval={2000}
          animationHandler={"slide"}
          showStatus={false}
          stopOnHover={false}
          axis="horizontal"
          showIndicators={false}
        >
          <ResponsiveSliderPanel
            headerLinkText="WEB3"
            buttonText="VIEW PROJECT"
            title="BitFleqs"
            description={[
              "With the invaluable assistance of Nurdsoft, BitFleqs.co has emerged as a leading blockchain-powered supply chain management platform since its establishment in 2018. The platform revolutionizes the industry by delivering end-to-end visibility, traceability, and automation throughout the entire supply chain ecosystem. Through the expert guidance of Nurdsoft, BitFleqs.co seamlessly integrates distributed ledger technology, smart contracts, and data analytics to provide a secure and transparent infrastructure.",
              "Nurdsoft played a pivotal role in the development of BitFleqs.co, enabling businesses to optimize their supply chain operations effectively. Their expertise and collaboration resulted in a robust platform that empowers organizations to streamline their processes and drive efficiency. By leveraging Nurdsoft's guidance and technical prowess, BitFleqs.co has become a game-changer in the supply chain management landscape, offering enhanced security, reliability, and transparency to businesses worldwide.",
            ]}
          >
            <StaticImage
              src="../../images/showcase_nft.png"
              quality={100}
              width={320}
              alt="NFT"
            />
          </ResponsiveSliderPanel>
          <ResponsiveSliderPanel
            headerLinkText="INFRASTRUCTURE"
            buttonText="VIEW PROJECT"
            title="Build’n Deploy"
            description={[
              "This case study delves into the collaborative journey between Nurdsoft and BND, a software development firm, resulting in the creation of BuildnDeploy.co. This cloud-based platform presents extensive solutions for software development, continuous integration, and deployment processes. It showcases how Nurdsoft's assistance empowered BND to streamline their software development lifecycle and amplify their overall efficiency.",
            ]}
          >
            <StaticImage
              src="../../images/simplify_work.png"
              quality={100}
              width={320}
              alt="Simplify Work"
            />
          </ResponsiveSliderPanel>
          <ResponsiveSliderPanel
            headerLinkText="AUDIT TRUST"
            buttonText="VIEW PROJECT"
            title="Assessor Portal"
            description={[
              "Introducing the AuditTrust Assessor Portal – a cutting-edge cybersecurity dashboard developed by Nurdsoft. This innovative platform offers real-time monitoring and management capabilities to effectively handle cybersecurity programs and automate compliance requirements. With Nurdsoft's expertise and collaboration, the AuditTrust Assessor Portal has revolutionized the field of cybersecurity.",
              "The AuditTrust Assessor Portal represents a remarkable achievement in cybersecurity innovation, thanks to Nurdsoft's dedication, expertise, and commitment to excellence. By leveraging this advanced platform, organizations can proactively address security challenges, streamline compliance efforts, and safeguard their digital assets. Stay one step ahead in the ever-changing cybersecurity landscape with the AuditTrust Assessor Portal, powered by Nurdsoft.",
            ]}
          >
            <StaticImage
              src="../../images/slider_dashboard.png"
              quality={100}
              width={320}
              alt="Slider Dashboard"
            />
          </ResponsiveSliderPanel>
        </Carousel>
      </Wrapper>
    </div>
  ) : (
    <WrapperLeft>
      <div className="homepage2_parentContainer">
        <div className="homepage2_flexContainer">
          <div className="homepage2_leftContainer">
            {/* <Slider {...settings}>
              <div className="h-full mt-28">
                <SliderLeftPanel
                  headerLinkText="WEB3"
                  buttonText="VIEW PROJECT"
                  title="BitFleqs"
                  description={[
                    "With the invaluable assistance of Nurdsoft, BitFleqs.co has emerged as a leading blockchain-powered supply chain management platform since its establishment in 2018. The platform revolutionizes the industry by delivering end-to-end visibility, traceability, and automation throughout the entire supply chain ecosystem. Through the expert guidance of Nurdsoft, BitFleqs.co seamlessly integrates distributed ledger technology, smart contracts, and data analytics to provide a secure and transparent infrastructure.",
                    "Nurdsoft played a pivotal role in the development of BitFleqs.co, enabling businesses to optimize their supply chain operations effectively. Their expertise and collaboration resulted in a robust platform that empowers organizations to streamline their processes and drive efficiency. By leveraging Nurdsoft's guidance and technical prowess, BitFleqs.co has become a game-changer in the supply chain management landscape, offering enhanced security, reliability, and transparency to businesses worldwide.",
                  ]}
                />
              </div>
              <div className="h-full mb-32 pt-32">
                <SliderLeftPanel
                  headerLinkText="INFRASTRUCTURE"
                  buttonText="VIEW PROJECT"
                  title="Build’n Deploy"
                  description={[
                    "This case study delves into the collaborative journey between Nurdsoft and BND, a software development firm, resulting in the creation of BuildnDeploy.co. This cloud-based platform presents extensive solutions for software development, continuous integration, and deployment processes. It showcases how Nurdsoft's assistance empowered BND to streamline their software development lifecycle and amplify their overall efficiency.",
                  ]}
                />
              </div>
              <div className="">
                <SliderLeftPanel
                  headerLinkText="AUDIT TRUST"
                  buttonText="VIEW PROJECT"
                  title="Assessor Portal"
                  description={[
                    "Introducing the AuditTrust Assessor Portal – a cutting-edge cybersecurity dashboard developed by Nurdsoft. This innovative platform offers real-time monitoring and management capabilities to effectively handle cybersecurity programs and automate compliance requirements. With Nurdsoft's expertise and collaboration, the AuditTrust Assessor Portal has revolutionized the field of cybersecurity.",
                    "The AuditTrust Assessor Portal represents a remarkable achievement in cybersecurity innovation, thanks to Nurdsoft's dedication, expertise, and commitment to excellence. By leveraging this advanced platform, organizations can proactively address security challenges, streamline compliance efforts, and safeguard their digital assets. Stay one step ahead in the ever-changing cybersecurity landscape with the AuditTrust Assessor Portal, powered by Nurdsoft.",
                  ]}
                />
              </div>
            </Slider> */}
            {leftPanellArr[_sliderIndex]}
          </div>
          <div className="homepage2_rightContainer">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showArrows={false}
              selectedItem={0}
              showThumbs={false}
              interval={2000}
              animationHandler={"slide"}
              showStatus={false}
              stopOnHover={false}
              axis="horizontal"
              showIndicators={false}
              onChange={handleOnChange}
            >
              <SliderRightPanel>
                <StaticImage
                  src="../../images/showcase_nft.png"
                  quality={100}
                  width={625}
                  alt="NFT"
                />
              </SliderRightPanel>
              <SliderRightPanel>
                <StaticImage
                  src="../../images/simplify_work.png"
                  quality={100}
                  width={625}
                  alt="Simplify Work"
                />
              </SliderRightPanel>
              <SliderRightPanel>
                <StaticImage
                  src="../../images/slider_dashboard.png"
                  width={625}
                  quality={100}
                  alt="Slider Dashboard"
                />
              </SliderRightPanel>
            </Carousel>
          </div>
        </div>
      </div>
    </WrapperLeft>
  );
};

export default Homepage2;
