import React, { useEffect, useState, memo } from "react";
import style from "./CourseTopSection.module.css";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader.jsx";

// React Components
import StarRatingDisplay from "../startManagement/Star.jsx";
import IconManagement from "./IconManagement.jsx";

const CourseTopSection = ({
  titleText,
  courseData,
  isLoading,
  error,
  isFetching,
}) => {
  const [fillColor, setFillColor] = useState("#000000");
  const [hover, setHover] = useState(false);
  const [isActiveMouseEnter, setIsActiveMouseEnter] = useState(false);
  const [isTitleText, setIsTitleText] = useState();

  // const isLoading = true;
  useEffect(() => {
    switch (titleText) {
      case "COURSE INFORMATION":
        setIsTitleText("courseInfo");
        break;

      case "DEVELOPMENT INFORMATION":
        setIsTitleText("devInfo");
        break;

      default:
        break;
    }
  }, [titleText]);

  // designCard
  const designCardMouseEnter = () => {
    setFillColor("#ffffff");
    setHover(true);
    setIsActiveMouseEnter(true);
  };

  // designCard
  const designCardMouseLeave = () => {
    setFillColor("#000000");
    setHover(false);
    setIsActiveMouseEnter(false);
  };

  // customSvgContainer
  const onmouseEnter = () => {
    setFillColor("#ffffff");
    setHover(true);
  };

  // customSvgContainer
  const onmouseExit = () => {
    setFillColor("#ffffff");
    setHover(false);
  };

  const wantedWidth = 40;
  const wantedHeight = 40;

  return (
    <>
      <div
        className={`${style.designCard} ${
          isTitleText === "courseInfo" ? style.courseInfo : style.devInfo
        }`}
        onMouseEnter={designCardMouseEnter}
        onMouseLeave={designCardMouseLeave}
      >
        {/********************courseContentDisplay**********************/}
        <div className={style.courseContentDisplay}>
          {isLoading || isFetching || !courseData?.todo?.image ? (
            <div className={style.courseTopIcon}></div>
          ) : (
            <div
              className={style.customSvgContainer}
              onMouseEnter={onmouseEnter}
              onMouseLeave={onmouseExit}
            >
              <IconManagement
                width={wantedWidth}
                height={wantedHeight}
                icon={courseData?.todo?.image}
                isCardHover={hover}
                isTransition="true"
                fillColor={fillColor}
              />
            </div>
          )}

          {/* TITLE &  EATING*/}
          <div className={style.titleAndRatingContent}>
            {isLoading || error || isFetching || !courseData?.todo?.title ? (
              <CustomSkeletonLoader count={1} width="15rem" height="25px" />
            ) : (
              <div className={style.title}>{courseData?.todo?.title}</div>
            )}

            {isLoading || isFetching || !courseData?.todo?.ratings?.rating ? (
              <CustomSkeletonLoader count={1} width="15rem" height="25px" />
            ) : (
              <div className={style.startRating}>
                <StarRatingDisplay
                  rating={courseData?.todo?.ratings?.rating || 5}
                  isActiveMouseEnter={isActiveMouseEnter}
                  fillColor={fillColor}
                />
              </div>
            )}
          </div>
        </div>
        {/********** COURSE DESCRIPTION ***********/}

        {isLoading || isFetching || !courseData?.todo?.description ? (
          <>
            <div className={`mt-3`}>
              {[...Array(3)].map((_, index) => (
                <CustomSkeletonLoader
                  key={index}
                  count={1}
                  position="center"
                  width="50%"
                  height="25px"
                  mt="4px"
                />
              ))}
            </div>
          </>
        ) : (
          <div className={style.courseDescription}>
            <i className={`fas fa-quote-left ${style.quoteIcon}`}></i>
            <span>{courseData?.todo?.description}</span>
            <i className={`fas fa-quote-right ${style.quoteIcon}`}></i>
          </div>
        )}

        {isLoading ||
        isFetching ||
        !courseData?.todo?.certificationAvailable ? (
          <div className={style.certificationContainer}>
            <i
              className={`fa fa-certificate ${style.certificateIcon} ${style.certificateLoading}`}
            ></i>
            <i
              className={`fas fa-check ${style.checkIcon} ${style.checkIconLoading}`}
            ></i>
          </div>
        ) : (
          <div className={style.certificationContainer}>
            <i className={`fa fa-certificate ${style.certificateIcon}`}></i>
            <i className={`fas fa-check ${style.checkIcon}`}></i>
          </div>
        )}
      </div>
    </>
  );
};
export default memo(CourseTopSection);
