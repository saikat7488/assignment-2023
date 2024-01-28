import React from "react";
import style from "./Expertise.module.css";

export default function Expertise({ data }) {
  return (
    <>
      <div className={style.expertiseContainer}>
        <div>{data}</div>
      </div>
    </>
  );
}
