import React from "react";
import ErrorRoute from "../errorRouteManagement/ErrorRoute";

const TimeoutErrors = () => {
  return (
    <ErrorRoute
      header_text="Oopsie!"
      errorText="Timeout Errors"
      errorTextDescription="Result from requests taking too long to complete."
      gallery="404"
    />
  );
};

export default TimeoutErrors;
