import React, { useEffect } from "react";
import style from "./CourseRoute.module.css";
import OurCourses from "../../components/services/OurCourses";

export default function CourseRoute() {
  useEffect(() => {
    document.title = 'WorldCoder | Course';
  }, []);
  return (
    <div className={style.pageLayout}>
      <OurCourses paginationSystem={true} contentPerPage="10" />
    </div>
  );
}
