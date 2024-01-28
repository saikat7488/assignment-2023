import React from "react";
import style from "./CourseCardLoader.module.css";


function CourseCardLoader() {
  return (
    <>
      <div className={style.courseCard}>
        <div className={style.courseStatus}>Completed</div>
        <div className={style.courseTitle}>Web Development</div>

        {/* COURSE SECTION 1*/}
        <div className={style.courseSection}>
          <div className={style.courseInfo}>Course Information</div>
          {/* COURSE SUB SECTION 1*/}
          <div className={style.courseContent}>
            <div className={`${style.classContentItem} ${style.price}`}>
              Price | $75
            </div>
            <div className={`${style.classContentItem} ${style.totalClass}`}>
              Total Classes | 72
            </div>
            <div className={`${style.classContentItem} ${style.classDuration}`}>
              Class Duration | 4 Hours
            </div>
            <div
              className={`${style.classContentItem} ${style.courseDuration}`}
            >
              Course Duration | 6 Months
            </div>
          </div>

          {/* COURSE SUB SECTION 2*/}
          <div className={style.studentWithCourseTime}>
            <div className={style.coursePurchasedDate}>
              Enroll Date | 31 Aug 2022
            </div>
            <div className={style.startDate}>Class Started | 01 Oct 2022</div>
            <div className={style.endDate}> Class Ended | 31 May 2023</div>
          </div>
        </div>

        {/* TEACHER SECTION */}
        <div className={style.teacherSection}>
          <div className={style.teacherInfo}>Teacher Information</div>
          <div className={style.courseInstructorDetails}>
            <div className={style.courseInstructorImage}>
              <img
                src={require(`../../../../../assets/images/users/default.jpg`)}
                alt=""
              />
            </div>
            <div className={style.courseInstructorName}>
              Samapti Sarker Pooja
            </div>
          </div>
        </div>

        {/* STUDENT SECTION */}
        <div className={style.studentSection}>
          <div className={style.studentInfo}>Student Information</div>
          <div className={style.examination}>
            <div className={style.result}>
              <div className={style.resultTitle}>Midterm Mark</div>
              <div className={style.resultData}>20 out of 20</div>
            </div>
            <div className={style.result}>
              <div className={style.resultTitle}>Sessional Mark</div>
              <div className={style.resultData}>30 out of 30</div>
            </div>
            <div className={style.result}>
              <div className={style.resultTitle}>Final Exam</div>
              <div className={style.resultData}>50 out of 50</div>
            </div>
          </div>
          <div className={style.footer}>
            <div className={style.completeResult}>CGPA 4.0 out of 4.00</div>
            <div className={style.resultStatus}>Excellent</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCardLoader;
