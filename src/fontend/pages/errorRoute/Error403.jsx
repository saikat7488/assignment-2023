import React from "react";
import ErrorRoute from "../errorRouteManagement/ErrorRoute";

const Error403 = () => {
  return (
    <ErrorRoute
      header_text="oops!"
      errorText="403 Forbidden"
      errorTextDescription="Sorry, The server understood the request, but it refuses to authorize it."
      gallery="403"
    />
  );
};

export default Error403;
