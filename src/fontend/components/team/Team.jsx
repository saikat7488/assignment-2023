import React, { useState, useEffect } from "react";
import teamStyle from "./team.module.css";

import Head from "../ComponentHeading/Head";
import GoToNext from "../goToNext/GoToNext";
import ReactPaginationComponent from "../reactPaginationComponent/ReactPaginationComponent";
// import useFetchHook from "../../../hoc/useFetchHook";
import TeamCard from "./TeamCard";

export default function TeamSection({ paginationSystem, contentPerPage }) {
  const [todos, setTodos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodoesPerPage] = useState(contentPerPage);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataByFetchApi = async () => {
      try {
        const res = await fetch(
          `https://dbforassignment2023.onrender.com/user_data?role=teacher&_page=${currentPage}&_limit=${todosPerPage}`
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

  const loadingItems = Array.from({ length: contentPerPage }, (_, index) => (
    <TeamCard key={Math.random()} />
  ));

  return (
    <>
      <div className={teamStyle.customContainer}>
        <Head
          title="Team Section"
          textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
          textTwo="Lorem ipsum dolor sit amet consectetur."
        />
        <div className={teamStyle.customCardBox}>
          {isLoading
            ? loadingItems
              ? loadingItems
              : "Loading"
            : error
            ? "Error"
            : todos &&
              todos.map((todo, index) => {
                return <TeamCard key={Math.random()} todo={todo} />;
              })}
        </div>
        {paginationSystem ? (
          <ReactPaginationComponent
            currentPage={currentPage}
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        ) : (
          <GoToNext to="/team" />
        )}
      </div>
    </>
  );
}
