import React from "react";
import ErrorRoute from "../errorRouteManagement/ErrorRoute";

const NetworkErrors = () => {
  return (
    <ErrorRoute
      header_text="oops!"
      errorText="NetworkErrors"
      errorTextDescription="Connection issues, DNS resolution problems, or other network-related problems."
      gallery="404"
    />
  );
};

export default NetworkErrors;
