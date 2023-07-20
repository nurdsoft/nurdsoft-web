import React from "react";
import "./bndpage.scss";
import Wrapper from "../../wrapper";
import { StaticImage } from "gatsby-plugin-image";
import {
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_WITH_GRADIENT,
  FOOTER_FACEBOOK,
  FOOTER_GITHUB,
  FOOTER_LINKEDIN,
  FOOTER_TWITTER,
} from "../../../icons";
import Benefit1 from "../../../images/benefits1.png";
import Benefit2 from "../../../images/benefits2.png";
import Benefit3 from "../../../images/benefits3.png";
import Benefit4 from "../../../images/benefits4.png";
import Benefit5 from "../../../images/benefits5.png";
import Button from "../../button";
import { Link, navigate } from "gatsby";
import Footer from "../../common/footer/footer";

const Bndpage = () => {
  const productStatementList = [
    {
      label: "Source Control",
      content:
        "The code is stored in a version control system, such as Git or Mercurial.",
    },
    {
      label: "Build",
      content: "The code is built and tested.",
    },
    {
      label: "Deploy",
      content: "The code is deployed to a production environment.",
    },
  ];

  const benefitsList = [
    {
      img: Benefit1,
      title: "Improved Efficiency",
      description:
        "The automation of software development and deployment processes significantly reduced manual efforts and streamlined project delivery timelines. Development teams could focus more on coding and innovation rather than spending time on repetitive tasks.",
    },
    {
      img: Benefit2,
      title: "Enhanced Collaboration",
      description:
        "With a centralized platform for version control and environment management, collaboration among developers, testers, and project managers improved. Real-time code updates and automated deployments ensured everyone was working with the most up-to-date codebase.",
    },
    {
      img: Benefit3,
      title: "Error Reduction",
      description:
        "BuildnDeploy.co's consistent environment setup and automated testing pipelines minimized errors caused by manual configurations and reduced the risk of bugs slipping into production.",
    },
    {
      img: Benefit4,
      title: "Faster Time-to-Market",
      description:
        "By automating testing and deployment processes, BND was able to release new features and bug fixes more quickly, reducing the time-to-market and improving customer satisfaction.",
    },
    {
      img: Benefit5,
      title: "Scalability and Flexibility",
      description:
        "BuildnDeploy.co offered scalability to accommodate future growth and flexibility to adapt to changing project requirements and development methodologies.",
    },
  ];

  return (
    <Wrapper>
      <div className="bndpage_parentContainer">
        <h4 className="bndpage_title">
          Leveraging <span className="primary100 mx-4">BuildnDeploy.co</span>
          for Streamlined Software Development and Deployment
        </h4>
        <div className="bndpage_imageContainer1 mt-12">
          <StaticImage
            className="bndpage_bndImage"
            src={"../../../images/bnd-large.png"}
            alt="Build & Deploy"
          />
        </div>
        <div className="bndpage_productStatement mt-16">
          <h4 className="bndpage_productStatementTitle text-5xl mb-8 white">
            Product <span className="primary100 mr-2">Statement</span>
          </h4>
          <p className="bndpage_productStatementDescription mb-8 text-xl offGray font-normal">
            BuildnDeploy.co uses continuous integration (CI) and continuous
            delivery (CD) to automate the process of software development and
            deployment. CI/CD projects typically use a pipeline that consists of
            a series of steps, such as:
          </p>
          <div className="bndpage_productStatementList mb-16">
            <ol className="text-xl offGray font-normal">
              {productStatementList.map(
                (
                  productStatement: { label: string; content: string },
                  index: number
                ) => {
                  return (
                    <li className="mb-4" key={index}>
                      <b className="mr-2">
                        {index + 1}.&nbsp;&nbsp;{productStatement.label}:
                      </b>
                      {productStatement.content}
                    </li>
                  );
                }
              )}
            </ol>
          </div>
        </div>
        <div className="bndpage_keyChallanges pt-16 pb-8 pl-12">
          <h4 className="bndpage_keyChallangesTitle text-5xl mb-8 white">
            Key <span className="primary100 mr-2">Challanges</span>
          </h4>
          <p className="bndpage_keyChallangeDescription mb-8 text-xl offGray font-normal">
            Prior to adopting BuildnDeploy.co, BND encountered several
            challenges in their software development and deployment processes:
          </p>
          <div className="bndpage_keyChallangeListContainer mb-8 text-xl offGray font-normal">
            <div className="flex flex-col gap-6">
              <span className="mr-4 flex items-center gap-8">
                <ARROW_WITH_GRADIENT />
                <span>Manual Configuration</span>
              </span>
              <span className="mr-4 flex items-center gap-8">
                <ARROW_WITH_GRADIENT />
                <span>Version Control</span>
              </span>
              <span className="mr-4 flex items-center gap-8">
                <ARROW_WITH_GRADIENT />
                <span>Testing and Deployment</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bndpage_valueProposition pt-16 pb-8 pl-12">
          <h4 className="bndpage_valuePropositionTitle text-5xl text-center mb-2 white">
            Value <span className="primary100 mr-2">Proposition</span>
          </h4>
          <div className="bndpage_gridContainer">
            <div className="bndpage_boxContainer bndpage_item1">
              <h4 className="bndpage_boxTitle text-2xl flex items-center font-medium">
                <span className="mr-4 mt-2">
                  <StaticImage
                    width={24}
                    className="bndpage_bndImage"
                    src={"../../../images/improved_quality.png"}
                    alt="Improved Quality"
                  />
                </span>
                <span>Improved Quality</span>
              </h4>
              <p className="bndpage_boxPara offGray text-base font-normal">
                Improve the quality of software by automating the testing
                process. This can help to identify and fix bugs early in the
                development process, before they can cause problems in
                production.
              </p>
            </div>
            <div className="bndpage_boxContainer bndpage_item2">
              <h4 className="bndpage_boxTitle text-2xl flex items-center font-medium">
                <span className="mr-4 mt-2">
                  <StaticImage
                    width={24}
                    className="bndpage_bndImage"
                    src={"../../../images/speed.png"}
                    alt="Increased Speed"
                  />
                </span>
                <span>Increased Speed</span>
              </h4>
              <p className="bndpage_boxPara offGray text-base font-normal">
                Increase the speed of software development by automating the
                build and deployment process. This can free up developers to
                focus on more creative and strategic tasks.
              </p>
            </div>
            <div className="bndpage_boxContainer bndpage_item3">
              <h4 className="bndpage_boxTitle text-2xl flex items-center font-medium">
                <span className="mr-4 mt-2">
                  <StaticImage
                    width={24}
                    className="bndpage_bndImage"
                    src={"../../../images/reliability.png"}
                    alt="Enhanced Reliability"
                  />
                </span>
                <span>Enhanced Reliability</span>
              </h4>
              <p className="bndpage_boxPara offGray text-base font-normal">
                Enhance the reliability of software by automating the deployment
                process. This can help to ensure that software is always
                available to users.
              </p>
            </div>
          </div>
        </div>
        <div className="bndpage_implementationBuildDeploy pt-16 pb-8">
          <div className="flex justify-items-start items-start">
            <div>
              <h4 className="bndpage_implementationTitle text-5xl mb-2 white">
                Implementation of
                <span className="primary100 ml-4">BuildnDeploy.co</span>
              </h4>
              <p className="bndpage_implementationDescription mb-8 mt-8 w-7/12 text-xl offGray font-normal">
                To overcome these challenges, BND decided to implement
                BuildnDeploy.co as their software development and deployment
                solution. The following steps were taken during the
                implementation process:
              </p>
            </div>
            <StaticImage
              width={700}
              className="bndpage_bndImage"
              src={"../../../images/implementation.png"}
              alt="Implementation"
            />
          </div>
          <div className="bndpage_implementationSteps">
            <p className="bndpage_implementationDescription mb-8 mt-16 text-base offGray font-normal">
              <small className="mr-2 text-base">a.</small>
              <b className="mr-2">Version Control Integration:</b>The platform
              seamlessly integrated with their existing version control system
              (e.g., Git), enabling efficient code management, branch merging,
              and version control across different environments.
            </p>
            <StaticImage
              className="bndpage_bndImage"
              src={"../../../images/implementation_general.png"}
              alt="Implementation"
            />
            <p className="bndpage_implementationDescription mb-8 mt-16 text-base offGray font-normal">
              <small className="mr-2 text-base">b.</small>
              <b className="mr-2">Environment Setup:</b>BuildnDeploy.co
              facilitated the creation of consistent and reproducible
              environments by allowing BND to define and configure development,
              staging, and production environments through a user-friendly
              interface.
            </p>
            <StaticImage
              className="bndpage_bndImage"
              src={"../../../images/environment_variables.png"}
              alt="Environment Variables"
            />
            <p className="bndpage_implementationDescription mb-8 mt-16 text-base offGray font-normal">
              <small className="mr-2 text-base">c.</small>
              <b className="mr-2">Automated Testing and Deployment:</b>
              BuildnDeploy.co provided a robust pipeline for automating testing
              and deployment processes. BND leveraged this feature to define and
              execute test cases, run continuous integration and delivery
              pipelines, and automatically deploy new features and bug fixes to
              different environments.
            </p>
            <StaticImage
              className="bndpage_bndImage "
              src={"../../../images/build_process.png"}
              alt="Build Process"
            />
          </div>

          {/* Design thinking Process */}
          <div className="bndpage_designThinkingProcess pt-16 pb-8">
            <h4 className="bndpage_designThinkingProcessTitle text-5xl text-center mb-2 white">
              Design Thinking <span className="primary100 mr-2">Process</span>
            </h4>
            <div className="bndpage_designThinkingProcessImageContainer mt-16">
              <StaticImage
                className="bndpage_designThinkingProcessImage"
                src={"../../../images/design_thinking_process.png"}
                alt="Design thinking Process"
              />
            </div>
          </div>

          {/* How it works */}
          <div className="bndpage_howItWorks pt-16 pb-8">
            <h4 className="bndpage_howItWorksTitle text-5xl text-center mb-2 white">
              How it<span className="primary100 ml-2">Works</span>
            </h4>
            <div className="bndpage_howItWorksImagesContainer flex items-center gap-6 mt-16">
              <StaticImage
                className="bndpage_howItWorksImage1"
                src={"../../../images/how_it_works1.png"}
                alt="How it Works - Step 1"
              />
              <StaticImage
                className="bndpage_howItWorksImage2"
                src={"../../../images/how_it_works2.png"}
                alt="How it Works - Step 2"
              />
              <StaticImage
                className="bndpage_howItWorksImage3"
                src={"../../../images/how_it_works3.png"}
                alt="How it Works - Step 3"
              />
            </div>
          </div>

          {/* Visual Design */}
          <div className="bndpage_visualDesign pt-16 pb-8">
            <h4 className="bndpage_visualDesignTitle text-5xl text-center mb-2 white">
              Visual <span className="primary100 mx-2">Design</span>(UI)
            </h4>
            <div className="bndpage_visualDesignImagesContainer flex flex-wrap gap-4 mt-16">
              <StaticImage
                className="bndpage_visualDesign1"
                width={605}
                src={"../../../images/visual_design1.png"}
                alt="Visual Design 1"
              />
              <StaticImage
                width={605}
                className="bndpage_visualDesign2"
                src={"../../../images/visual_design2.png"}
                alt="Visual Design 2"
              />
              <StaticImage
                width={605}
                className="bndpage_visualDesign3"
                src={"../../../images/visual_design7.png"}
                alt="Visual Design 3"
              />
              <StaticImage
                width={605}
                className="bndpage_visualDesign4"
                src={"../../../images/visual_design8.png"}
                alt="Visual Design 4"
              />
              <StaticImage
                className="bndpage_visualDesign5"
                src={"../../../images/visual_design9.png"}
                alt="Visual Design 5"
              />
            </div>
          </div>

          {/* Results and Benifits */}

          <div className="bndpage_resultsAndBenifits pt-16 pb-8">
            <h4 className="bndpage_resultsAndBenifitsTitle text-5xl white">
              Results and <span className="primary100 mr-2">Benefits</span>
            </h4>
            <p className="bndpage_resultsAndBenifitsDescription italic mb-16 mt-8 text-xl offGray font-normal">
              Implementing BuildnDeploy.co yielded several significant results
              and benefits for BND:
            </p>
            <div className="bndpage_resultsAndBenifitsFlexContainer flex flex-row flex-wrap gap-6">
              {benefitsList.map(
                (
                  benefit: { img: any; title: string; description: string },
                  index: number
                ) => {
                  return (
                    <div
                      key={index}
                      className={`bndpage_resultsAndBenifitsFlexBox ${
                        index !== benefitsList.length - 1 ? "boxWidth" : ""
                      } flex flex-col gap-4 justify-items-start p-8`}
                    >
                      <img
                        width={40}
                        height={40}
                        src={benefit.img}
                        alt={benefit.title}
                      />
                      <h4 className="white text-xl m-0 p-0">{benefit.title}</h4>
                      <p className="offGray text-base m-0 p-0">
                        {benefit.description}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Conclusion */}

          <div className="bndpage_conclusion mt-16 mb-28 py-16 px-20">
            <h4 className="bndpage_conclusionTitle text-5xl m-0 p-0 text-center white">
              Conclusion
            </h4>
            <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
              Thanks to Nurdsoft's expertise in crafting BuildnDeploy.co, BND
              experienced remarkable progress in overcoming their obstacles and
              achieving enhanced efficiency, collaboration, and time-to-market.
              The platform's exceptional automation features, optimized
              workflows, and seamless integrations granted them a significant
              advantage in the competitive software development industry.
            </p>
            <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
              With Nurdsoft's skillful construction of BuildnDeploy.co, BND
              witnessed a remarkable transformation in their software
              development and deployment endeavors. The ability to deliver
              top-notch software products to clients with greater effectiveness
              resulted in notable business growth and heightened customer
              satisfaction. Nurdsoft's contribution has been invaluable in
              empowering BND to thrive and excel in their industry.
            </p>
          </div>

          {/* link buttons */}
          <div className="bndpage_linkButtons flex justify-between mb-28">
            <div
              onClick={() => {
                navigate("/work/audit_trust");
              }}
              className="bndpage_linkButtonsBoxContainer p-8"
            >
              <ARROW_LEFT />
              <div>
                <p className="offGray font-normal text-base">PREV</p>
                <h4 className="white text-xl mt-4">Assessor Trust</h4>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("/work/bitfleq");
              }}
              className="bndpage_linkButtonsBoxContainer p-8"
            >
              <div>
                <p className="offGray font-normal text-base">NEXT</p>
                <h4 className="white text-xl mt-4">BitFleqs</h4>
              </div>
              <ARROW_RIGHT />
            </div>
          </div>

          {/* email box */}

          <div className="bndpage_emailBoxContainer bndpage_conclusion flex flex-col gap-10 items-center justify-between mb-32 py-16 px-20">
            <div className="uppercase primary100 text-xl">Idea in Mind?</div>
            <h4 className="white text-center text-5xl w-6/12">
              Let's create an amazing product together!
            </h4>
            <a href="mailto:hr@nurdsoft.co">
              <Button buttonText="EMAIL NOW" className="mr-32" />
            </a>
          </div>

          {/* footer */}
          <div className="mt-28">
            <Footer />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Bndpage;
