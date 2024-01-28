import React from "react";
import ErrorRoute from "../errorRouteManagement/ErrorRoute";

const Error401 = () => {
  return (
    <ErrorRoute
      header_text="oops!"
      errorText="401 Unauthorized"
      errorTextDescription="Sorry, The request requires user authentication."
      gallery="401"
    />
  );
};

export default Error401;
