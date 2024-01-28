import React from "react";
import style from "./StudentCardLoader.module.css";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";

const StudentCardLoader = () => {
  return (
    <div className={`col-md-4 col-sm-12 ${style.cardBox}`}>
      <div className={style.cardContent}>
        <div className={style.cardImage}>
          <CustomSkeletonLoader count={1} width="4rem" height="4rem" ml="20px"/>
        </div>
        <div className={style.studentName}>
          <CustomSkeletonLoader count={1} width="100%" mt="5px" height="30px" position="center"/>
        </div>
        <div className={style.studentEmail}>
          <CustomSkeletonLoader count={1} width="100%" mt="5px" height="30px" position="center"/>
        </div>
        <div className={style.studentUniversity}>
          <CustomSkeletonLoader count={1} width="100%" mt="5px" height="30px" position="center"/>
        </div>
      </div>
    </div>
  );
};

export default StudentCardLoader;
