import React from "react";
import ErrorRoute from "../errorRouteManagement/ErrorRoute";

const Error500 = () => {
  return (
    <ErrorRoute
      header_text="oops!"
      errorText="500 Internal Server Error"
      errorTextDescription="A generic error message returned when an unexpected condition was encountered on the server."
      gallery="500"
    />
  );
};

export default Error500;
