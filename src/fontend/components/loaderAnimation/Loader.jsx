import React from "react";
import loaderStyle from './Loder.module.css'

export default function Loader() {
  return (
    <>
      <div className={loaderStyle.loader}>
        <span className={loaderStyle.loader__element}></span>
        <span className={loaderStyle.loader__element}></span>
        <span className={loaderStyle.loader__element}></span>
      </div>
    </>
  );
}
