import React, { memo } from "react";
import courseStyle from "./courseDetails.module.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCode } from "@fortawesome/free-solid-svg-icons";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const CourseDetailsCard = ({ isLoading, error, contentPerPage, todos }) => {
  // LOADING ANIMATION
  const loadingItems = Array.from({ length: contentPerPage }, (_, index) => (
    <SwiperSlide key={uuidv4()} className={courseStyle.courseCard}>
      <div className={courseStyle.headingContent}>
        <div className={courseStyle.headingIconContent}>
        <CustomSkeletonLoader count={1} width="35px" height="35px" />
        </div>
        <CustomSkeletonLoader count={4} width="100%" height="35px" />
      </div>
      <div className={courseStyle.profileContent}>
        <div>
          <CustomSkeletonLoader mt="10px" count={1} width="3rem" height="3rem" circle />
        </div>
        <CustomSkeletonLoader mt="10px" count={1} width="100%" height="50px" />
      </div>

      <CustomSkeletonLoader
        count={1}
        mt="20px"
        position="flex-start"
        width="100%"
        height="30px"
      />
      <CustomSkeletonLoader
        count={1}
        mt="10px"
        position="flex-start"
        width="100%"
        height="30px"
      />
      <CustomSkeletonLoader
        count={1}
        mt="10px"
        position="flex-start"
        width="100%"
        height="30px"
      />
      <CustomSkeletonLoader
        count={1}
        mt="10px"
        position="flex-start"
        width="100%"
        height="30px"
      />
      <CustomSkeletonLoader
        count={1}
        mt="20px"
        position="flex-start"
        width="100%"
        height="30px"
      />
    </SwiperSlide>
  ));

  // Navigation
  const navigate = useNavigate();
  const singleCourseRoute = (id) => {
    // Navigate to the specific route
    navigate(`course/${id}`);
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };

  const profileNavigate = useNavigate();
  const handleProfileView = (id) => {
    profileNavigate(`profile/${id}`);
    window.scrollTo({
      top: "20",
      behavior: "smooth",
    });
  };

  return (
    <>
      <Swiper
        className={courseStyle.swiperContent}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false}
        // pagination={{
        //   clickable: false,
        // }}
        pagination={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {isLoading || error
          ? loadingItems
          : todos &&
            todos.map((todo, index) => {
              return (
                <SwiperSlide key={uuidv4()} className={courseStyle.courseCard}>
                  <div className={courseStyle.headingContent}>
                    <div className={courseStyle.headingIconContent}>
                      <FontAwesomeIcon
                        icon={faCode}
                        className={courseStyle.headingIcon}
                      />
                    </div>
                    <div className={courseStyle.headingContentText}>
                      {`${todo && todo ? todo?.title : ""}`}
                    </div>
                  </div>

                  <ul className={courseStyle.starConetent}>
                    <li>
                      <FontAwesomeIcon
                        icon={faStar}
                        className={courseStyle.customStarIcon}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faStar}
                        className={courseStyle.customStarIcon}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faStar}
                        className={courseStyle.customStarIcon}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faStar}
                        className={courseStyle.customStarIcon}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faStar}
                        className={courseStyle.customStarIcon}
                      />
                    </li>
                    <li>(5.0)</li>
                  </ul>

                  {/* INSTRUCTOR CONTENT */}
                  <div className={courseStyle.profileContent}>
                    <div
                      className={courseStyle.profileImage}
                      onClick={() =>
                        handleProfileView(todo?.instructorData?.id)
                      }
                    >
                      <img
                        src={require(`../../../assets/images/users/${
                          todo && todo.instructorData
                            ? todo.instructorData.image
                            : "default"
                        }.jpg`)}
                        alt=""
                      />
                    </div>
                    <div
                      className={courseStyle.profileName}
                      onClick={() =>
                        handleProfileView(todo?.instructorData?.id)
                      }
                    >
                      {todo && todo.instructorData
                        ? todo.instructorData.fullName
                        : "Unknown Instructor"}
                    </div>
                  </div>

                  {/* CLASS CONTENT */}
                  <div className={courseStyle.classContentDisplay}>
                    <div
                      className={`${courseStyle.classContent} ${courseStyle.classDescriptionContent}`}
                    >
                      {`Total Lectures ${
                        todo && todo ? todo?.description : ""
                      }`}
                    </div>
                    <div className={courseStyle.classContent}>
                      {todo && todo?.certificationAvailable
                        ? "Certificate Available"
                        : "Certificate Not Available"}
                    </div>
                    <div className={courseStyle.classContent}>
                      {`Duration ${todo && todo ? todo?.courseDuration : ""}`}
                    </div>
                    <div className={courseStyle.classContent}>
                      {`Total Lectures ${
                        todo && todo ? todo?.lessonDetails?.totalLectures : ""
                      }`}
                    </div>
                    <div className={courseStyle.priceContent}>
                      {`Price ${todo && todo ? todo?.price : ""}`}
                    </div>
                  </div>

                  {/* ENROLLMENT BUTTON CONTENT */}
                  <button
                    className={courseStyle.buttonContent}
                    onClick={() => {
                      singleCourseRoute(todo.id);
                    }}
                  >
                    ENROLL NOW!
                  </button>
                </SwiperSlide>
              );
            })}
      </Swiper>
    </>
  );
};

export default memo(CourseDetailsCard);
