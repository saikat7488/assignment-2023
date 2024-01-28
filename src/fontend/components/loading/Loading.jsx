import React from "react";
import loadingStyle from "./Loading.module.css";

export default function Loading() {
  return (
    <>
      <div className={loadingStyle.loadingContainer}>
        <svg
          className={loadingStyle.svg_spinner}
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <circle cx="24" cy="4" r="4" fill="#000000" />
          <circle cx="12.19" cy="7.86" r="3.7" fill="#0a0a0a" />
          <circle cx="5.02" cy="17.68" r="3.4" fill="#080808" />
          <circle cx="5.02" cy="30.32" r="3.1" fill="#1a1a1a" />
          <circle cx="12.19" cy="40.14" r="2.8" fill="#000000" />
          <circle cx="24" cy="44" r="2.5" fill="#080606" />
          <circle cx="35.81" cy="40.14" r="2.2" fill="#000000" />
          <circle cx="42.98" cy="30.32" r="1.9" fill="#080707" />
          <circle cx="42.98" cy="17.68" r="1.6" fill="#070404" />
          <circle cx="35.81" cy="7.86" r="1.3" fill="#000000" />
        </svg>
      </div>
    </>
  );
}
