import React from "react";
import RouteConfig from "./route/RouteConfig";

import { HashRouter } from "react-router-dom";
import { AuthProvider } from "./contextApi/AuthContext";
import { ModelProvider } from "./contextApi/ModelContext";
import { NavigationProvider } from "./contextApi/NavigationContext";

export default function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <ModelProvider>
            <NavigationProvider>
              <RouteConfig />
            </NavigationProvider>
          </ModelProvider>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

// Database

// import React from "react";
// import UserBlogCourseDevelopmentTestimonial from "./generateJSON/UserBlogCourseDevelopmentTestimonial";

// const App = () => {
//   return <UserBlogCourseDevelopmentTestimonial />;
// };

// export default App;
