import React from "react";
import ErrorRoute from "../errorRouteManagement/ErrorRoute";

const Error502 = () => {
  return (
    <ErrorRoute
      header_text="oops!"
      errorText="502 Bad Gateway"
      errorTextDescription="The server, while acting as a gateway or proxy, received an invalid response from an upstream server."
      gallery="502"
    />
  );
};

export default Error502;
