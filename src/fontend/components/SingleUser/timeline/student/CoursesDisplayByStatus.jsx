import React from "react";
import style from "./CoursesDisplayByStatus.module.css";

import CourseCard from "./CourseCard";
import CourseCardLoader from "./CourseCardLoader";

const CoursesDisplayByStatus = ({ todos, isLoading, courseByStatus }) => {
  return (
    <div className={style.courseCardContainer}>
      {isLoading ? (
        <CourseCardLoader />
      ) : (
        todos &&
        [...todos].reverse().map((todo, index) => {
          return (
            <CourseCard
              key={index}
              data={todo}
              courseByStatus={courseByStatus}
            />
          );
        })
      )}
    </div>
  );
};

export default CoursesDisplayByStatus;
