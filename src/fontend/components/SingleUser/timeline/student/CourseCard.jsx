import React from "react";
import style from "./CourseCard.module.css";
import { useNavigate } from "react-router-dom";

function CourseCard({ data, courseByStatus }) {
  const profileNavigate = useNavigate();

  return (
    <>
      <div className={style.courseCard}>
        <div className={style.courseStatus}>
          {data &&
            courseByStatus &&
            courseByStatus.find((course) => course.status === data?.status)
              .title}
        </div>

        <div className={style.courseTitle}>{data?.courseDetails?.title}</div>

        {/* COURSE SECTION 1*/}
        <div className={style.courseSection}>
          <div className={style.courseInfo}>Course Information</div>
          {/* COURSE SUB SECTION 1*/}
          <div className={style.courseContent}>
            <div className={`${style.classContentItem} ${style.price}`}>
              Price | {data?.courseDetails?.price}
            </div>
            <div className={`${style.classContentItem} ${style.totalClass}`}>
              Total Classes |
              {data?.courseDetails?.lessonDetails?.totalLectures}
            </div>
            <div className={`${style.classContentItem} ${style.classDuration}`}>
              Class Duration |
              {data?.courseDetails?.lessonDetails?.classDuration}
            </div>
            <div
              className={`${style.classContentItem} ${style.courseDuration}`}
            >
              Course Duration | {data?.courseDetails?.courseDuration}
            </div>
          </div>

          {/* COURSE SUB SECTION 2*/}
          <div className={style.studentWithCourseTime}>
            <div className={style.coursePurchasedDate}>
              Enroll Date | {data?.purchase_date}
            </div>
            <div className={style.startDate}>Semister | {data?.semester}</div>
            <div className={style.endDate}> Class Ended | N/A</div>
          </div>
        </div>

        {/* TEACHER SECTION */}
        <div className={style.teacherSection}>
          <div className={style.teacherInfo}>Teacher Information</div>
          <div className={style.courseInstructorDetails}>
            <div
              className={style.courseInstructorImage}
              onClick={() =>
                data?.courseInstructorDetails?.id &&
                profileNavigate(`/profile/${data.courseInstructorDetails.id}`)
              }
            >
              <img
                src={require(`../../../../../assets/images/users/${data?.courseInstructorDetails?.image}.jpg`)}
                alt=""
              />
            </div>
            <div className={style.courseInstructorName}>
              {data?.courseInstructorDetails?.fullName}
            </div>
          </div>
        </div>

        {/* STUDENT SECTION */}
        <div className={style.studentSection}>
          <div className={style.studentInfo}>Student Information</div>
          <div className={style.examination}>
            <div className={style.result}>
              <div className={style.resultTitle}>Midterm Mark</div>
              <div className={style.resultData}>
                {data?.status === "completed"
                  ? data?.result?.midterm + " out of 20"
                  : "N/A"}
              </div>
            </div>
            <div className={style.result}>
              <div className={style.resultTitle}>Sessional Mark</div>
              <div className={style.resultData}>
                {data?.status === "completed"
                  ? data?.result?.sessional + " out of 30"
                  : "N/A"}
              </div>
            </div>
            <div className={style.result}>
              <div className={style.resultTitle}>Final Exam</div>
              <div className={style.resultData}>
                {data?.status === "completed"
                  ? data?.result?.final + " out of 50"
                  : "N/A"}
              </div>
            </div>
          </div>
          <div className={style.footer}>
            <div className={style.completeResult}>
              {data?.status === "completed"
                ? "CGPA " + data?.result?.cgpa + " out of 4.00"
                : "N/A"}
            </div>
            <div className={style.resultStatus}>
              {data?.status === "completed" ? "Excellent" : "N/A"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
