import React from "react";
import goToNextStyle from "./GoToNext.module.css";
import { Link } from "react-router-dom";

export default function GoToNext({ to }) {
  const handleGoToNextClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 20,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className={goToNextStyle.linkBtn} >
        <div className={goToNextStyle.goToNext}>
          <Link to={to} className={`${goToNextStyle.goHere} ${goToNextStyle.linkBtn}`} onClick={handleGoToNextClick}>
            <span className="fas fa-arrow-right"></span>
          </Link>
        </div>
      </div>
    </>
  );
}
