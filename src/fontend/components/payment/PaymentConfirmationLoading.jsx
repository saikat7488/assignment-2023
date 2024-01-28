// PaymentConfirmationLoading.js
import React from "react";
import style from "./PaymentConfirmationLoading.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJetFighterUp } from "@fortawesome/free-solid-svg-icons";
import BubblesAnimation from "./BubblesAnimation";

const PaymentConfirmationLoading = () => {
  return (
    <div className={style.animationContainer}>
      <BubblesAnimation numBubbles={10} />
      <FontAwesomeIcon className={style.flight} icon={faJetFighterUp} />
    </div>
  );
};

export default PaymentConfirmationLoading;
