import React from "react";
import style from "./BobbleAnimation.module.css";

export default function BobbleAnimation() {
  return (
    <div className={style.animationBody}>
      <div className={style.loader}>
        <div className={style.bubble}></div>
        <div className={style.bubble}></div>
        <div className={style.bubble}></div>
      </div>
    </div>
  );
}