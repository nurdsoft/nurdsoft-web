import * as React from "react";
import PrivacyPolicyPage from "../privacypolicy/privacypolicypage";

const PrivacyPolicyLayout = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--black-100)",
        }}
      >
        <PrivacyPolicyPage />
      </div>
    </>
  );
};

export default PrivacyPolicyLayout;
