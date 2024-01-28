import React from "react";
import style from "./CustomDevelopmentLoader.module.css";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";

export default function CustomDevelopmentLoader() {
  return (
    <>
      <div className={style.singleCard}>
        <div className={style.iconManagement}>
          <CustomSkeletonLoader
            count={1}
            width="80px"
            height="80px"
            circle
            position="center"
          />
        </div>

        <CustomSkeletonLoader
          count={1}
          mt="40px"
          width="100%"
          height="30px"
          position="center"
        />

        <CustomSkeletonLoader
          count={1}
          mt="5px"
          width="100%"
          height="30px"
          position="center"
        />
        <CustomSkeletonLoader
          count={1}
          mt="5px"
          width="100%"
          height="30px"
          position="center"
        />
        <CustomSkeletonLoader
          count={1}
          mt="5px"
          width="100%"
          height="30px"
          position="center"
        />
        <CustomSkeletonLoader
          count={1}
          mt="5px"
          width="100%"
          height="30px"
          position="center"
        />

        <div className={style.readMore}>
          <CustomSkeletonLoader
            count={1}
            width="100px"
            height="30px"
            position="center"
          />
        </div>
      </div>
    </>
  );
}
