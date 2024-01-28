import React, { useEffect, useState, useCallback } from "react";
import style from "./RelatedCourse.module.css";
import RelatedCourseCard from "./RelatedCourseCard";

export default function RelatedCourse({ courseData, isLoading }) {
  const [relatedCourseTodoData, setRelatedCourseTodoData] = useState();
  const [islocalLoading, setIsLocalLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const relatedCoursesData = await Promise.all(
        (courseData?.todo?.relatedCourses || [])
          .slice(0, 3)
          .map(async (relatedCourseId) => {
            try {
              const relatedCourseResponse = await fetch(
                `https://dbforassignment2023.onrender.com/course_data/${relatedCourseId}`
              );
              const relatedCourseData = await relatedCourseResponse.json();
              return relatedCourseData;
            } catch (error) {
              console.error(
                `Error fetching related course ${relatedCourseId}:`,
                error
              );
              return null;
            }
          })
      );

      setRelatedCourseTodoData(relatedCoursesData);
    } catch (error) {
      setError(error);
    }
  }, [courseData]);

  useEffect(() => {
    courseData?.todo?.relatedCourses
      ? setIsLocalLoading(false)
      : setIsLocalLoading(true);
  }, [courseData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const loadingItems = Array.from({ length: 3 }, (_, index) => (
    <RelatedCourseCard key={index} isLoading={islocalLoading} />
  ));

  return (
    <div className={style.relatedCoursesContainer}>
      {isLoading || islocalLoading || error
        ? loadingItems
        : relatedCourseTodoData &&
          relatedCourseTodoData.map((course, index) => {
            return <RelatedCourseCard key={index} todo={course} />;
          })}
    </div>
  );
}
