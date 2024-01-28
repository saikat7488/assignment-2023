import React from "react";
import modelStyle from "./model.module.css";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Loader from "../components/loaderAnimation/Loader";

function Model({ modelOn, setModelOn, children, handleSelectedSection }) {
  const handleClosed = () => {
    setModelOn(false);
    handleSelectedSection(0);
  };

  return createPortal(
    <div className={modelStyle.createModel}>
      <div className={modelStyle.colseModel} onClick={handleClosed}>
        <FontAwesomeIcon
          icon={faXmark}
          className={`${modelStyle.closeIcon}`}
        ></FontAwesomeIcon>
      </div>
      <div className={modelStyle.modelContainer}>
        <div className={modelStyle.displayContent}>
          <Loader />
        </div>
        <div className={modelStyle.mainContent}>{children}</div>
      </div>
    </div>,
    document.getElementById("model_popup")
  );
}

export default Model;
