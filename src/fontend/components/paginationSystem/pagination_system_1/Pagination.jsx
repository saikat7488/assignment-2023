import React, { useState, useEffect } from "react";
import styles from "./Pagination.module.css";
import paginationData from "../../../../data/paginationData/paginationData";
import Head from "../../ComponentHeading/Head";

export default function Pagination() {
  const [todos, setTodoes] = useState([]);

  // Pagination Operation

  const [todosPerPage, setTodoesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfTotalPages = Math.ceil(todos.length / todosPerPage);
  const pages = [...Array(numberOfTotalPages + 1).keys()].slice(1);

  const indexOfLastTodo = currentPage * todosPerPage;

  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const visiableTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const prevPageHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPageHandler = () => {
    if (currentPage !== numberOfTotalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setTodoes(paginationData);
    setTodoesPerPage(10);
  }, []);
  return (
    <>
      <div className={styles.customContainer}>
        <Head
          title="Pagination In React"
          textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
          textTwo="Lorem ipsum dolor sit amet consectetur."
        />
        <div className={styles.cardContainer}>
          {todos &&
            visiableTodos.map((item, index) => (
              <div className={styles.card} key={Math.random()}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.title}>{item.title}</div>
              </div>
            ))}
        </div>
        <div className={styles.paginationContainer}>
          {/*******************************/}
          {/*************prevBtn***********/}
          {/*******************************/}
          <div
            className={`${styles.prevBtn} ${
              currentPage !== 1 ? "" : styles.disableBtn
            }`}
            onClick={prevPageHandler}
          >
            <span className="fas fa-arrow-left"></span>
          </div>
          {/*******************************/}
          {/**************page*************/}
          {/*******************************/}
          {pages.map((page, index) => (
            <div
              className={`${styles.paginationItem} ${
                currentPage === page ? styles.activeBtn : ``
              }`}
              key={Math.random()}
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              <span>{page}</span>
            </div>
          ))}
          {/*******************************/}
          {/*************NextBtn***********/}
          {/*******************************/}
          <div
            className={`${styles.nextBtn} ${
              currentPage !== numberOfTotalPages ? "" : styles.disableBtn
            }`}
            onClick={nextPageHandler}
          >
            <span className="fas fa-arrow-right"></span>
          </div>
        </div>
      </div>
    </>
  );
}
