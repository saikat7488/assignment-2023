import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./ProfileRoute.module.css";
import SingleUser from "../../components/SingleUser/SingleUser";
import { ProfileContext } from "../../../contextApi/ProfileContext";

export default function ProfileRoute() {
  const { id } = useParams();
  const [profileData, setProfileData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const dataFetching = useCallback(
    async (id) => {
      try {
        const resUserData = await fetch(
          `https://dbforassignment2023.onrender.com/user_data/${id}`
        );

        if (resUserData.ok) {
          const userData = await resUserData.json();

          // **************************************************** //
          // ********************** TEACHER ********************* //
          // **************************************************** //
          let blogDetails = [];
          if (userData.blogs) {
            const blogIds = userData.blogs;
            const blogDetailsPromises = blogIds.map(async (blogId) => {
              const resBlogData = await fetch(
                `https://dbforassignment2023.onrender.com/blog_data/${blogId}`
              );
              const blogData = await resBlogData.json();
              return blogData;
            });
            blogDetails = await Promise.all(blogDetailsPromises);
          }
          // *************************************************** //
          let trainingCoursesDetails = [];
          if (userData.courseTaken) {
            const courseIds = userData.courseTaken;
            const courseDetailsPromises = courseIds.map(async (courseId) => {
              const resCourseData = await fetch(
                `https://dbforassignment2023.onrender.com/course_data/${courseId}`
              );
              const courseData = await resCourseData.json();
              return courseData;
            });
            trainingCoursesDetails = await Promise.all(courseDetailsPromises);
          }

          // **************************************************** //
          // ******************* STUDENT  A ************* //
          // **************************************************** //
          let purchasedCourseDetails = [];
          if (userData.coursesPurchased) {
            const courseDetailsPromises = userData.coursesPurchased.map(
              async (courseItem) => {
                const courseDetailsResponse = await fetch(
                  `https://dbforassignment2023.onrender.com/course_data/${courseItem.courseId}`
                );
                const courseDetails = await courseDetailsResponse.json();

                // Fetch course instructor details
                const courseInstructorDetailsResponse = await fetch(
                  `https://dbforassignment2023.onrender.com/user_data/${courseDetails.courseInstructor}`
                );
                const courseInstructorDetails =
                  await courseInstructorDetailsResponse.json();

                return {
                  ...courseItem,
                  courseDetails,
                  courseInstructorDetails,
                };
              }
            );

            purchasedCourseDetails = await Promise.all(courseDetailsPromises);
          }

          // **************************************************** //
          // ***************** STUDENT  TYPE B ****************** //
          // **************************************************** //

          setProfileData({
            userData,
            blogDetails,
            trainingCoursesDetails,
            purchasedCourseDetails,
          });
          setIsLoading(false);
        } else if (resUserData.status === 404) {
          // Handle not found case
          setError("User not found");
          setIsLoading(false);
          navigate("/404"); // Use navigate instead of history.push
        } else {
          // Handle other errors
          setError(`Error: ${resUserData.status}`);
          setIsLoading(false);
        }
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    },
    [navigate]
  ); // Add any other dependencies if needed

  useEffect(() => {
    dataFetching(id);
  }, [id, dataFetching]); // Add dataFetching to the dependency array

  return (
    <>
      <div className={style.pageContainer}>
        <ProfileContext.Provider value={{ isLoading, profileData, error }}>
          <SingleUser />
        </ProfileContext.Provider>
      </div>
    </>
  );
}
