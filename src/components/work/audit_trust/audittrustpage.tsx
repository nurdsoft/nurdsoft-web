import "./audittrustpage.scss";

import { ARROW_LEFT, ARROW_RIGHT, CIRCLE_TICK } from "../../../icons";

import AuditFeature1 from "../../../images/audit_feature1.png";
import AuditFeature2 from "../../../images/audit_feature2.png";
import AuditFeature3 from "../../../images/audit_feature3.png";
import AuditFeature4 from "../../../images/audit_feature4.png";
import AuditFeature5 from "../../../images/audit_feature5.png";
import AuditFeature6 from "../../../images/audit_feature6.png";
import Button from "../../button";
import Footer from "../../common/footer/footer";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Wrapper from "../../wrapper";
import { navigate } from "gatsby";

const AuditTrustPage = () => {
  const productStatementList = [
    {
      label: "Monitor",
      content:
        "Achieve compliance with security frameworks relevant to your business, regulators and customers.",
    },
    {
      label: "Automate",
      content:
        "Streamline our processes and empower your team by automating the collection and reporting of control evidence. ",
    },
    {
      label: "Collaborate",
      content:
        "Partner with AuditTrust experts and your key stakeholders to understand and fulfill control requirements.",
    },
    {
      label: "Defend",
      content:
        "Continuously calibrate the efficacy of your controls as security frameworks evolve to stay ahead of threats.",
    },
  ];

  const keyFeaturesList = [
    {
      img: AuditFeature1,
      title: "Gap Analysis",
      description: "Reduce time spent on security questionnaires",
    },
    {
      img: AuditFeature2,
      title: "Policies & Procedures",
      description: "Pre-built templates to meet your needs",
    },
    {
      img: AuditFeature3,
      title: "Security Awareness Training",
      description: "Build a culture of security",
    },
    {
      img: AuditFeature4,
      title: "Vulnerability Scanning & Pen Testing",
      description: "Identify and remediate vulnerabilities",
    },
    {
      img: AuditFeature5,
      title: "Compliance Frameworks",
      description: "Protect your business and reputation",
    },
    {
      img: AuditFeature6,
      title: "Remediation Tracker",
      description: "Prioritize the most critical security tasks",
    },
  ];

  return (
    <Wrapper>
      <div className="audittrustpage_parentContainer">
        <h4 className="audittrustpage_title">
          {"One Platform to Manage Your "}
          <span className="primary100">Security Program</span>
          {" and "}
          <span className="primary100">Compliance</span>
          {" Posture."}
        </h4>
        <div className="audittrustpage_imageContainer1 flex justify-center mt-12">
          <StaticImage
            className="audittrustpage_audittrustImage rounded-xl"
            src={"../../../images/audit_dashboard.png"}
            alt="Audit Dashboard"
            width={1000}
          />
        </div>

        {/* introduction */}

        <div className="audittrustpage_introduction my-24 py-16 px-20">
          <h4 className="audittrustpage_introductionTitle text-5xl m-0 p-0 text-center white">
            Introduction
          </h4>
          <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
            Introducing the AuditTrust Assessor Portal – a cutting-edge
            cybersecurity dashboard developed by Nurdsoft. This innovative
            platform offers real-time monitoring and management capabilities to
            effectively handle cybersecurity programs and automate compliance
            requirements. With Nurdsoft's expertise and collaboration, the
            AuditTrust Assessor Portal has revolutionized the field of
            cybersecurity.
          </p>
          <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
            Built on Nurdsoft's exceptional contributions, the AuditTrust
            Assessor Portal provides organizations with a powerful tool for
            streamlined cybersecurity management. The real-time dashboard
            empowers businesses to comprehensively monitor and assess their
            cybersecurity programs, ensuring robust protection against evolving
            threats. Additionally, the portal enables automation of compliance
            processes, ensuring adherence to industry standards and regulations.
          </p>
          <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
            The AuditTrust Assessor Portal represents a remarkable achievement
            in cybersecurity innovation, thanks to Nurdsoft's dedication,
            expertise, and commitment to excellence. By leveraging this advanced
            platform, organizations can proactively address security challenges,
            streamline compliance efforts, and safeguard their digital assets.
            Stay one step ahead in the ever-changing cybersecurity landscape
            with the AuditTrust Assessor Portal, powered by Nurdsoft.
          </p>
        </div>

        <div className="audittrustpage_productStatement mt-16 mb-24">
          <h4 className="audittrustpage_productStatementTitle text-5xl mb-12 white">
            Product <span className="primary100 mr-2">Statement</span>
          </h4>
          <p className="audittrustpage_productStatementDescription mb-8 text-xl offGray font-normal">
            Single, centralized platform that is fully integrated with your
            security tools.
          </p>
          <div className="audittrustpage_productStatementList mb-16">
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

        {/* key services */}
        <div className="audittrustpage_keyServices pt-16 pb-12 px-24">
          <h4 className="audittrustpage_keyServicesTitle text-5xl mb-12 white">
            Key <span className="primary100 mr-2">Services</span>
          </h4>
          <div className="audittrustpage_keyServicesListContainer flex justify-between items-center mb-8 text-xl offGray font-normal">
            <div className="flex flex-col gap-6">
              <span className="flex items-center gap-6">
                <CIRCLE_TICK />
                <span>Business Transformation</span>
              </span>
              <span className="flex items-center gap-6">
                <CIRCLE_TICK />
                <span>Managed Services</span>
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <span className="flex items-center gap-6">
                <CIRCLE_TICK />
                <span>Technology Solutions Provider</span>
              </span>
              <span className="flex items-center gap-6">
                <CIRCLE_TICK />
                <span>Cybersecurity Services</span>
              </span>
            </div>
          </div>
        </div>
        <div className="audittrustpage_valueProposition mt-24 mb-8 flex justify-items-center items-center">
          <div>
            <h4 className="audittrustpage_valuePropositionTitle mt-12 text-5xl white">
              Value <span className="primary100 mr-2">Proposition</span>
            </h4>
            <p className="bndpage_implementationDescription mb-8 mt-12 w-9/12 text-xl offGray font-normal">
              Achieve rapid compliance with critical security frameworks and
              regulatory requirements, saving time and resources while
              empowering your business to pursue growth and innovation.
              Transform your cybersecurity program with an automated, all-in-one
              security platform.
            </p>
          </div>
          <StaticImage
            width={800}
            className="audittrustpage_auditImage"
            src={"../../../images/audit_value_proposition.png"}
            alt="Audit Trust Image"
          />
        </div>
        <div className="mt-28 mb-16">
          {/* Assessor Dashboard */}
          <div className="audittrustpage_assessorDashboard">
            <h4 className="audittrustpage_assessorDashboardTitle text-5xl text-center mb-2 white">
              Assessor <span className="primary100 ml-2">Dashboard</span>
            </h4>
            <div className="mt-20 mb-6 flex justify-center">
              <StaticImage
                className="audittrustpage_assessorDashboard1"
                src={"../../../images/assessor_dashboard1.png"}
                alt="Assessor Dashboard 1"
                width={1000}
              />
            </div>
            <div className="audittrustpage_assessorDashboardImagesContainer flex flex-wrap gap-6">
              <StaticImage
                width={603}
                className="audittrustpage_assessorDashboard2 rounded-xl"
                src={"../../../images/assessor_dashboard2.png"}
                alt="Assessor Dashboard 2"
              />
              <StaticImage
                width={603}
                className="audittrustpage_assessorDashboard3 rounded-xl"
                src={"../../../images/assessor_dashboard3.png"}
                alt="Assessor Dashboard 3"
              />
              <StaticImage
                width={603}
                className="audittrustpage_assessorDashboard4 rounded-xl"
                src={"../../../images/assessor_dashboard4.png"}
                alt="Assessor Dashboard 4"
              />
              <StaticImage
                width={603}
                className="audittrustpage_assessorDashboard4 rounded-xl"
                src={"../../../images/assessor_dashboard4.png"}
                alt="Assessor Dashboard 4"
              />
            </div>
          </div>

          {/* Key Features */}

          <div className="audittrustpage_keyFeatures mt-24 mb-8">
            <h4 className="audittrustpage_keyFeaturesTitle mb-20 text-5xl white">
              Key features and
              <span className="primary100 ml-4">Functionality</span>
            </h4>
            <div className="audittrustpage_keyFeaturesFlexContainer flex flex-row flex-wrap gap-6">
              {keyFeaturesList.map(
                (
                  feature: { img: any; title: string; description: string },
                  index: number
                ) => {
                  return (
                    <div
                      key={index}
                      className={`audittrustpage_keyFeaturesFlexBox flex flex-col gap-8 justify-items-start p-8`}
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

          {/* Conclusion */}

          <div className="audittrustpage_conclusion mt-16 mb-28 py-16 px-20">
            <h4 className="audittrustpage_conclusionTitle text-5xl m-0 p-0 text-center white">
              Conclusion
            </h4>
            <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
              Thanks to the exceptional work of Nurdsoft in building the
              AuditTrust Assessor Portal, our organization has experienced a
              remarkable transformation. As a global technology consulting firm,
              we understand the importance of design thinking, interdependent
              subject matter expertise, and emerging technology solutions in
              driving meaningful change for organizations. However, when change
              becomes not just urgent, but absolutely necessary, the AuditTrust
              Assessor Portal has proven to be our guiding light.
            </p>
            <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
              Nurdsoft's expertise and dedication in developing the portal have
              been instrumental in helping us achieve significant and impactful
              transformations. The portal serves as a comprehensive platform
              that empowers organizations to navigate complex audits and
              assessments with ease and efficiency. With its intuitive design,
              robust functionalities, and seamless integration of emerging
              technologies, the AuditTrust Assessor Portal has become an
              indispensable tool in our arsenal.
            </p>
            <p className="mb-8 mt-8 text-xl text-center offGray font-normal">
              We are grateful to Nurdsoft for their exceptional contribution in
              building the AuditTrust Assessor Portal. Their commitment to
              excellence and their ability to understand our unique needs have
              truly set them apart. With their support, we have been able to
              deliver transformative solutions to our clients, empowering them
              to adapt and thrive in an ever-changing landscape.
            </p>
          </div>

          {/* link buttons */}
          <div className="audittrustpage_linkButtons flex justify-between mb-28">
            <div
              onClick={() => {
                navigate("/work/bitfleq");
              }}
              className="audittrustpage_linkButtonsBoxContainer p-8"
            >
              <ARROW_LEFT />
              <div>
                <p className="offGray font-normal text-base">PREV</p>
                <h4 className="white text-xl mt-4">BitFleqs</h4>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("/work/bnd");
              }}
              className="audittrustpage_linkButtonsBoxContainer p-8"
            >
              <div>
                <p className="offGray font-normal text-base">NEXT</p>
                <h4 className="white text-xl mt-4">Build’n Deploy</h4>
              </div>
              <ARROW_RIGHT />
            </div>
          </div>

          {/* email box */}

          <div className="audittrustpage_emailBoxContainer audittrustpage_conclusion flex flex-col gap-10 items-center justify-between mb-32 py-16 px-20">
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

export default AuditTrustPage;
