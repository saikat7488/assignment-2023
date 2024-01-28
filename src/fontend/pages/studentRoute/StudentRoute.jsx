import React from "react";
import style from "./StudentRoute.module.css";
import StudentTemplete from "../../components/studentsInfo/StudentTemplete";

const StudentRoute = () => {
  return (
    <>
      <div className={style.pageComtainer}>
        <StudentTemplete paginationSystem={true} contentPerPage={12} />
      </div>
    </>
  );
};

export default StudentRoute;
