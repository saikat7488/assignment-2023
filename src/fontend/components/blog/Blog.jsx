import React, { useState, useEffect, useCallback } from "react";
import blogStyle from "./blog.module.css";
import BlogCard from "./BlogCard";
import { v4 as uuidv4 } from "uuid";
import GoToNext from "../goToNext/GoToNext";
import Head from "../ComponentHeading/Head";
import BlogCardTemplete from "./BlogCardTemplete";
import getDataByFetchApi from "../../../dataFetching/api";
import ReactPaginationComponent from "../reactPaginationComponent/ReactPaginationComponent";

export default function Blog({ paginationSystem, contentPerPage }) {
  const [todos, setTodos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(() => {
    const storedData = JSON.parse(sessionStorage.getItem("blog_data"));
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
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const cachedData = sessionStorage.getItem("blog_data");
        const cachedTimestamp = sessionStorage.getItem("blog_data_timestamp");

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
          `https://dbforassignment2023.onrender.com/blog_data?dataType=blog_data`,
          currentPage,
          contentPerPage
        );

        setPageCount(totalPages);
        setTodos(result);
        setIsLoading(false);
        setIsFetching(false);

        sessionStorage.setItem(
          "blog_data",
          JSON.stringify({ result, totalPages, currentPage })
        );
        sessionStorage.setItem("blog_data_timestamp", Date.now().toString());
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [currentPage, contentPerPage]);

  const loadingItems = Array.from({ length: contentPerPage }, (_, index) => (
    <BlogCardTemplete key={Math.random()} />
  ));

  return (
    <>
      <div className={blogStyle.customContainer}>
        <Head
          title="Recent Blogs"
          textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
          textTwo="Lorem ipsum dolor sit amet consectetur."
        />

        {/* BLOG SECTION */}
        <div className={blogStyle.blogSection}>
          {isLoading || isFetching || error
            ? loadingItems
            : todos &&
              todos.map((todo, index) => (
                <BlogCard key={uuidv4()} todo={todo} />
              ))}
        </div>

        {paginationSystem ? (
          <ReactPaginationComponent
            currentPage={currentPage}
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        ) : (
          <GoToNext to="/blog" />
        )}
      </div>
    </>
  );
}
