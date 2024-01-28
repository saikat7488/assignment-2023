import React, { useState, useEffect, useCallback } from "react";
import style from "./DeveloperTeam.module.css";
import { v4 as uuidv4 } from "uuid";
import Head from "../ComponentHeading/Head";
import GoToNext from "../goToNext/GoToNext";
import DeveloperTeamCard from "./DeveloperTeamCard";
import getDataByFetchApi from "../../../dataFetching/api";
import SkeletonViewDeveloperTeam from "./SkeletonViewDeveloperTeam";
import ReactPaginationComponent from "../reactPaginationComponent/ReactPaginationComponent";

export default function DeveloperTeam({ paginationSystem, contentPerPage }) {
  const [todos, setTodos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(() => {
    const storedData = JSON.parse(
      sessionStorage.getItem("developer_team_data")
    );
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
        const cachedData = sessionStorage.getItem("developer_team_data");
        const cachedTimestamp = sessionStorage.getItem(
          "developer_team_data_timestamp"
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
          `https://dbforassignment2023.onrender.com/user_data?role=teacher`,
          currentPage,
          contentPerPage
        );

        setPageCount(totalPages);
        setTodos(result);
        setIsLoading(false);
        setIsFetching(false);

        sessionStorage.setItem(
          "developer_team_data",
          JSON.stringify({ result, totalPages, currentPage })
        );
        sessionStorage.setItem(
          "developer_team_data_timestamp",
          Date.now().toString()
        );
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [currentPage, contentPerPage]);

  const loadingItems = Array.from({ length: contentPerPage }, (_, index) => (
    <div className="col-md-4 py-2" key={uuidv4()}>
      <SkeletonViewDeveloperTeam key={uuidv4()} />
    </div>
  ));

  return (
    <>
      <div className={style.customContainer}>
        <Head
          title="Developer Team Section"
          textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
          textTwo="Lorem ipsum dolor sit amet consectetur."
        />

        {isLoading || isFetching || error ? (
          <div className="row" key={uuidv4()}>
            {loadingItems}
          </div>
        ) : (
          <div className="row">
            {todos &&
              todos.map((todo, index) => {
                const isLastItem = index === todos.length - 1;
                const additionalClasses = isLastItem
                  ? `${style.centeredItem} d-flex align-items-center justify-content-center`
                  : "";

                return (
                  <div
                    key={uuidv4()}
                    className={`col-sm-12 col-md-6 col-lg-4 py-2  ${additionalClasses}`}
                  >
                    <DeveloperTeamCard key={uuidv4()} todo={todo} />
                  </div>
                );
              })}
          </div>
        )}
        {paginationSystem ? (
          <ReactPaginationComponent
            currentPage={currentPage}
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        ) : (
          <GoToNext to="/developer_team" />
        )}
      </div>
    </>
  );
}
