import React from "react";
import style from "./CustomTestimonialLoader.module.css";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";

export default function CustomTestimonialLoader() {
  return (
    <div className={`col-md-6 ${style.customColumn}`}>
      <div className={style.main_area}>
        <div className={style.left}>
          <img
            src={require(`../../../assets/images/users/default.jpg`)}
            alt=""
          />
        </div>
        <div className={style.right}>
          <CustomSkeletonLoader count={3} width="100%" height="25px" />

          <CustomSkeletonLoader
            count={3}
            width="32%"
            height="25px"
            position="center"
            mt="20px"
          />
        </div>
      </div>
    </div>
  );
}
