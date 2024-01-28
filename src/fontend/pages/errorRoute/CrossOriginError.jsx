import React from "react";
import ErrorRoute from "../errorRouteManagement/ErrorRoute";

const CrossOriginError = () => {
  return (
    <ErrorRoute
      header_text="Apologies!"
      errorText="Cross-Origin Resource Sharing (CORS) Issues"
      errorTextDescription="Occurs when a web application on one domain requests a resource from a different domain, and the server does not include the necessary CORS headers."
      gallery="404"
    />
  );
};

export default CrossOriginError;
