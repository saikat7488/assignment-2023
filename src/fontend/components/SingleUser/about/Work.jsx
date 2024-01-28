import React, { useState, useEffect } from "react";
import style from "./Work.module.css";

// Import
import CourseTopSection from "../../SingleCourse/CourseTopSection";

export default function Work({ data }) {
  const { role, localJobPosition, joinDate, courseTaken } = data;

  const [courseData, setCourseData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (id) => {
    try {
      const response = await fetch(
        `https://dbforassignment2023.onrender.com/course_data/${id}`
      );
      const courseDataById = await response.json();

      const authorResponse = await fetch(
        `https://dbforassignment2023.onrender.com/user_data/${courseDataById.courseInstructor}`
      );
      const instructorData = await authorResponse.json();

      // Related Courses
      const relatedCoursesData = await Promise.all(
        courseDataById.relatedCourses.map(async (relatedCourseId) => {
          const relatedCourseResponse = await fetch(
            `https://dbforassignment2023.onrender.com/course_data/${relatedCourseId}`
          );
          return relatedCourseResponse.json();
        })
      );

      setCourseData({
        todo: courseDataById,
        instructorTodo: instructorData,
        relatedCoursesTodos: relatedCoursesData,
        dataFrom: "API",
      });
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      fetchData(courseTaken);
    };

    getData();
  }, [courseTaken]);

  return (
    <>
      <div className={style.workContainer}>
        <div className={style.teaching}>
          <div className={style.workDetails}>
            <div className={style.companyName}>
              <span className={style.atText}>at</span> WorldCoderMaster
            </div>
            <div className={style.workTitle}>Teacher</div>
            <div className={style.position}>
              {data && role === "teacher" && localJobPosition}
            </div>
            <div className={style.duration}>
              <span>From : {data && role === "teacher" && joinDate}</span>
              <span>To : Present</span>
            </div>
          </div>
          <CourseTopSection
            titleText="COURSE INFORMATION"
            isLoading={isLoading}
            error={error}
            courseData={courseData}
          />
        </div>

        <div className={style.development}>
          <div className={style.workDetails}>
            <div className={style.companyName}>
              <span className={style.atText}>at</span> WorldCoderMaster
            </div>
            <div className={style.workTitle}>Developer</div>
            <div className={style.position}>Sinior Deveoper</div>
            <div className={style.duration}>
              <span>From : {data && role === "teacher" && joinDate}</span>
              <span>To : Present</span>
            </div>
          </div>
          <CourseTopSection
            titleText="DEVELOPMENT INFORMATION"
            isLoading={isLoading}
            error={error}
            courseData={courseData}
          />
        </div>
      </div>
    </>
  );
}
