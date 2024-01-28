import React, { useState, useEffect, useCallback, memo } from "react";
import style from "./OurCourses.module.css";
import { v4 as uuidv4 } from "uuid";
import CourseCard from "./CourseCard";
import Head from "../ComponentHeading/Head";
import GoToNext from "../goToNext/GoToNext";
import getDataByFetchApi from "../../../dataFetching/api";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";
import ReactPaginationComponent from "../reactPaginationComponent/ReactPaginationComponent";

const OurCourses = ({ paginationSystem, contentPerPage }) => {
  const [todos, setTodos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [dynamicContentPerPage, setDynamicContentPerPage] =
    useState(contentPerPage);

  const [currentPage, setCurrentPage] = useState(() => {
    const storedData = JSON.parse(sessionStorage.getItem("course_data"));
    const parsedPage = storedData ? parseInt(storedData.currentPage) : null;
    return parsedPage || 1;
  });

  const handlePageClick = useCallback((data) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  }, []);

  useEffect(() => {
    handlePageClick({ selected: currentPage - 1 });
  }, [currentPage, handlePageClick]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setDynamicContentPerPage(12);
      } else {
        setDynamicContentPerPage(contentPerPage);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [contentPerPage]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);

        const cachedData = sessionStorage.getItem("course_data");
        const cachedTimestamp = sessionStorage.getItem("course_data_timestamp");

        if (cachedData && cachedTimestamp) {
          const parsedData = JSON.parse(cachedData);
          const timestamp = parseInt(cachedTimestamp, 10);

          if (Date.now() - timestamp < 5 * 60 * 1000) {
            if (parsedData.currentPage === currentPage) {
              setTodos(parsedData.result);
              setPageCount(parsedData.totalPages);
              setIsLoading(false);
              setIsFetching(false);
              return;
            }
          }
        }

        const { result, totalPages } = await getDataByFetchApi(
          `https://dbforassignment2023.onrender.com/course_data?dbType=course_data`,
          currentPage,
          dynamicContentPerPage
        );

        setPageCount(totalPages);
        setTodos(result);
        setIsLoading(false);
        setIsFetching(false);

        sessionStorage.setItem(
          "course_data",
          JSON.stringify({ result, totalPages, currentPage })
        );
        sessionStorage.setItem("course_data_timestamp", Date.now().toString());
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [currentPage, dynamicContentPerPage]);

  const loadingItems = Array.from(
    { length: dynamicContentPerPage },
    (_, index) => (
      <div key={uuidv4()} className={style.serviceContent}>
        <CustomSkeletonLoader
          mt="20px"
          count={1}
          position="center"
          width="3.5rem"
          height="3.5rem"
        />
        <CustomSkeletonLoader
          count={1}
          position="center"
          width="100%"
          height="28px"
        />
        <CustomSkeletonLoader
          count={1}
          position="center"
          width="100%"
          height="28px"
        />
      </div>
    )
  );

  return (
    <>
      <section className={style.customSection}>
        <Head
          title="online courses"
          textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
          textTwo="Lorem ipsum dolor sit amet consectetur."
        />

        <div className={style.serviceContainer}>
          {isLoading || isFetching || error
            ? loadingItems
            : todos &&
              todos.map((todo, index) => (
                <div key={uuidv4()} className={style.displayCard}>
                   <CourseCard  todo={todo} index={index}  />
                </div>
               
              ))}
        </div>

        {paginationSystem ? (
          <ReactPaginationComponent
            currentPage={currentPage}
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        ) : (
          <GoToNext to="/course" />
        )}
      </section>
    </>
  );
};

export default memo(OurCourses);
