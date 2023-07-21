import * as React from "react";
import PrivacyPolicyPage from "../privacypolicy/privacypolicypage";

const PrivacyPolicyLayout = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--black-100)",
          height: "100%",
          overflow: "scroll",
        }}
      >
        <PrivacyPolicyPage />
      </div>
    </>
  );
};

export default PrivacyPolicyLayout;
