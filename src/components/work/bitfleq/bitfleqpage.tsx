import "./bitfleqpage.scss";

import { ARROW_LEFT, ARROW_RIGHT, ARROW_WITH_GRADIENT } from "../../../icons";

import BitFleqFeature1 from "../../../images/bitfleq_feature1.png";
import BitFleqFeature2 from "../../../images/bitfleq_feature2.png";
import BitFleqFeature3 from "../../../images/bitfleq_feature3.png";
import BitFleqFeature4 from "../../../images/bitfleq_feature4.png";
import Button from "../../button";
import Footer from "../../common/footer/footer";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Wrapper from "../../wrapper";
import { navigate } from "gatsby";

const BitFleqpage = () => {
  const keyFeaturesList = [
    {
      img: BitFleqFeature1,
      title: "Blockchain-based Transparency",
      description:
        "BitFleqs leverages blockchain's decentralized and transparent nature to enhance visibility and traceability throughout the supply chain. Every transaction and event is recorded on the blockchain, ensuring an immutable audit trail accessible to authorized stakeholders. This feature enables real-time tracking, verification, and authentication of goods, reducing the risks of counterfeiting and unauthorized tampering.",
    },
    {
      img: BitFleqFeature2,
      title: "Smart Contract Automation",
      description:
        "BitFleqs employs smart contracts to automate various supply chain processes, such as procurement, inventory management, logistics, and payments. Smart contracts enable automatic execution of predefined terms and conditions, eliminating the need for intermediaries and reducing administrative overhead. This automation enhances operational efficiency, minimizes errors, and accelerates transaction settlements.",
    },
    {
      img: BitFleqFeature3,
      title: "Data Analytics and Insights",
      description:
        "By integrating advanced data analytics capabilities, BitFleqs enables businesses to derive actionable insights from their supply chain data. Real-time analytics and reporting features provide valuable information about inventory levels, demand patterns, delivery performance, and overall supply chain efficiency. These insights empower businesses to make data-driven decisions, optimize inventory planning, and identify areas for process improvement.",
    },
    {
      img: BitFleqFeature4,
      title: "Secure and Scalable Infrastructure",
      description:
        "BitFleqs utilizes blockchain's cryptographic security mechanisms to ensure data integrity, immutability, and protection against unauthorized access. The decentralized nature of blockchain eliminates single points of failure, enhancing the platform's resilience. Furthermore, Bitfleqs is designed to scale effectively, accommodating the needs of businesses of all sizes and seamlessly integrating with existing supply chain systems.",
    },
  ];

  return (
    <Wrapper>
      <div className="bitfleqspage_parentContainer">
        <h4 className="bitfleqspage_title">
          Revolutionizing Supply Chain Management with{" "}
          <span className="primary100 mx-4">Blockchain Technology</span>
        </h4>
        <div className="bitfleqspage_imageContainer1 flex items-center justify-center mt-12">
          <StaticImage
            className="bitfleqspage_bitfleqsImage rounded-xl"
            src={"../../../images/bitfleqs-large.png"}
            alt="Bitfleqs"
            width={1000}
          />
        </div>

        {/* introduction */}

        <div className="bitfleqspage_introduction my-24 py-16 px-20">
          <h4 className="bitfleqspage_introductionTitle text-5xl m-0 p-0 text-center white">
            Introduction
          </h4>
          <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
            With the invaluable assistance of Nurdsoft, BitFleqs.co has emerged
            as a leading blockchain-powered supply chain management platform
            since its establishment in 2018. The platform revolutionizes the
            industry by delivering end-to-end visibility, traceability, and
            automation throughout the entire supply chain ecosystem. Through the
            expert guidance of Nurdsoft, BitFleqs.co seamlessly integrates
            distributed ledger technology, smart contracts, and data analytics
            to provide a secure and transparent infrastructure.
          </p>
          <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
            Nurdsoft played a pivotal role in the development of BitFleqs.co,
            enabling businesses to optimize their supply chain operations
            effectively. Their expertise and collaboration resulted in a robust
            platform that empowers organizations to streamline their processes
            and drive efficiency. By leveraging Nurdsoft's guidance and
            technical prowess, BitFleqs.co has become a game-changer in the
            supply chain management landscape, offering enhanced security,
            reliability, and transparency to businesses worldwide.
          </p>
        </div>

        <div className="bitfleqspage_productStatement mt-16 mb-24">
          <h4 className="bitfleqspage_productStatementTitle text-5xl mb-8 white">
            Product <span className="primary100 mr-2">Statement</span>
          </h4>
          <p className="bitfleqspage_productStatementDescription mb-8 text-xl offGray font-normal">
            Supply chain management is a complex and often fragmented process
            that involves numerous stakeholders, intermediaries, and
            transactions. Bitfleqs emerged as a disruptive force, utilizing
            blockchain technology to address these pain points and revolutionize
            the supply chain landscape.
          </p>
        </div>
        <div className="bitfleqspage_keyChallanges pt-12 pb-8 pl-12">
          <h4 className="bitfleqspage_keyChallangesTitle text-5xl mb-8 white">
            Key <span className="primary100 mr-2">Challanges</span>
          </h4>
          <p className="bitfleqspage_keyChallangeDescription mb-8 text-xl offGray font-normal">
            Traditional supply chain systems face challenges related to
          </p>
          <div className="bitfleqspage_keyChallangeListContainer mb-8 text-xl offGray font-normal">
            <div className="flex flex-col gap-6">
              <span className="mr-4 flex items-center gap-8">
                <ARROW_WITH_GRADIENT />
                <span>Information Transparency</span>
              </span>
              <span className="mr-4 flex items-center gap-8">
                <ARROW_WITH_GRADIENT />
                <span>Data Integrity</span>
              </span>
              <span className="mr-4 flex items-center gap-8">
                <ARROW_WITH_GRADIENT />
                <span>Trust</span>
              </span>
              <span className="mr-4 flex items-center gap-8">
                <ARROW_WITH_GRADIENT />
                <span>Operational Inefficiencies</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bitfleqspage_valueProposition mt-24 mb-8">
          <h4 className="bitfleqspage_valuePropositionTitle text-5xl text-center mb-2 white">
            Value <span className="primary100 mr-2">Proposition</span>
          </h4>
          <div className="bitfleqspage_gridContainer">
            <div className="bitfleqspage_boxContainer bitfleqspage_item1">
              <h4 className="bitfleqspage_boxTitle text-2xl flex items-center font-medium">
                <span className="mr-4 mt-2">
                  <StaticImage
                    width={28}
                    className="bitfleqspage_bitfleqsImage"
                    src={"../../../images/improved_quality.png"}
                    alt="Enhanced Transparency and Trust"
                  />
                </span>
                <span>Enhanced Transparency and Trust</span>
              </h4>
              <p className="bitfleqspage_boxPara offGray italic text-base font-normal">
                BitFleqs provides a shared, transparent, and immutable record of
                all supply chain transactions. This transparency fosters trust
                among stakeholders, reduces disputes, and enables swift
                resolution of issues.
              </p>
            </div>
            <div className="bitfleqspage_boxContainer bitfleqspage_item2">
              <h4 className="bitfleqspage_boxTitle text-2xl flex items-center font-medium">
                <span className="mr-4 mt-2">
                  <StaticImage
                    width={28}
                    className="bitfleqspage_bitfleqsImage"
                    src={"../../../images/reliability.png"}
                    alt="Risk Mitigation and Compliance"
                  />
                </span>
                <span>Risk Mitigation and Compliance</span>
              </h4>
              <p className="bitfleqspage_boxPara italic offGray text-base font-normal">
                BitFleqs enhances supply chain resilience by reducing risks
                associated with fraud, counterfeit products, and unauthorized
                modifications. The immutable.
              </p>
            </div>
            <div className="bitfleqspage_boxContainer bitfleqspage_item3">
              <h4 className="bitfleqspage_boxTitle text-2xl flex items-center font-medium">
                <span className="mr-4 mt-2">
                  <StaticImage
                    width={28}
                    className="bitfleqspage_bitfleqsImage"
                    src={"../../../images/speed.png"}
                    alt="Improved Efficiency and Cost Savings"
                  />
                </span>
                <span>Improved Efficiency and Cost Savings</span>
              </h4>
              <p className="bitfleqspage_boxPara italic offGray text-base font-normal">
                Through automation and real-time data visibility, BitFleqs
                streamlines supply chain operations, reduces manual efforts, and
                eliminates inefficiencies. This optimization leads to
                significant cost savings by minimizing errors, mitigating
                disruptions, and optimizing inventory levels. Improved supply
                chain efficiency also enables businesses to respond more
                effectively to changing market demands and reduce
                time-to-market.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 mb-16">
          {/* Art Collection Design */}
          <div className="bitfleqspage_artCollection">
            <h4 className="bitfleqspage_artCollectionTitle text-5xl text-center mb-2 white">
              Art <span className="primary100 mx-2">Collection</span>
            </h4>
            <div className="bitfleqspage_artCollectionImagesContainer flex flex-wrap gap-6 mt-20">
              <StaticImage
                className="bitfleqspage_artCollection1 rounded-xl"
                width={590}
                src={"../../../images/art_collection1.png"}
                alt="Art Collection 1"
              />
              <StaticImage
                width={500}
                className="bitfleqspage_artCollection2 rounded-xl"
                src={"../../../images/art_collection2.png"}
                alt="Art Collection 2"
              />
            </div>
            <div className="flex justify-center items-center">
              <StaticImage
                width={1000}
                className="bitfleqspage_artCollection3 mt-20 rounded-xl"
                src={"../../../images/art_collection3.png"}
                alt="Art Collection 3"
              />
            </div>
          </div>

          {/* Key Features */}

          <div className="bitfleqspage_keyFeatures mt-24 mb-8">
            <h4 className="bitfleqspage_keyFeaturesTitle mb-20 text-5xl white">
              Key features and
              <span className="primary100 ml-4">Functionality</span>
            </h4>
            <div className="bitfleqspage_keyFeaturesFlexContainer flex flex-row flex-wrap gap-6">
              {keyFeaturesList.map(
                (
                  feature: { img: any; title: string; description: string },
                  index: number
                ) => {
                  return (
                    <div
                      key={index}
                      className={`bitfleqspage_keyFeaturesFlexBox flex flex-col gap-6 justify-items-start p-8`}
                    >
                      <img
                        width={40}
                        height={40}
                        src={feature.img}
                        alt={feature.title}
                      />
                      <h4 className="white text-xl m-0 p-0">{feature.title}</h4>
                      <p className="offGray text-base m-0 p-0">
                        {feature.description}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Conclusion */}

          <div className="bitfleqspage_conclusion mt-16 mb-28 py-16 px-20">
            <h4 className="bitfleqspage_conclusionTitle text-5xl m-0 p-0 text-center white">
              Conclusion
            </h4>
            <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
              Thanks to Nurdsoft's exceptional work in developing Bitfleqs.co,
              we can now showcase our premium ART collection with unmatched
              style and elegance. As the world's pioneering and largest
              platform, Bitfleqs.co offers a revolutionary dashboard for crypto
              collectibles and non-fungible tokens (NFTs). It has become the
              go-to destination for all our crypto collectibles and tokens,
              providing an immersive experience on the groundbreaking Web3
              platform.
            </p>
            <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
              Nurdsoft's expertise and dedication have truly transformed the way
              we display and engage with our ART collection. The seamless
              integration, user-friendly interface, and comprehensive
              aggregation of BitFleqs.co have surpassed our expectations. With
              Bitfleqs.co, we can proudly exhibit our prized crypto assets while
              enjoying the numerous benefits that come with being part of the
              Web3 ecosystem. We are grateful to Nurdsoft for their outstanding
              contribution in making Bitfleqs.co a game-changer in the world of
              digital collectibles and NFTs.
            </p>
          </div>

          {/* link buttons */}
          <div className="bitfleqspage_linkButtons flex justify-between mb-28">
            <div
              onClick={() => {
                navigate("/work/bnd");
              }}
              className="bitfleqspage_linkButtonsBoxContainer p-8"
            >
              <ARROW_LEFT />
              <div>
                <p className="offGray font-normal text-base">PREV</p>
                <h4 className="white text-xl mt-4">Build’n Deploy</h4>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("/work/audit_trust");
              }}
              className="bitfleqspage_linkButtonsBoxContainer p-8"
            >
              <div>
                <p className="offGray font-normal text-base">NEXT</p>
                <h4 className="white text-xl mt-4">Assessor Trust</h4>
              </div>
              <ARROW_RIGHT />
            </div>
          </div>

          {/* email box */}

          <div className="bitfleqspage_emailBoxContainer bitfleqspage_conclusion flex flex-col gap-10 items-center justify-between mb-32 py-16 px-20">
            <div className="uppercase primary100 text-xl">Idea in Mind?</div>
            <h4 className="white text-center text-5xl w-6/12">
              Let's create an amazing product together!
            </h4>
            <a href="mailto:hr@nurdsoft.co">
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
  );
};

export default BitFleqpage;
