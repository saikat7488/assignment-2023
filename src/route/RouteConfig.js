import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// AuthContext
import { useAuth } from "../contextApi/AuthContext";
// ModelContext
import { useModelContext } from "../contextApi/ModelContext";
// NavigationContext
import { useNavigation } from "../contextApi/NavigationContext";

// FONTENDLAYOUT
import FontendLayout from "../fontend/fontendLayout/FontendLayout";
// HOME_ROUTE
import HomeContainer from "../fontend/pages/home/Home";
// HOME_ROUTE_CONTENT
import AboutContainer from "../fontend/pages/about/About";
import ConatctContainer from "../fontend/pages/contact/Contact";
import BlogContainer from "../fontend/pages/blogPage/BlogPage";
import TeamRoute from "../fontend/pages/TeamPage/TeamRoute";
import CourseRoute from "../fontend/pages/courseRoute/CourseRoute";
import DevelopmentRoute from "../fontend/pages/developmentRoute/DevelopmentRoute";
import DeveloperRoute from "../fontend/pages/developerRoute/DeveloperRoute";
import TestimonialContainer from "../fontend/pages/testimonialRoute/TestimonialRoute";
// TEMPLATE
import SingleCourseRoute from "../fontend/pages/singleCourseRoute/SingleCourseRoute";
import SingleBlogRoute from "../fontend/pages/singleBlogRoute/SingleBlogRoute";
import SingleDevelopmentRoute from "../fontend/pages/singleDevelopmentRoute/SingleDevelopmentRoute";
import ProfileRoute from "../fontend/pages/profileRoute/ProfileRoute";
import StudentRoute from "../fontend/pages/studentRoute/StudentRoute";
import ImageGallerySliderRoute from "../fontend/pages/imageGallerySliderRoute/ImageGallerySliderRoute";
import PaymentRoute from "../fontend/pages/paymentRoute/PaymentRoute";

//ERROR
import Error400 from "../fontend/pages/errorRoute/Error400";
import Error401 from "../fontend/pages/errorRoute/Error401";
import Error403 from "../fontend/pages/errorRoute/Error403";
import Error404 from "../fontend/pages/errorRoute/Error404";
import Error500 from "../fontend/pages/errorRoute/Error500";
import Error502 from "../fontend/pages/errorRoute/Error502";
import Error503 from "../fontend/pages/errorRoute/Error503";
import CrossOriginError from "../fontend/pages/errorRoute/CrossOriginError";
import NetworkErrors from "../fontend/pages/errorRoute/NetworkErrors";
import TimeoutErrors from "../fontend/pages/errorRoute/TimeoutErrors";

// Model
// Login
// Registration
// ForgetPassword
import Model from "../fontend/Model/Model";
import Login from "../fontend/components/loginRegistrationRecovery/login/Login";
import Registration from "../fontend/components/loginRegistrationRecovery/registation/Registation";
import ForgetPassword from "../fontend/components/loginRegistrationRecovery/forgetPassword/ForgetPassword";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  const { prevPath } = useNavigation();
  const { setModelOn } = useModelContext();

  useEffect(() => {
    if (!isAuthenticated) {
      setModelOn(true);
    }
  }, [isAuthenticated, setModelOn]);

  return isAuthenticated ? element : <Navigate to={prevPath || "/"} replace />;
};

const RouteConfig = () => {
  // Model Context
  const { modelOn, setModelOn } = useModelContext();
  // default
  const [selectedSection, setSelectedSection] = useState(0);
  const handleSelectedSection = (number) => {
    // 0 : Login, 1 : Registration, 2 : ForgetPassword
    setSelectedSection(number);
  };

  // Handle LoginRegisterForgetPassword
  const ShowSelectedSection = () => {
    if (selectedSection === 0) {
      return <Login handleSelectedSection={handleSelectedSection} />;
    } else if (selectedSection === 1) {
      return <Registration handleSelectedSection={handleSelectedSection} />;
    } else {
      return <ForgetPassword handleSelectedSection={handleSelectedSection} />;
    }
  };

  // Function to handle errors
  const handleError = (error) => {
    if (error.status === 404) {
      return <Navigate to="/404" />;
    } else if (error.status === 401) {
      // Unauthorized
      return <Navigate to="/401" />;
    } else if (error.status === 403) {
      // Forbidden
      return <Navigate to="/403" />;
    } else if (error.status === 500) {
      // Internal Server Error
      return <Navigate to="/500" />;
    } else if (error.name === "CrossOriginError") {
      // Handle CrossOriginError
      return <Navigate to="/cross-origin-error" />;
    } else if (error.name === "NetworkError") {
      // Handle NetworkError
      return <Navigate to="/network-error" />;
    } else if (error.name === "TimeoutError") {
      // Handle TimeoutError
      return <Navigate to="/timeout-error" />;
    } else if (error.status === 503) {
      // Service Unavailable
      return <Navigate to="/503" />;
    } else if (error.status === 502) {
      // Bad Gateway
      return <Navigate to="/502" />;
    } else if (error.status === 400) {
      // Bad Request
      return <Navigate to="/400" />;
    } else {
      // Generic error fallback
      return <Navigate to="/error" />;
    }
  };

  // const { isAuthenticated } = useAuth();
  const { updatePrevPath } = useNavigation();
  const { pathname } = useLocation();

  useEffect(() => {
    updatePrevPath(pathname);
  }, [pathname, updatePrevPath]);

  return (
    <>
      <Routes onError={handleError}>
        <Route path="/" element={<FontendLayout />}>
          <Route index element={<HomeContainer />} />

          <Route path="course/:id/payment" element={<PaymentRoute />} />
          <Route path="course/:id" element={<SingleCourseRoute />} />
          <Route path="course" element={<CourseRoute />} />

          <Route path="development/:id" element={<SingleDevelopmentRoute />} />
          <Route path="development" element={<DevelopmentRoute />} />

          <Route path="blog/:id" element={<SingleBlogRoute />} />
          <Route path="blog" element={<BlogContainer />} />

          <Route path="team" element={<TeamRoute />} />
          <Route path="developer_team" element={<DeveloperRoute />} />

          <Route
            path="profile/:id"
            element={<ProtectedRoute element={<ProfileRoute />} />}
          />

          <Route path="student" element={<StudentRoute />} />
          <Route path="contact" element={<ConatctContainer />} />
          <Route path="about" element={<AboutContainer />} />
          <Route path="testimonial" element={<TestimonialContainer />} />
          <Route path="image-gallery" element={<ImageGallerySliderRoute />} />

          {/* Error */}
          <Route path="/400" element={<Error400 />} />
          <Route path="/401" element={<Error401 />} />
          <Route path="/403" element={<Error403 />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="/500" element={<Error500 />} />
          <Route path="/502" element={<Error502 />} />
          <Route path="/503" element={<Error503 />} />
          <Route path="/cross-origin-error" element={<CrossOriginError />} />
          <Route path="/network-error" element={<NetworkErrors />} />
          <Route path="/timeout-error" element={<TimeoutErrors />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>

      {modelOn && (
        <Model
          modelOn={modelOn}
          setModelOn={setModelOn}
          handleSelectedSection={handleSelectedSection}
        >
          <ShowSelectedSection />
        </Model>
      )}
    </>
  );
};

export default RouteConfig;
