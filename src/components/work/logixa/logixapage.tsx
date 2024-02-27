import "./logixapage.scss";

import { ARROW_LEFT, ARROW_RIGHT, CIRCLE_TICK } from "../../../icons";

import Button from "../../button";
import Footer from "../../common/footer/footer";
import LogixaFeature1 from "../../../images/logixaFeat1.png";
import LogixaFeature2 from "../../../images/logixaFeat2.png";
import LogixaFeature3 from "../../../images/logixaFeat3.png";
import LogixaFeature4 from "../../../images/logixaFeat4.png";
import LogixaFeature5 from "../../../images/logixaFeat5.png";
import LogixaFeature6 from "../../../images/logixaFeat6.png";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Wrapper from "../../wrapper";
import { navigate } from "gatsby";

const LogixaPage = () => {
  const keyFeaturesList = [
    {
      img: LogixaFeature1,
      title: "Shipment Tracking",
      description:
        "Gain complete control over your supply chain with real-time tracking of shipments, vehicles, and inventory. Monitor each step of the journey, ensuring transparency and enabling quick interventions if any issues arise.",
    },
    {
      img: LogixaFeature2,
      title: "Scalability",
      description:
        "As your business grows and market dynamics change, the software should be scalable and adaptable to accommodate evolving needs and challenges.",
    },
    {
      img: LogixaFeature3,
      title: "Notify",
      description:
        "Communication and connectivity for seamless interactions. Simplify regulatory compliance by automating notification processes.",
    },
    {
      img: LogixaFeature4,
      title: "Customer Satisfaction",
      description:
        "Provide exceptional customer service by offering accurate delivery estimates, real-time tracking, and prompt issue resolution. Enhance customer satisfaction and loyalty.",
    },
    {
      img: LogixaFeature5,
      title: "Integration Capabilities",
      description:
        "Seamlessly integrate the software with existing systems, such as ERP (Enterprise Resource Planning) and CRM (Customer Relationship Management) systems, to create a unified and efficient workflow.",
    },
    {
      img: LogixaFeature6,
      title: "Mobile View",
      description:
        "Access critical logistics information on the go with mobile applications, allowing you to manage and monitor operations from anywhere at any time.",
    },
  ];

  const handleEmailNow = () => {
    navigate("/#contact-us");
  };

  return (
    <Wrapper>
      <div className="logixapage_parentContainer">
        <h4 className="logixapage_title">
          Revamping <span className="primary100">Shipment Management</span> to
          Improve Logistics and Optimize Supply Chain
        </h4>
        <div className="logixapage_imageContainer1 mt-12 flex justify-center">
          <StaticImage
            className="logixapage_bndImage rounded-xl"
            src={"../../../images/logixa.webp"}
            alt="Logixa"
            width={1000}
          />
        </div>
        <div className="logixapage_conclusion mb-28 mt-16 px-20 py-16">
          <h4 className="logixapage_conclusionTitle white m-0 p-0 text-center text-5xl">
            Introduction
          </h4>
          <p className="offGray mb-8 mt-8 text-center text-xl font-normal">
            Logixa, established in 2005, is a global player in the
            transportation and logistics sector, offering comprehensive services
            such as freight forwarding, supply chain management, and last-mile
            delivery. The company's expansive operations demanded a robust
            software solution to seamlessly integrate and optimize their diverse
            processes.
          </p>
        </div>
        <div className="logixapage_productStatement mt-16">
          <h4 className="logixapage_productStatementTitle white mb-8 text-5xl">
            Product <span className="primary100 mr-2">Statement</span>
          </h4>
          <p className="logixapage_productStatementDescription offGray mb-8 text-xl font-normal">
            Logixa, a prominent transportation and logistics company, faced
            challenges in optimizing their operations, managing a vast fleet,
            and ensuring timely deliveries. In a bid to enhance efficiency and
            stay ahead in the competitive industry, Logixa partnered with
            Nurdsoft, a leading software development company, to develop a
            bespoke logistics management solution.
          </p>
        </div>
        <div className="logixapage_keyServices px-24 pb-12 pt-16">
          <h4 className="logixapage_keyServicesTitle white mb-12 text-5xl">
            Key <span className="primary100 mr-2">Services</span>
          </h4>
          <div className="logixapage_keyServicesListContainer white mb-8 flex items-center justify-between text-xl font-normal">
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
        <div className="logixapage_valueProposition mb-8 mt-24 flex items-center justify-items-center">
          <div>
            <h4 className="logixapage_valuePropositionTitle white mt-12 text-5xl">
              Value <span className="primary100 mr-2">Proposition</span>
            </h4>
            <p className="logixapage_implementationDescription offGray mb-8 mt-12 w-9/12 text-xl font-normal">
              The implementation of the Nurdsoft solution involved meticulous
              planning, customization, and seamless integration with Logixa's
              existing infrastructure. The transition was carefully managed to
              minimize disruptions in daily operations.
            </p>
          </div>
          <StaticImage
            width={800}
            className="logixapage_auditImage"
            src={"../../../images/audit_value_proposition.png"}
            alt="Audit Trust Image"
          />
        </div>
        <div className="mt-28">
          <div className="logixapage_assessorDashboard">
            <h4 className="logixapage_assessorDashboardTitle white mb-2 text-center text-5xl">
              Visual <span className="primary100 ml-2">Design</span> (UI)
            </h4>
            <div className="mb-6 mt-20 flex justify-center">
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

          <div className="logixapage_keyFeatures mb-8 mt-24">
            <h4 className="logixapage_keyFeaturesTitle white mb-20 text-5xl">
              Key features and
              <span className="primary100 ml-4">Functionality</span>
            </h4>
            <div className="logixapage_keyFeaturesFlexContainer flex flex-row flex-wrap gap-6">
              {keyFeaturesList.map(
                (
                  feature: { img: any; title: string; description: string },
                  index: number,
                ) => {
                  return (
                    <div
                      key={index}
                      className={`logixapage_keyFeaturesFlexBox flex flex-col justify-items-start gap-8 p-8`}
                    >
                      <img
                        width={50}
                        height={50}
                        src={feature.img}
                        alt={feature.title}
                      />
                      <h4 className="white m-0 p-0 text-2xl">
                        {feature.title}
                      </h4>
                      <p className="offGray m-0 p-0 text-base">
                        {feature.description}
                      </p>
                    </div>
                  );
                },
              )}
            </div>
          </div>
          <div className="logixapage_conclusion mb-28 mt-16 px-20 py-16">
            <h4 className="logixapage_conclusionTitle white m-0 p-0 text-center text-5xl">
              Conclusion
            </h4>
            <p className="offGray mb-8 mt-8 text-center text-xl font-normal">
              The Logixa-Nurdsoft collaboration stands as a testament to the
              transformative power of customized logistics management solutions.
            </p>
            <p className="offGray mb-8 mt-8 text-center text-xl font-normal">
              By addressing specific challenges and incorporating innovative
              features, the partnership has not only enhanced Logixa's
              operational efficiency but also positioned them as a leader in the
              fiercely competitive transportation and logistics industry.
            </p>
            <p className="offGray mb-8 mt-8 text-center text-xl font-normal">
              This success story showcases the value of strategic partnerships
              and tailored software solutions in navigating the complexities of
              modern logistics.
            </p>
          </div>
          {/* link buttons */}
          <div className="logixapage_linkButtons mb-28 flex justify-between">
            <div
              onClick={() => {
                navigate("/work/audit_trust");
              }}
              className="logixapage_linkButtonsBoxContainer p-8"
            >
              <ARROW_LEFT />
              <div>
                <p className="offGray text-base font-normal">PREV</p>
                <h4 className="white mt-4 text-xl">Audit Trust</h4>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("/work/bnd");
              }}
              className="logixapage_linkButtonsBoxContainer p-8"
            >
              <div>
                <p className="offGray text-base font-normal">NEXT</p>
                <h4 className="white mt-4 text-xl">Build’n Deploy</h4>
              </div>
              <ARROW_RIGHT />
            </div>
          </div>

          {/* email box */}

          <div className="logixapage_emailBoxContainer logixapage_conclusion mb-32 flex flex-col items-center justify-between gap-10 px-20 py-16">
            <div className="primary100 text-xl uppercase">Idea in Mind?</div>
            <h4 className="white w-6/12 text-center text-5xl">
              Let's create an amazing product together!
            </h4>
            <Button onClick={handleEmailNow} buttonText="INQUIRE NOW" />
          </div>

          {/* footer */}

          <div className="mt-32">
            <Footer />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LogixaPage;
