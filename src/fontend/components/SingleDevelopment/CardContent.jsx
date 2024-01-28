import React, { memo } from "react";
import style from "./SingleDevelopment.module.css";
import { v4 as uuid } from "uuid";

const CardContent = ({ title, data }) => {
  return (
    <div className={style.cardContent}>
      <div className={style.systemTitle}>{title}</div>
      <ul>
        {data &&
          data.map((item, index) => {
            return <li key={uuid()}>{item}</li>;
          })}
      </ul>
    </div>
  );
};

export default memo(CardContent);
