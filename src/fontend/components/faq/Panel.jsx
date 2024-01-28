import React from "react";
import style from "./Panel.module.css";

const Panel = ({ title, panelId, isOpen, togglePanel, children }) => {
  return (
    <div className={`${style.panelBox}`}>
      <h3
        className={`${style.panelHeadTitle}`}
        onClick={() => togglePanel(panelId)}
      >
        <span className={`${style.textTitle}`}>{title}</span>
        <span className={`${style.plusTitle}`}>{isOpen ? "-" : "+"}</span>
      </h3>
      <div
        className={`${style.panelBoxBody} ${isOpen ? style.active : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Panel;
