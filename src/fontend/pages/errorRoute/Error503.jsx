import React from "react";
import ErrorRoute from "../errorRouteManagement/ErrorRoute";

const Error503 = () => {
  return (
    <ErrorRoute
      header_text="oops!"
      errorText="503 Service Unavailable"
      errorTextDescription="Sorry, The server is not ready to handle the request."
      gallery="503"
    />
  );
};

export default Error503;
