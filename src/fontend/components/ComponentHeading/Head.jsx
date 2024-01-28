import React from "react";
import styles from "./Head.module.css";

export default function Head({ title, textOne, textTwo }) {
  return (
    <>
      <div className={styles.textContent}>
        <h2>{title}</h2>
        <p>{textOne}</p>
        <p>{textTwo}</p>
        <div className={styles.animation}>
          <div className={styles.circle_1}>
            <div className={styles.circle_2}></div>
          </div>
        </div>
      </div>
    </>
  );
}
