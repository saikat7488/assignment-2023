import React from "react";
import style from "./SingleCourse.module.css";
import Lecture from "./Lecture";
import Instructor from "./Instructor";
import RelatedCourse from "./RelatedCourse";
import GoToNext from "../goToNext/GoToNext";
import ClassContentDiv from "./ClassContentDiv";
import CourseTopSection from "./CourseTopSection";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";

export default function SingleCourse({
  courseData,
  isLoading,
  error,
  isFetching,
}) {
  return (
    <>
      <div className={style.containerDiv}>
        <div className={style.courseDetails}>
          {/*********** COURSE TOP SECTION ***********/}
          <CourseTopSection
            titleText="COURSE INFORMATION"
            courseData={courseData}
            isLoading={isLoading}
            error={error}
            isFetching={isFetching}
          />

          <div className={style.gropuContainer}>
            {/*********** INSTRUCTOR ***********/}
            <Instructor
              courseData={courseData}
              isLoading={isLoading}
              error={error}
              isFetching={isFetching}
            />

            {/********* RELATED COURSE *********/}
            <RelatedCourse courseData={courseData} isLoading={isLoading} />
          </div>

          {/************* PRICE *************/}
          <div className={style.price}>
            {isLoading || isFetching || !courseData?.todo?.price ? (
              <>
                <CustomSkeletonLoader
                  count={1}
                  width="200px"
                  height="20px"
                  position="center"
                />
              </>
            ) : (
              <>
                <span>Price : </span> {courseData?.todo?.price}
              </>
            )}
          </div>

          {/***********CLASS DETAILS*********/}
          <div className={style.classContent}>
            <ClassContentDiv
              titleText="Number of Seats"
              dataText={
                courseData?.todo?.numberOfSets
                  ? courseData.todo.numberOfSets
                  : null
              }
              isLoading={isLoading}
              isFetching={isFetching}
            />

            <ClassContentDiv
              titleText="Course Duration"
              dataText={
                courseData?.todo?.courseDuration
                  ? courseData.todo.courseDuration
                  : null
              }
              isLoading={isLoading}
              isFetching={isFetching}
            />

            <ClassContentDiv
              titleText="Available Session"
              dataText="Spring & Fall"
            />
            <ClassContentDiv
              titleText="Class Length"
              dataText={
                courseData?.todo?.lessonDetails?.classDuration
                  ? courseData.todo.lessonDetails.classDuration
                  : null
              }
              isLoading={isLoading}
              isFetching={isFetching}
            />

            <ClassContentDiv
              titleText="Aggregate Classes"
              dataText={
                courseData?.todo?.lessonDetails?.totalLectures
                  ? courseData.todo.lessonDetails.totalLectures
                  : null
              }
              isLoading={isLoading}
              isFetching={isFetching}
            />

            <ClassContentDiv
              titleText="Aggregate Class Time"
              dataText={
                courseData?.todo?.lessonDetails?.totalClassDuration
                  ? courseData.todo.lessonDetails.totalClassDuration
                  : null
              }
              isLoading={isLoading}
              isFetching={isFetching}
            />
          </div>
          {/*********** DEADLINE*************/}
          <div className={style.enrollmentDeadline}>
            {isLoading ||
            isFetching ||
            !courseData?.todo?.enrollmentDeadline ? (
              <CustomSkeletonLoader
                count={1}
                width="200px"
                height="20px"
                position="center"
              />
            ) : (
              <>
                <span>Deadline : </span> {courseData?.todo?.enrollmentDeadline}
              </>
            )}
          </div>
          {/************ Lecture ************/}
          <Lecture />
          {/************* JOIN **************/}
          <GoToNext to="payment" />
        </div>
      </div>
    </>
  );
}
