import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import SingleCourse from "../../components/SingleCourse/SingleCourse";

export default function SingleCourseRoute() {
  const location = useLocation();
  const { id } = useParams();
  const [courseData, setCourseData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (id) => {
    try {
      setIsFetching(true);
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
      setIsFetching(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (!location.state) {
        fetchData(id);
      } else {
        setCourseData({
          todo: location.state.todo,
          instructorTodo: location.state.instructorTodo,
          dataFrom: "LOCATION.STATE",
        });
        setIsFetching(false);
      }
    };

    getData();
  }, [id, location.state]);

  return (
    <SingleCourse
        courseData={courseData}
        error={error}
        isLoading={isLoading}
        isFetching={isFetching}
      />
  );
}
