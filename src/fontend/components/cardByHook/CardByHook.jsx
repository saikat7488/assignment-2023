import React, { useState, memo, useCallback } from "react";
import styles from "./CardByHook.module.css";

import Loading from "../loading/Loading";
import Head from "../ComponentHeading/Head";
import GoToNext from "../goToNext/GoToNext";
import useFetchHook from "../../../hoc/useFetchHook";
import ReactPaginationComponent from "../reactPaginationComponent/ReactPaginationComponent";

const Pagination = ({ paginationSystem, contentPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, todos, error, pageCount } = useFetchHook(
    `http://localhost:4000/paginationData`,
    contentPerPage,
    currentPage
  );
  const handlePageClick = useCallback((data) => {
    const currentPage = data.selected + 1;
    setCurrentPage(currentPage);
  },[]);

  return (
    <>
      <div className={styles.customContainer}>
        <Head
          title="CardByHook"
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
};

export default memo(Pagination);
