import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import style from "./SingleDevelopmentRoute.module.css";
import SingleDevelopment from "../../components/SingleDevelopment/SingleDevelopment";
import CustomSkeletonLoaderSingleDevelopment from "../../components/SingleDevelopment/CustomSkeletonLoaderSingleDevelopment";

export default function SingleDevelopmentRoute() {
  const location = useLocation();
  const { id } = useParams();
  const [developmentStateData, setDevelopmentStateData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (id) => {
    try {
      setIsFetching(true);

      const response = await fetch(
        `https://dbforassignment2023.onrender.com/development_data/${id}`
      );
      const developmentDataById = await response.json();

      const authorResponse = await fetch(
        `https://dbforassignment2023.onrender.com/user_data/${developmentDataById.developer}`
      );
      const developerData = await authorResponse.json();

      // Related Courses
      const relatedDevelopersInformation = await Promise.all(
        developmentDataById.developersId.map(async (developerId) => {
          const developersInformation = await fetch(
            `https://dbforassignment2023.onrender.com/user_data/${developerId}`
          );
          return developersInformation.json();
        })
      );

      setDevelopmentStateData({
        todo: developmentDataById,
        developerDataTodo: developerData,
        relatedDevelopersInformationTodo: relatedDevelopersInformation,
        dataFrom: "API",
      });

      setIsLoading(false);
      setIsFetching(false);

    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (!location.state) {
        fetchData(id);
      } else {
        setDevelopmentStateData({
          todo: location.state.todo,
          developerDataTodo: location.state.developerData,
          relatedDevelopersInformationTodo:
            location.state.relatedDevelopersInformation,
          dataFrom: "LOCATION.STATE",
        });
        setIsFetching(false);
      }
    };

    getData();
  }, [id, location.state]);

  return (
    <>
      <div className={style.pageContainer}>
        {isLoading || isFetching || 
        !developmentStateData?.todo ||
        !developmentStateData?.developerDataTodo ||
        !developmentStateData?.relatedDevelopersInformationTodo ||
        error ? (
          <CustomSkeletonLoaderSingleDevelopment />
        ) : (
          <SingleDevelopment
            developmentStateData={developmentStateData}
          />
        )}
      </div>
    </>
  );
}
