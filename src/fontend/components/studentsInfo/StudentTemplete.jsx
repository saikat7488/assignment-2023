import React, { useState, useEffect, useCallback, memo } from "react";
import style from "./StudentTemplete.module.css";
import { v4 as uuidv4 } from "uuid";
import GoToNext from "../goToNext/GoToNext";
import StudentCard from "./StudentCard";
import Head from "../ComponentHeading/Head";
import ReactPaginationComponent from "../reactPaginationComponent/ReactPaginationComponent";
import StudentCardLoader from "./StudentCardLoader";

const StudentTemplete = ({ paginationSystem, contentPerPage }) =>{
  const [todos, setTodos] = useState([]);
  const [viewControlTodos, setViewControlTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(() => {
    const storedData = JSON.parse(sessionStorage.getItem("student_data"));
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
        const cachedData = sessionStorage.getItem("student_data");
        const cachedTimestamp = sessionStorage.getItem(
          "student_data_timestamp"
        );

        if (cachedData && cachedTimestamp) {
          const parsedData = JSON.parse(cachedData);
          const timestamp = parseInt(cachedTimestamp, 10);

          if (Date.now() - timestamp < 5 * 60 * 1000) {
            setTodos(parsedData.result);
            setPageCount(parsedData.totalPages);
            setIsLoading(false);
            return;
          }
        }

        const dataRes = await fetch(
          `https://dbforassignment2023.onrender.com/user_data?dataType=user_data&role=student`
        );

        const result = await dataRes.json();

        const activeStudents = result.filter(student => student.coursesPurchased && student.coursesPurchased.length > 0);
   
        const totalTodos =
          dataRes.headers.get("x-total-count") || result.activeStudents;
        const totalPages = Math.ceil(totalTodos / contentPerPage);

        const sortedTodos = activeStudents
          .slice()
          .sort((a, b) => a.fullName.localeCompare(b.fullName));

        setPageCount(totalPages);
        setTodos(sortedTodos);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [contentPerPage]);

  useEffect(() => {
    if (!isLoading && !error) {
      sessionStorage.setItem(
        "student_data",
        JSON.stringify({ result: todos, totalPages: pageCount, currentPage })
      );
      sessionStorage.setItem("student_data_timestamp", Date.now().toString());
    }
  }, [isLoading, error, todos, pageCount, currentPage]);

  useEffect(() => {
    setIsFetching(true);
    if (!isLoading) {
      const paginatedData = todos.slice(
        (currentPage - 1) * contentPerPage,
        currentPage * contentPerPage
      );
      setViewControlTodos(paginatedData);
      setIsFetching(false);
    }
  }, [currentPage, todos, isLoading, contentPerPage]);

  const loadingItems = Array.from({ length: contentPerPage }, (_, index) => (
    <StudentCardLoader key={uuidv4()} />
  ));

  return (
    <div className={style.customContainer}>
      <Head
        title="Student Collaboration"
        textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
        textTwo="Lorem ipsum dolor sit amet consectetur."
      />
      <div className={`row`}>
        {isLoading || isFetching || error ? (
          loadingItems
        ) : (
          <>
            {viewControlTodos.map((todo, index) => (
              <StudentCard key={uuidv4()} todo={todo} />
            ))}
          </>
        )}
      </div>

      {paginationSystem ? (
        <ReactPaginationComponent
          currentPage={currentPage}
          pageCount={pageCount}
          handlePageClick={handlePageClick}
        />
      ) : (
        <GoToNext to="/student" />
      )}
    </div>
  );
}

export default memo(StudentTemplete);
