import React from "react";
import { Outlet } from "react-router-dom";
import fontendStyle from "./fontendLayout.module.css";

// Scroll to top
import ScrollToTop from "../../scrollToTop/ScrollToTop";

// Layout
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";

// Extra
import Newsletter from "../components/subscribeNewsletter/Newsletter";

export default function FontendLayout() {
  return (
    <>
      <div className={fontendStyle.fontendLayout}>
        {/* SCROLL TO TOP */}
        <ScrollToTop />

        <div className={fontendStyle.navbar}>
          <Navbar />
        </div>
        <div className={fontendStyle.body}>
          <Outlet />
        </div>
        <div className={fontendStyle.footer}>
          <Newsletter />
          <Footer />
        </div>
      </div>
    </>
  );
}
