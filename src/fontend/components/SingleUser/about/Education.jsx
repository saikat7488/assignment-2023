import React from "react";
import style from "./Education.module.css";

export default function Education({ data }) {
  return (
    <>
      <div className={style.educationContainer}>
        <div className={style.educationCard}>
          <div className={style.department}>
            {data && data?.education?.department}
          </div>
          <div className={style.institution}>
            {data && data?.education?.institution}
          </div>
        </div>
      </div>
    </>
  );
}
