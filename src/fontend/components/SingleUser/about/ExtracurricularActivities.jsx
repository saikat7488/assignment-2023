import React, { memo } from "react";
import style from "./ExtracurricularActivities.module.css";
import { v4 as uuidv4 } from "uuid";

const ExtracurricularActivities = ({ data }) => {
  const { extracurricularActivities } = data;
  const sortedActivities = extracurricularActivities.sort();

  return (
    <>
      <div className={style.extracurricularActivitiesContainer}>
        <div className={style.extracurricularActivitiesCard}>
          <div className={style.extraActivitiesStateLineDiv}>
            <div className={style.extraActivities}>Extra Activities</div>
            <div className={style.stateLineOne}></div>
            <div className={style.stateLineTwo}></div>
            <div className={style.stateLineThree}></div>
          </div>
          <ul className={style.extracurricularActivitiesItems}>
            {data &&
              sortedActivities.map((item, index) => {
                return <li key={uuidv4()}>{item}</li>;
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default memo(ExtracurricularActivities);
