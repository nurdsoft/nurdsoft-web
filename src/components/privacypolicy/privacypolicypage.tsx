import React, { useEffect, useState } from "react";
import "./privacypolicypage.scss";
import Wrapper from "../wrapper";
import Footer from "../common/footer/footer";
import { Link } from "gatsby";

const PrivacyPolicyPage = () => {
  const [hash, setHash] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  );
  let [preventHashChange, setPreventHashChange] = useState(false);

  const policyDataPoints = [
    {
      title: "Service",
      identifier: "privacypolicy_service",
      description: (
        <p className="text-xl offGray mt-12 font-normal">
          Service is the
          <a
            className="primary100 mx-2 underline"
            href="https://www.nurdsoft.co/"
            target="_blank"
          >
            https://www.nurdsoft.co/
          </a>
          website operated by nurdsoft.
        </p>
      ),
    },
    {
      title: "Personal Data",
      identifier: "privacypolicy_personal_data",
      description:
        "Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).",
    },
    {
      title: "Usage Data",
      identifier: "privacypolicy_usage_data",
      description:
        "Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).",
    },
    {
      title: "Cookies",
      identifier: "privacypolicy_cookies",
      description:
        "Cookies are small files stored on your device (computer or mobile device).",
    },
    {
      title: "Information Collection and Use",
      identifier: "privacypolicy_information_collection",
      description:
        "We collect several different types of information for various purposes to provide and improve our Service to you.",
    },
  ];

  const useOfDataList = [
    " To provide and maintain the Service ",
    "To notify you about changes to our Service",
    "To allow you to participate in interactive features of our Service when you choose to do so",
    "To provide customer care and support",
    "To provide analysis or valuable information so that we can improve the Service",
    "To monitor the usage of the Service",
    "To detect, prevent and address technical issues",
  ];

  const legalRequirementsList = [
    "To comply with a legal obligation",
    "To protect and defend the rights or property of nurdsoft",
    "To prevent or investigate possible wrongdoing in connection with the Service",
    "To protect the personal safety of users of the Service or the public",
    "To protect against legal liability",
  ];

  const tableOfContentList = [
    {
      label: "Service",
      id: "privacypolicy_service",
    },
    {
      label: "Personal Data",
      id: "privacypolicy_personal_data",
    },
    {
      label: "Usage Data",
      id: "privacypolicy_usage_data",
    },
    {
      label: "Cookies",
      id: "privacypolicy_cookies",
    },
    {
      label: "Information Collection and Use",
      id: "privacypolicy_information_collection",
    },
    {
      label: "Types of Data Collected",
      id: "privacypolicy_dataCollectionTitle",
    },
    {
      label: "Cookies and Usage Data",
      id: "privacypolicy_cookiesDataUsageTitle",
    },
    {
      label: "Disclosure Of Data",
      id: "privacypolicy_disclosureOfDataTitle",
    },
    {
      label: "Security Of Data",
      id: "privacypolicy_securityOfDataTitle",
    },
    {
      label: "Contact Us",
      id: "privacypolicy_contactUs",
    },
  ];

  const handleScroll = () => {
    const scroller = document.getElementById(
      "privacypolicypage_parentContainer"
    );
    if (!scroller) return;
    if (scroller?.scrollTop === 0) {
      window.location.hash = "";
    } else if (
      scroller?.scrollHeight - scroller?.scrollTop - scroller?.clientHeight ===
      0
    ) {
      window.location.hash = `#${
        tableOfContentList[tableOfContentList.length - 1].id
      }`;
    }
    tableOfContentList.forEach((tableItem) => {
      const element = document.getElementById(tableItem.id);
      if (!element) return;
      if (
        element.getBoundingClientRect().top < 141 &&
        element.getBoundingClientRect().top > 89 &&
        !preventHashChange
      ) {
        window.location.hash = `#${tableItem.id}`;
      }
    });
  };

  useEffect(() => {
    const scroller = document.getElementById(
      "privacypolicypage_parentContainer"
    );
    scroller?.addEventListener("scroll", handleScroll);
    return () => scroller?.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setPreventHashChange(true);
    setHash(window.location.hash);
    setPreventHashChange(false);
  }, [typeof window !== "undefined" && window.location.hash]);

  return (
    <Wrapper>
      <div
        className="privacypolicypage_parentContainer"
        id="privacypolicypage_parentContainer"
      >
        <div className="flex gap-28">
          <div className="w-7/12 mt-32">
            <h4 className="privacypolicypage_title white text-6xl m-0 font-medium">
              Privacy Policy
            </h4>
            <p className="text-lg offGray mt-12 italic">
              Updated on: Aug 15, 2022
            </p>
            <p className="text-xl offGray mt-12">
              Nurdsoft (“us”, “we”, or “our”) operates the
              <a
                className="primary100 mx-2 underline"
                href="https://www.nurdsoft.co/"
                target="_blank"
              >
                https://www.nurdsoft.co/
              </a>
              website (hereinafter referred to as the “Service”). This page
              informs you of our policies regarding the collection, use, and
              disclosure of personal data when you use our Service and the
              choices you have associated with that data. The Privacy Policy for
              nurdsoft has been created with the help of Terms Feed. We use your
              data to provide and improve the Service. By using the Service, you
              agree to the collection and use of information in accordance with
              this policy. Unless otherwise defined in this Privacy Policy, the
              terms used in this Privacy Policy have the same meanings as in our
              Terms and Conditions, accessible from
              <a
                className="primary100 mx-2 underline"
                href="https://www.nurdsoft.co/"
                target="_blank"
              >
                https://www.nurdsoft.co/
              </a>
              .
            </p>
            {policyDataPoints.map(
              (policy: {
                title: string;
                identifier: string;
                description: string | JSX.Element;
              }) => {
                return (
                  <React.Fragment key={policy.identifier}>
                    <h4
                      id={policy.identifier}
                      className="privacypolicypage_title white mt-12 text-5xl m-0 font-medium"
                    >
                      {policy.title}
                    </h4>
                    <p className="text-xl offGray mt-12 font-normal">
                      {policy.description}
                    </p>
                  </React.Fragment>
                );
              }
            )}
            <div className="privacypolicypage_dataCollectionType mt-20">
              <h4
                id="privacypolicy_dataCollectionTitle"
                className="privacypolicypage_dataCollectionTitle white text-6xl m-0 font-medium"
              >
                Types of Data Collected
              </h4>
              <h4
                id="privacypolicy_dataCollectionTitle_personaldata"
                className="privacypolicypage_title white mt-12 text-5xl m-0 font-medium"
              >
                Personal Data
              </h4>
              <p className="text-xl offGray mt-12 font-normal">
                While using our Service, we may ask you to provide us with
                certain personally identifiable information that can be used to
                contact or identify you (“Personal Data”). Personally,
                identifiable information may include, but is not limited to:
              </p>
              <ul className="mt-12">
                <li className="text-xl offGray mt-2 font-normal">
                  &#8226; <span className="italic ml-2"> Email Address</span>
                </li>
                <li className="text-xl offGray mt-2 font-normal">
                  &#8226;
                  <span className="italic ml-2">First name and last name</span>
                </li>
                <li className="text-xl offGray mt-2 font-normal">
                  &#8226; <span className="italic ml-2">Phone number</span>
                </li>
              </ul>
            </div>

            {/* Cookies */}

            <div className="privacypolicypage_cookiesDataUsage mt-20">
              <h4
                id="privacypolicy_cookiesDataUsageTitle"
                className="privacypolicypage_cookiesDataUsageTitle white leading-normal text-6xl m-0 font-medium"
              >
                Cookies and Usage Data
              </h4>
              <h4
                id="privacypolicy_cookiesDataUsageTitle_usagedata"
                className="privacypolicypage_title white mt-16 text-5xl m-0 font-medium"
              >
                Usage Data
              </h4>
              <p className="text-xl offGray mt-12 font-normal">
                We may also collect information on how the Service is accessed
                and used (“Usage Data”). This Usage Data may include information
                such as your computer’s Internet Protocol address (e.g. IP
                address), browser type, browser version, the pages of our
                Service that you visit, the time and date of your visit, the
                time spent on those pages, unique device identifiers and other
                diagnostic data.
              </p>
              <h4
                id="privacypolicy_cookiesDataUsageTitle_tracking_cookies_data"
                className="privacypolicypage_title white mt-12 text-5xl m-0 font-medium"
              >
                Tracking & Cookies Data
              </h4>
              <p className="text-xl offGray mt-12 font-normal">
                We use cookies and similar tracking technologies to track the
                activity on our Service and we hold certain information.
              </p>
              <p className="text-xl offGray mt-4 font-normal">
                Cookies are files with a small amount of data which may include
                an anonymous unique identifier. Cookies are sent to your browser
                from a website and stored on your device. Other tracking
                technologies are also used such as beacons, tags, and scripts to
                collect and track information and to improve and analyze our
                Service.
              </p>
              <p className="text-xl offGray mt-4 font-normal">
                You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent. However, if you do not
                accept cookies, you may not be able to use some portions of our
                Service.
              </p>
              <h4 className="white mt-8 text-3xl m-0 font-medium">
                Example of cookies we use:
              </h4>
              <ul className="mt-8">
                <li className="text-xl offGray font-normal">
                  &#8226;
                  <span className="ml-2">
                    Session Cookies. We use Session Cookies to operate our
                    Service.
                  </span>
                </li>
                <li className="text-xl offGray mt-2 font-normal">
                  &#8226;
                  <span className="ml-2">
                    Preference Cookies. We use Preference Cookies to remember
                    your preferences and various settings.
                  </span>
                </li>
                <li className="text-xl offGray mt-2 font-normal">
                  &#8226;
                  <span className="ml-2">
                    Security Cookies. We use Security Cookies for security
                    purposes.
                  </span>
                </li>
              </ul>
              <h4 className="white mt-8 text-3xl m-0 font-medium">
                Use of Data
              </h4>
              <p className="text-xl offGray mt-8 italic font-normal">
                Nurdsoft uses the collected data for various purposes:
              </p>
              <ul className="mt-8">
                {useOfDataList.map((data: string, index: number) => {
                  return (
                    <li
                      key={index}
                      className="text-xl offGray mt-2 font-normal"
                    >
                      &#8226; <span className="ml-2">{data}</span>
                    </li>
                  );
                })}
              </ul>
              <h4 className="white mt-8 text-3xl m-0 font-medium">
                Transfer of Data
              </h4>
              <p className="text-xl offGray mt-8 font-normal">
                Your information, including Personal Data, may be transferred to
                – and maintained on – computers located outside of your state,
                province, country or other governmental jurisdiction where the
                data protection laws may differ than those from your
                jurisdiction.
              </p>
              <p className="text-xl offGray mt-8 font-normal">
                If you are located outside the United States and choose to
                provide information to us, please note that we transfer the
                data, including Personal Data, to the United States and process
                it there.
              </p>
              <p className="text-xl offGray mt-8 font-normal">
                Your consent to this Privacy Policy followed by your submission
                of such information represents your agreement to that transfer.
              </p>
              <p className="text-xl offGray mt-8 font-normal">
                Nurdsoft will take all steps reasonably necessary to ensure that
                your data is treated securely and in accordance with this
                Privacy Policy and no transfer of your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of your data and other
                personal information.
              </p>
            </div>

            {/* disclosure of data */}

            <div
              id="privacypolicy_disclosureOfData"
              className="privacypolicypage_disclosureOfData mt-20"
            >
              <h4
                id="privacypolicy_disclosureOfDataTitle"
                className="privacypolicypage_disclosureOfDataTitle white leading-normal text-6xl m-0 font-medium"
              >
                Disclosure Of Data
              </h4>
              <h4 className="privacypolicypage_title white mt-16 text-5xl m-0 font-medium">
                Legal Requirements
              </h4>
              <p className="text-xl offGray mt-8 italic font-normal">
                Nurdsoft may disclose your Personal Data in the good faith
                belief that such action is necessary to:
              </p>
              <ul className="mt-8">
                {legalRequirementsList.map((data: string, index: number) => {
                  return (
                    <li
                      key={index}
                      className="text-xl offGray mt-2 font-normal"
                    >
                      &#8226; <span className="ml-2">{data}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* security of data */}

            <div
              id="privacypolicy_securityOfData"
              className="privacypolicypage_securityOfData mt-20"
            >
              <h4
                id="privacypolicy_securityOfDataTitle"
                className="privacypolicypage_securityOfDataTitle white leading-normal text-6xl m-0 font-medium"
              >
                Security Of Data
              </h4>
              <p className="text-xl offGray mt-8 font-normal">
                The security of your data is important to us but remember that
                no method of transmission over the Internet or method of
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your Personal Data, we
                cannot guarantee its absolute security.
              </p>
              <h4 className="privacypolicypage_title white mt-16 text-5xl m-0 font-medium">
                Service Providers
              </h4>
              <p className="text-xl offGray mt-8 font-normal">
                We may employ third-party companies and individuals to
                facilitate our Service (“Service Providers”), to provide the
                Service on our behalf, to perform Service-related services, or
                to assist us in analyzing how our Service is used.
              </p>
              <p className="text-xl offGray mt-8 font-normal">
                These third parties have access to your Personal Data only to
                perform these tasks on our behalf and are obligated not to
                disclose or use it for any other purpose.
              </p>
              <h4 className="privacypolicypage_title white mt-16 text-5xl m-0 font-medium">
                Links to Other Sites
              </h4>
              <p className="text-xl offGray mt-8 italic font-normal">
                Our Service may contain links to other sites that are not
                operated by us. If you click a third-party link, you will be
                directed to that third party’s site. We strongly advise you to
                review the Privacy Policy of every site you visit.
              </p>
              <p className="text-xl offGray mt-8 italic font-normal">
                We have no control over and assume no responsibility for the
                content, privacy policies, or practices of any third-party sites
                or services.
              </p>
              <h4 className="privacypolicypage_title white mt-16 text-5xl m-0 font-medium">
                Children's Privacy
              </h4>
              <p className="text-xl offGray mt-8 italic font-normal">
                Our Service does not address anyone under the age of 18
                (“Children”).
              </p>
              <p className="text-xl offGray mt-8 italic font-normal">
                We do not knowingly collect personally identifiable information
                from anyone under the age of 18. If you are a parent or guardian
                and you are aware that your Child has provided us with Personal
                Data, please contact us. If we become aware that we have
                collected Personal Data from children without verification of
                parental consent, we take steps to remove that information from
                our servers.
              </p>
              <h4 className="white mt-16 text-5xl m-0 font-medium">
                Changes to This Privacy Policy
              </h4>
              <p className="text-xl offGray mt-8 italic font-normal">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page. We will let you know via email and/or a prominent
                notice on our Service, prior to the change becoming effective
                and update the “effective date” at the top of this Privacy
                Policy.
              </p>
              <p className="text-xl offGray mt-8 italic font-normal">
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
            </div>

            {/* contact us */}
            <div
              id="privacypolicy_contactUs"
              className="privacypolicypage_contactUs mt-20"
            >
              <h4 className="privacypolicypage_contactUsTitle white leading-normal text-6xl m-0 font-medium">
                Contact Us
              </h4>
              <p className="text-xl offGray mt-8">
                If you have any questions about this Privacy Policy, please
                contact us:
                <a
                  className="primary100 ml-2 underline"
                  href="mailto:hello@nurdsoft.co"
                  target="_blank"
                >
                  hello@nurdsoft.co
                </a>
              </p>
              <p className="text-xl offGray mt-8">
                Privacy Policy of
                <a
                  className="primary100 ml-2 underline"
                  href="https://www.nurdsoft.co/"
                  target="_blank"
                >
                  https://www.nurdsoft.co/
                </a>
              </p>
            </div>

            {/* footer */}
          </div>
          <div className="privacypolicypage_tableOfContents p-8 mt-32">
            <h4 className="white leading-normal text-lg m-0 font-medium">
              Table of Content
            </h4>
            <ul className="mt-4">
              {tableOfContentList.map((data: { label: string; id: string }) => {
                return (
                  <li
                    key={data.id}
                    className={`text-lg ${
                      hash.split("#")[1] === data.id ? "primary100" : "offGray"
                    } mt-2 font-normal cursor-pointer`}
                  >
                    <Link
                      to={`/privacy-policy#${data.id}`}
                      onClick={() => {
                        setPreventHashChange(true);
                      }}
                    >
                      &#8226; <span className="ml-4">{data.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-24">
          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};

export default PrivacyPolicyPage;
