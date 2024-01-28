import React from "react";
import ErrorRoute from "../errorRouteManagement/ErrorRoute";

const Error400 = () => {
  return (
    <ErrorRoute
      header_text="oops!"
      errorText="400 Bad Request"
      errorTextDescription="Sorry,The server cannot process the request due to a client error"
      gallery="400"
    />
  );
};

export default Error400;
