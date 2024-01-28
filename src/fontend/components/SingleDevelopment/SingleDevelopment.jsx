import React, { memo } from "react";
import style from "./SingleDevelopment.module.css";

import { v4 as uuid } from "uuid";
import CardContent from "./CardContent";
import { useNavigate } from "react-router-dom";



const SingleDevelopment = ({ developmentStateData }) => {
  const navigate = useNavigate();
  const handleDeveloperProfile = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className={style.cardServices}>
      <div className={style.singleCard}>
        <i className="fab fa-microsoft"></i>
        <h3>
          {developmentStateData?.todo?.title &&
            developmentStateData?.todo?.title}
        </h3>
        <p>
          {developmentStateData?.todo?.description &&
            developmentStateData?.todo?.description}
        </p>
        <div className={`"col-md-12" ${style.developmentDetails}`}>
        <div className={style.cardContent}>
            <div className={style.systemTitle}>Requirements</div>
            <ul>
              <li>Requirement-1</li>
              <li>Requirement-2</li>
              <li>Requirement-3</li>
              <li>Requirement-4</li>
              <li>Requirement-5</li>
            </ul>
          </div>
          <div className={style.cardContent}>
            <div className={style.systemTitle}>Features</div>
            <ul>
              <li>Feature-1</li>
              <li>Feature-2</li>
              <li>Feature-3</li>
              <li>Feature-4</li>
              <li>Feature-5</li>
            </ul>
          </div>
          <CardContent
            data={developmentStateData?.todo?.technologies}
            title="Technologies"
          />
          <CardContent data={developmentStateData?.todo?.tools} title="tools" />
          <CardContent
            data={developmentStateData?.todo?.keywords}
            title="keywords"
          />
        </div>

        {/* ----DEVELOPER----- */}
        <div className={style.developer}>
          <div className={style.projectManagerInfo}>
            <img
              className={style.projectManagerImage}
              onClick={() =>
                handleDeveloperProfile(
                  developmentStateData?.developerDataTodo?.id
                )
              }
              src={require(`../../../assets/images/users/${
                developmentStateData?.developerDataTodo?.image
                  ? developmentStateData?.developerDataTodo?.image + ".jpg"
                  : "default.jpg"
              }`)}
              alt=""
            />
            <div className={style.name}>
              {developmentStateData?.developerDataTodo?.fullName &&
                developmentStateData?.developerDataTodo?.fullName}
            </div>
          </div>
        </div>

        {/* ----TEAM MEMBERS----- */}
        <div className={style.teamSection}>
          <div className={style.teamView}>
            {developmentStateData?.relatedDevelopersInformationTodo &&
              developmentStateData?.relatedDevelopersInformationTodo.map(
                (devInfo, index) => {
                  return (
                    <div
                      key={uuid()}
                      className={style.teamMember}
                      onClick={() => handleDeveloperProfile(devInfo.id)}
                    >
                      <img
                        className={style.developersImage}
                        src={require(`../../../assets/images/users/${
                          devInfo ? devInfo.image + ".jpg" : "default.jpg"
                        }`)}
                        alt=""
                      />
                    </div>
                  );
                }
              )}
          </div>
        </div>

        {/* Go Next Route */}
        <div className={style.readMore}>
          <span className="fas fa-arrow-right"></span>
        </div>
      </div>
    </div>
  );
};

export default memo(SingleDevelopment);
