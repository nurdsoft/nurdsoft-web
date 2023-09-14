import "./logixapage.scss"

import { ARROW_LEFT, ARROW_RIGHT, CIRCLE_TICK } from "../../../icons"

import Button from "../../button";
import Footer from "../../common/footer/footer";
import LogixaFeature1 from "../../../images/logixaFeat1.png";
import LogixaFeature2 from "../../../images/logixaFeat2.png";
import LogixaFeature3 from "../../../images/logixaFeat3.png";
import LogixaFeature4 from "../../../images/logixaFeat4.png";
import LogixaFeature5 from "../../../images/logixaFeat5.png";
import LogixaFeature6 from "../../../images/logixaFeat6.png";
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Wrapper from "../../wrapper"
import { navigate } from "gatsby";

const LogixaPage = () => {

  const keyFeaturesList = [
    {
      img: LogixaFeature1,
      title: "Shipment Tracking",
      description: "Gain complete control over your supply chain with real-time tracking of shipments, vehicles, and inventory. Monitor each step of the journey, ensuring transparency and enabling quick interventions if any issues arise.",
    },
    {
      img: LogixaFeature2,
      title: "Scalability",
      description: "As your business grows and market dynamics change, the software should be scalable and adaptable to accommodate evolving needs and challenges.",
    },
    {
      img: LogixaFeature3,
      title: "Notify",
      description: "Communication and connectivity for seamless interactions. Simplify regulatory compliance by automating notification processes.",
    },
    {
      img: LogixaFeature4,
      title: "Customer Satisfaction",
      description: "Provide exceptional customer service by offering accurate delivery estimates, real-time tracking, and prompt issue resolution. Enhance customer satisfaction and loyalty.",
    },
    {
      img: LogixaFeature5,
      title: "Integration Capabilities",
      description: "Seamlessly integrate the software with existing systems, such as ERP (Enterprise Resource Planning) and CRM (Customer Relationship Management) systems, to create a unified and efficient workflow.",
    },
    {
      img: LogixaFeature6,
      title: "Mobile View",
      description: "Access critical logistics information on the go with mobile applications, allowing you to manage and monitor operations from anywhere at any time.",
    },
  ];

  return (
    <Wrapper>
      <div className="logixapage_parentContainer">
        <h4 className="logixapage_title">
          Revamping <span className="primary100">Shipment Management</span> to Improve Logistics and Optimize Supply Chain
        </h4>
        <div className="logixapage_imageContainer1 flex justify-center mt-12">
          <StaticImage
            className="logixapage_bndImage rounded-xl"
            src={"../../../images/logixa.png"}
            alt="Logixa"
            width={1000}
          />
        </div>
        <div className="logixapage_conclusion mt-16 mb-28 py-16 px-20">
          <h4 className="logixapage_conclusionTitle text-5xl m-0 p-0 text-center white">
            Introduction
          </h4>
          <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
            Logistics and transportation software solutions have revolutionized 
            the way companies handle their supply chain and distribution networks. 
            These software platforms offer a comprehensive suite of tools designed 
            to streamline, optimize, and enhance every aspect of the logistics lifecycle. 
          </p>
          <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
            From inventory management and route optimization to real-time tracking and
            data analytics, these software systems provide a holistic approach to managing
            the intricate web of processes involved in getting shipment from point A 
            to point B.
          </p>
        </div>
        <div className="logixapage_productStatement mt-16">
          <h4 className="logixapage_productStatementTitle text-5xl mb-8 white">
            Product <span className="primary100 mr-2">Statement</span>
          </h4>
          <p className="logixapage_productStatementDescription mb-8 text-xl offGray font-normal">
            Introducing our cutting-edge Logistics and Transportation Software – your 
            ultimate solution for seamless supply chain management. Revolutionize the 
            way you move goods with advanced features such as real-time tracking, route 
            optimization, inventory management, and insightful analytics. Streamline 
            operations, enhance efficiency, and exceed customer expectations with our 
            software, designed to empower your business in the dynamic world of logistics.
          </p>
        </div>
        <div className="logixapage_keyServices pt-16 pb-12 px-24">
          <h4 className="logixapage_keyServicesTitle text-5xl mb-12 white">
            Key <span className="primary100 mr-2">Services</span>
          </h4>
          <div className="logixapage_keyServicesListContainer flex justify-between items-center mb-8 text-xl offGray font-normal">
            <div className="flex flex-col gap-6">
              <span className="flex items-center gap-6">
                <CIRCLE_TICK />
                <span>Real-time Tracking and Visibility</span>
              </span>
              <span className="flex items-center gap-6">
                <CIRCLE_TICK />
                <span>Warehouse Management</span>
              </span>
              <span className="flex items-center gap-6">
                <CIRCLE_TICK />
                <span>Scalability and Adaptability</span>
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <span className="flex items-center gap-6">
                <CIRCLE_TICK />
                <span>Shipment Processing and Fulfilment</span>
              </span>
              <span className="flex items-center gap-6">
                <CIRCLE_TICK />
                <span>Customer Experience Enhancement</span>
              </span>
              <span className="flex items-center gap-6">
                <CIRCLE_TICK />
                <span>Mobile Accessibility</span>
              </span>
            </div>
          </div>
        </div>
        <div className="logixapage_valueProposition mt-24 mb-8 flex justify-items-center items-center">
          <div>
            <h4 className="logixapage_valuePropositionTitle mt-12 text-5xl white">
              Value <span className="primary100 mr-2">Proposition</span>
            </h4>
            <p className="logixapage_implementationDescription mb-8 mt-12 w-9/12 text-xl offGray font-normal">
              Logixa offers state-of-the-art transportation software that helps businesses 
              transform their operations, reduce costs, and exceed customer expectations in the 
              logistics industry.
            </p>
          </div>
          <StaticImage
            width={800}
            className="logixapage_auditImage"
            src={"../../../images/audit_value_proposition.png"}
            alt="Audit Trust Image"
          />
        </div>
        <div className="mt-28 mb-16">
          <div className="logixapage_assessorDashboard">
            <h4 className="logixapage_assessorDashboardTitle text-5xl text-center mb-2 white">
              Visual <span className="primary100 ml-2">Design</span> (UI)
            </h4>
            <div className="mt-20 mb-6 flex justify-center">
              <StaticImage
                className="logixapage_assessorDashboard1"
                src={"../../../images/logixa1.png"}
                alt="Assessor Dashboard 1"
                width={1000}
              />
            </div>
            <div className="logixapage_assessorDashboardImagesContainer flex flex-wrap gap-6">
              <StaticImage
                width={603}
                className="logixapage_assessorDashboard2 rounded-xl"
                src={"../../../images/logixa2.png"}
                alt="Assessor Dashboard 2"
              />
              <StaticImage
                width={603}
                className="logixapage_assessorDashboard3 rounded-xl"
                src={"../../../images/logixa3.png"}
                alt="Assessor Dashboard 3"
              />
              <StaticImage
                width={603}
                className="logixapage_assessorDashboard4 rounded-xl"
                src={"../../../images/logixa4.png"}
                alt="Assessor Dashboard 4"
              />
              <StaticImage
                width={603}
                className="logixapage_assessorDashboard4 rounded-xl"
                src={"../../../images/logixa4.png"}
                alt="Assessor Dashboard 4"
              />
            </div>
          </div>

          <div className="logixapage_keyFeatures mt-24 mb-8">
            <h4 className="logixapage_keyFeaturesTitle mb-20 text-5xl white">
              Key features and
              <span className="primary100 ml-4">Functionality</span>
            </h4>
            <div className="logixapage_keyFeaturesFlexContainer flex flex-row flex-wrap gap-6">
              {keyFeaturesList.map(
                (
                  feature: { img: any; title: string; description: string },
                  index: number
                ) => {
                  return (
                    <div
                      key={index}
                      className={`logixapage_keyFeaturesFlexBox flex flex-col gap-8 justify-items-start p-8`}
                    >
                      <img
                        width={50}
                        height={50}
                        src={feature.img}
                        alt={feature.title}
                      />
                      <h4 className="white text-2xl m-0 p-0">
                        {feature.title}
                      </h4>
                      <p className="offGray text-base italic m-0 p-0">
                        {feature.description}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="logixapage_conclusion mt-16 mb-28 py-16 px-20">
            <h4 className="logixapage_conclusionTitle text-5xl m-0 p-0 text-center white">
              Conclusion
            </h4>
            <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
              With a user-centric approach, our Logixa software boasts an array of features 
              that empower you to take full control of your shipments. From real-time tracking
              and intelligent route optimization to seamless communication and insightful 
              analytics, our software covers all aspects, guaranteeing efficient, cost-effective,
              and timely deliveries. 
            </p>
            <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
              As we deliver this powerful logistic software into your capable hands, we are 
              confident that a new era of success in shipment management awaits you. Embrace 
              this transformative tool to unlock unparalleled efficiency, minimize risks, and 
              maximize customer satisfaction. The journey to elevated logistics starts now, 
              and we're excited to stand by your side as you achieve remarkable milestones, 
              experience operational excellence, and witness your logistics reach new pinnacles 
              of success. Here's to embracing innovation, enhancing customer experiences, and 
              shaping a future of logistics that knows no bounds.
            </p>
          </div>
          {/* link buttons */}
          <div className="logixapage_linkButtons flex justify-between mb-28">
            <div
              onClick={() => {
                navigate("/work/audit_trust");
              }}
              className="logixapage_linkButtonsBoxContainer p-8"
            >
              <ARROW_LEFT />
              <div>
                <p className="offGray font-normal text-base">PREV</p>
                <h4 className="white text-xl mt-4">Audit Trust</h4>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("/work/bnd");
              }}
              className="logixapage_linkButtonsBoxContainer p-8"
            >
              <div>
                <p className="offGray font-normal text-base">NEXT</p>
                <h4 className="white text-xl mt-4">Build’n Deploy</h4>
              </div>
              <ARROW_RIGHT />
            </div>
          </div>

          {/* email box */}

          <div className="logixapage_emailBoxContainer logixapage_conclusion flex flex-col gap-10 items-center justify-between mb-32 py-16 px-20">
            <div className="uppercase primary100 text-xl">Idea in Mind?</div>
            <h4 className="white text-center text-5xl w-6/12">
              Let's create an amazing product together!
            </h4>
            <a target="_blank" referrerPolicy="no-referrer" href="mailto:Hello@nurdsoft.co">
              <Button buttonText="EMAIL NOW" />
            </a>
          </div>

          {/* footer */}

          <div className="mt-32">
            <Footer />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default LogixaPage