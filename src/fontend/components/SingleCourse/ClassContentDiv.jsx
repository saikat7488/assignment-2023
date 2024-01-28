import React from "react";
import style from "./ClassContentDiv.module.css";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";

export default function ClassContentDiv({ titleText, dataText, isLoading }) {
  return (
    <div className={`${style.classContentDiv}`}>
      <div className={style.classContentTitle}>{titleText}</div>

      {isLoading || dataText === null ? (
        <CustomSkeletonLoader
          count={1}
          width="90px"
          height="25px"
          position="center"
        />
      ) : (
        <div className={style.classContentData}>{dataText}</div>
      )}
    </div>
  );
}
