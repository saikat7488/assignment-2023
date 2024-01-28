import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";

import ReactPaginationComponent from "../../reactPaginationComponent/ReactPaginationComponent";
import GoToNext from "../../goToNext/GoToNext";
import Loading from "../../loading/Loading";
import Head from "../../ComponentHeading/Head";

export default function Pagination({ paginationSystem, contentPerPage }) {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodoesPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataByFetchApi = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/paginationData?_page=${currentPage}&_limit=${todosPerPage}`
        );
        const result = await res.json();
        // TotalNumberOfItem
        const totalTodos = res.headers.get("x-total-count");
        const totalPages = Math.ceil(totalTodos / todosPerPage);
        setPageCount(totalPages);
        setTodoesPerPage(contentPerPage);
        setTodos(result);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    getDataByFetchApi();
  }, [currentPage, todosPerPage, contentPerPage]);

  const handlePageClick = (data) => {
    const currentPage = data.selected + 1;
    setCurrentPage(currentPage);
  };

  console.log(`PaginationSystem`)

  return (
    <>
      <div className={styles.customContainer}>
        <Head
          title="PaginationSystem"
          textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
          textTwo="Lorem ipsum dolor sit amet consectetur."
        />
        <div className={styles.cardContainer}>
          {isLoading ? (
            <Loading />
          ) : (
            todos &&
            !error &&
            todos.map((todo, index) => (
              <div key={Math.random()} className={styles.card}>
                <div className={styles.name}>{todo.name}</div>
                <div className={styles.title}>{todo.title}</div>
              </div>
            ))
          )}
        </div>

        {paginationSystem ? (
          <ReactPaginationComponent
            currentPage={currentPage}
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        ) : (
          <GoToNext />
        )}
      </div>
    </>
  );
}
