import React, { useState, useEffect, useCallback } from "react";
import testimonialStyle from "./testimonial.module.css";
import { v4 as uuidv4 } from "uuid";
import Head from "../ComponentHeading/Head";
import GoToNext from "../goToNext/GoToNext";
import TestimonialCard from "./TestimonialCard";
import getDataByFetchApi from "../../../dataFetching/api";
import CustomTestimonialLoader from "./CustomTestimonialLoader";
import ReactPaginationComponent from "../reactPaginationComponent/ReactPaginationComponent";

export default function Testimonial({ paginationSystem, contentPerPage }) {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(() => {
    const storedData = JSON.parse(sessionStorage.getItem("testimonial_data"));
    const parsedPage = storedData ? parseInt(storedData.currentPage) : null;
    return parsedPage || 1;
  });

  // HandlePageClick
  const handlePageClick = useCallback((data) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  }, []);

  useEffect(() => {
    handlePageClick({ selected: currentPage - 1 });
  }, [currentPage, handlePageClick]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const cachedData = sessionStorage.getItem("testimonial_data");
        const cachedTimestamp = sessionStorage.getItem(
          "testimonial_data_timestamp"
        );

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
          `https://dbforassignment2023.onrender.com/testimonial_data?dataType=testimonial_data`,
          currentPage,
          contentPerPage
        );

        setPageCount(totalPages);
        setTodos(result);
        setIsLoading(false);
        setIsFetching(false);

        sessionStorage.setItem(
          "testimonial_data",
          JSON.stringify({ result, totalPages, currentPage })
        );
        sessionStorage.setItem(
          "testimonial_data_timestamp",
          Date.now().toString()
        );
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [currentPage, contentPerPage]);

  const loadingItems = Array.from({ length: contentPerPage }, (_, index) => (
    <CustomTestimonialLoader key={uuidv4()} />
  ));

  return (
    <>
      <section className={testimonialStyle.testimonial}>
        <div className={`${testimonialStyle.customConatiner}`}>
          <div className={`row`}>
            <div className={`col-md-12`}>
              <Head
                title={`TESTIMONIAL`}
                textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
                textTwo="Lorem ipsum dolor sit amet consectetur."
              />
            </div>
          </div>

          <div className="row">
            {isLoading || isFetching || error
              ? loadingItems
              : todos &&
                todos.map((todo, index) => (
                  <TestimonialCard key={uuidv4()} todo={todo} />
                ))}
          </div>

          {paginationSystem ? (
            <ReactPaginationComponent
              currentPage={currentPage}
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          ) : (
            <GoToNext to="/testimonial" />
          )}
        </div>
      </section>
    </>
  );
}
