import React from "react";
import styles from "./process.module.css";
import Head from "../ComponentHeading/Head";

export default function Process({ data }) {
  return (
    <>
      <div className={styles.customContainer}>
        <Head
          title="Development Process"
          textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
          textTwo="Lorem ipsum dolor sit amet consectetur."
        />
        <div className={styles.processContainer}>
          {data &&
            data.map((item, index) => (
              <div key={Math.random()} className={styles.process}>
                <div className={styles.number}>{item.id}</div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.tagLists}>
                  {item.tags.map((subItem, index) => (
                    <div key={Math.random()} className={styles.tagList}>
                      <i className="fa fa-check" aria-hidden="true"></i>
                      {subItem}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
