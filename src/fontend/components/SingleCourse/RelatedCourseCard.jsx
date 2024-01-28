import React, { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./RelatedCourseCard.module.css";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";
import IconManagement from "./IconManagement";

const RelatedCourseCard = ({ isLoading, todo }) => {
  // CardHover State Management
  const [isCardHover, setIsCardHover] = useState(false);


  // Navigation Management
  const navigate = useNavigate();

  //onClick Event with Navigation
  const onCardClick = useCallback(() => {
    if (todo && todo.id) {
      // Navigate to the "course/:id" route
      navigate(`/course/${todo.id}`);
    }
  }, [navigate, todo]);


  // Cardhover Handler Management
  const onCardHoverEnter = useCallback(() => {
    setIsCardHover(true);
  }, []);

  const onCardHoverLeaver = useCallback(() => {
    setIsCardHover(false);
  }, []);

  return (
    <>
      <div
        className={style.relatedCourse}
        onClick={onCardClick}
        onMouseEnter={onCardHoverEnter}
        onMouseLeave={onCardHoverLeaver}
      >
        <div className={style.relatedCourseIcon}>
          {isLoading ? (
            <CustomSkeletonLoader count={1} width="60px" height="60px" />
          ) : (
            <IconManagement
              icon={todo && todo?.image}
              isCardHover={isCardHover}
            />
          )}
        </div>
        <div className={style.relatedCourseDetails}>
          <span className={style.relatedCourseTitle}>
            {isLoading ? (
              <CustomSkeletonLoader count={1} width="240px" height="25px" />
            ) : (
              `${todo && todo?.title}`
            )}
          </span>
          <div className={style.relatedCourseContents}>
            <span>
              {isLoading ? (
                <CustomSkeletonLoader
                  count={1}
                  width="50px"
                  height="18px"
                  mt="2px"
                />
              ) : (
                `Spring & Fall`
              )}
            </span>

            <span>
              {isLoading ? (
                <CustomSkeletonLoader
                  count={1}
                  width="50px"
                  height="18px"
                  mt="2px"
                />
              ) : (
                `Price ${todo && todo?.price}`
              )}
            </span>

            <span>
              {isLoading ? (
                <CustomSkeletonLoader
                  count={1}
                  width="50px"
                  height="18px"
                  mt="2px"
                />
              ) : (
                ` ${todo && todo?.lessonDetails?.totalLectures} Classes`
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(RelatedCourseCard);
