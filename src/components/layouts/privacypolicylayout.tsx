import * as React from "react";

import Background from "../common/background";
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
        {React.useMemo(() => (<Background />), [])}
      </div>
    </>
  );
};

export default PrivacyPolicyLayout;
