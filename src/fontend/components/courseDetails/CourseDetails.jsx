import React, { useEffect, useState, memo } from "react";
import courseStyle from "./courseDetails.module.css";
import Head from "../ComponentHeading/Head";
import CourseDetailsCard from "./CourseDetailsCard";

const CourseDetails = ({ contentPerPage }) => {
  const [todos, setTodos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInstructorData = async (instructorId) => {
    try {
      const response = await fetch(
        `https://dbforassignment2023.onrender.com/user_data/${instructorId}`
      );
      const instructorData = await response.json();
      return instructorData;
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const cachedData = sessionStorage.getItem("course_slider_data");
        const cachedTimestamp = sessionStorage.getItem(
          "course_slider_data_timestamp"
        );

        if (cachedData && cachedTimestamp) {
          const parsedData = JSON.parse(cachedData);
          const timestamp = parseInt(cachedTimestamp, 10);

          if (Date.now() - timestamp < 5 * 60 * 1000) {
            setTodos(parsedData);
            setIsLoading(false);
            return;
          }
        }

        const res = await fetch(
          `https://dbforassignment2023.onrender.com/course_data?dbType=course_data`
        );
        const result = await res.json();

        // Fetch instructor data for each course
        const coursesWithInstructorData = await Promise.all(
          result.map(async (course) => {
            const instructorData = await fetchInstructorData(
              course.courseInstructor
            );
            return { ...course, instructorData };
          })
        );

        setTodos(coursesWithInstructorData);
        setIsLoading(false);

        sessionStorage.setItem(
          "course_slider_data",
          JSON.stringify(coursesWithInstructorData)
        );
        sessionStorage.setItem(
          "course_slider_data_timestamp",
          Date.now().toString()
        );
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={courseStyle.customContainer}>
        <div className={courseStyle.customLayer}>
          <Head
            title="Online Courses"
            textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            textTwo="Lorem ipsum dolor sit amet consectetur."
          />
          <CourseDetailsCard
            isLoading={isLoading}
            error={error}
            contentPerPage={contentPerPage}
            todos={todos}
          />
        </div>
      </div>
    </>
  );
};

export default memo(CourseDetails);
