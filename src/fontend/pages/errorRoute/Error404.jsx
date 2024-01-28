import React from "react";
import ErrorRoute from "../errorRouteManagement/ErrorRoute";

const Error404 = () => {
  return (
    <ErrorRoute
      header_text="oops!"
      errorText="404 Not Found"
      errorTextDescription="Sorry, The requested resource could not be found on the server."
      gallery="404"
    />
  );
};

export default Error404;
