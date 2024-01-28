import React, { memo } from "react";
import style from "./Instructor.module.css";
import { useNavigate } from "react-router-dom";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";

const Instructor = ({ courseData, isLoading, error, isFetching }) => {
  const navigate = useNavigate();
  const handleInstructorProfile = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className={style.courseInstructor}>
      <div className={style.courseInstructorConatiner}>
        <div className={style.profile}>
          {isLoading ||
          isFetching ||
          error ||
          !courseData?.instructorTodo?.image ? (
            <CustomSkeletonLoader count={1} position="center" width="80px" height="80px" circle />
          ) : (
            <div
              className={style.profileImage}
              onClick={() =>
                handleInstructorProfile(courseData?.instructorTodo?.id)
              }
            >
              <img
                src={require(`../../../assets/images/users/${
                  courseData?.instructorTodo?.image + ".jpg" || "default.jpg"
                }`)}
                alt=""
              />
            </div>
          )}

          <div className={style.profileInfo}>
            {isLoading ||
            isFetching ||
            !courseData?.instructorTodo?.fullName ? (
              <CustomSkeletonLoader count={1} mt="10px" width="100%" height="30px" />
            ) : (
              <div
                className={style.profileName}
                onClick={() =>
                  handleInstructorProfile(courseData?.instructorTodo?.id)
                }
              >
                {courseData.instructorTodo?.fullName}
              </div>
            )}

            {isLoading ||
            isFetching ||
            !courseData?.instructorTodo?.education?.department ? (
              <CustomSkeletonLoader count={1} width="100%" height="30px" />
            ) : (
              <div className={style.department}>
                {courseData.instructorTodo?.education?.department}
              </div>
            )}

            {isLoading ||
            isFetching ||
            !courseData?.instructorTodo?.education?.institution ? (
              <CustomSkeletonLoader count={1} width="100%" height="30px" />
            ) : (
              <div className={style.university}>
                {courseData?.instructorTodo?.education?.institution}
              </div>
            )}

            <div className={style.socialLinks}>
              {isLoading ||
              isFetching ||
              !courseData?.instructorTodo?.socialLinks ? (
                <>
                  <CustomSkeletonLoader count={1} width="40px" height="40px" />
                  <CustomSkeletonLoader count={1} width="40px" height="40px" />
                  <CustomSkeletonLoader count={1} width="40px" height="40px" />
                  <CustomSkeletonLoader count={1} width="40px" height="40px" />
                  <CustomSkeletonLoader count={1} width="40px" height="40px" />
                </>
              ) : (
                <>
                  <li>
                    <i className={`fab fa-facebook`}></i>
                  </li>
                  <li>
                    <i className={`fab fa-instagram`}></i>
                  </li>
                  <li>
                    <i className={`fab fa-linkedin`}></i>
                  </li>
                  <li>
                    <i className={`fab fa-github`}></i>
                  </li>
                  <li>
                    <i className="fab fa-dribbble"></i>
                  </li>
                  <li>
                    <i className={`fab fa-twitter`}></i>
                  </li>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Instructor);
