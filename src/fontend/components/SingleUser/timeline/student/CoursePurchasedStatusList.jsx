import React, { useMemo } from "react";
import style from "./CoursePurchasedStatusList.module.css";
import { v4 as uuidv4 } from "uuid";

function CoursePurchasedStatusList({ courseByStatus, selectedStatus, handleStatusChange }) {
  const memoizedList = useMemo(() => {
    return courseByStatus.map((item) => (
      <div
        key={uuidv4()}
        className={`${style.courseStatusListCard} ${item.status === selectedStatus ? style.active : ""}`}
        onClick={() => handleStatusChange(item.status)}
      >
        <span>{item.title}</span>
      </div>
    ));
  }, [courseByStatus, selectedStatus, handleStatusChange]);

  return <>{memoizedList}</>;
}

export default CoursePurchasedStatusList;
