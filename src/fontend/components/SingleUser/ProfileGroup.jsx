import React from "react";
import style from "./ProfileGroup.module.css";

export default function ProfileGroup({ activeTimeline, activeAbout, active }) {
  return (
    <>
      <div className={style.profileGroup}>
        <div
          className={`${style.about} ${
            active === "timeline" ? `${style.active}` : ""
          }
          `}
          onClick={activeTimeline}
        >
          Timeline
        </div>
        <div
          className={`${style.about} ${
            active === "about" ? `${style.active}` : ""
          }`}
          onClick={activeAbout}
        >
          ABOUT
        </div>
      </div>
    </>
  );
}
