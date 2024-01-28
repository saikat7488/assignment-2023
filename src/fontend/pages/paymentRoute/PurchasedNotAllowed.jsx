import React from "react";
import style from './PurchasedNotAllowed.module.css';

export default function PurchasedNotAllowed({warningMessage}) {
  return (
    <div className={style.PurchasedNotAllowed}>
      <div className={style.shortText}>You Can not purchase this course right now.</div>
      <div className={style.policyText}>Read Your Warning Message to Better Understand our policy</div>
      <div className={style.warningText}>{warningMessage ?? warningMessage}</div>
    </div>
  );
}
