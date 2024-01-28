import React from "react";
import style from "./CustomSkeletonLoaderSingleDevelopment.module.css";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";

export default function CustomSkeletonLoaderSingleDevelopment() {
  return (
    <>
      <div className={style.cardServices}>
        <div className={style.singleCard}>
          {/* ---------ICCON---------- */}
          <div className={style.iconManagement}>
            <CustomSkeletonLoader
              count={1}
              width="80px"
              height="80px"
              circle
              position="center"
            />
          </div>
          {/* ---------TITLE------------ */}
          <CustomSkeletonLoader
            count={1}
            width="60%"
            height="25px"
            position="center"
          />
          {/* ------------PRAGRAPH---------- */}
          <>
            <CustomSkeletonLoader
              count={1}
              width="60%"
              height="25px"
              position="center"
              mt="20px"
            />
            <CustomSkeletonLoader
              count={1}
              width="60%"
              height="25px"
              position="center"
            />
            <CustomSkeletonLoader
              count={1}
              width="60%"
              height="25px"
              position="center"
            />
          </>

          <div className={`"col-md-12" ${style.developmentDetails}`}>
            {/* -------CONTENT CARD-------- */}
            <div className={style.cardContent}>
              <div className={style.systemTitle}>
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
              </div>
              <ul>
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
              </ul>
            </div>
            {/* -------CONTENT CARD-------- */}
            <div className={style.cardContent}>
              <div className={style.systemTitle}>
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
              </div>
              <ul>
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
              </ul>
            </div>
            {/* -------CONTENT CARD-------- */}
            <div className={style.cardContent}>
              <div className={style.systemTitle}>
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
              </div>
              <ul>
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
              </ul>
            </div>
            {/* -------CONTENT CARD-------- */}
            <div className={style.cardContent}>
              <div className={style.systemTitle}>
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
              </div>
              <ul>
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
                <CustomSkeletonLoader count={1} width="100%" height="25px" />
              </ul>
            </div>
          </div>
          <div className={style.developer}>
            <div className={style.projectManagerInfo}>
              <img
                className={style.projectManagerImage}
                src={require(`../../../assets/images/users/default.jpg`)}
                alt=""
              />
              <CustomSkeletonLoader
                count={1}
                width="200px"
                height="30px"
                position="center"
              />
            </div>
          </div>
          <div className={style.teamSection}>
            <div className={style.teamView}>
              <div className={style.teamMember}>
                <img
                  className={style.developersImage}
                  src={require(`../../../assets/images/users/default.jpg`)}
                  alt=""
                />
              </div>
              <div className={style.teamMember}>
                <img
                  className={style.developersImage}
                  src={require(`../../../assets/images/users/default.jpg`)}
                  alt=""
                />
              </div>
              <div className={style.teamMember}>
                <img
                  className={style.developersImage}
                  src={require(`../../../assets/images/users/default.jpg`)}
                  alt=""
                />
              </div>
              <div className={style.teamMember}>
                <img
                  className={style.developersImage}
                  src={require(`../../../assets/images/users/default.jpg`)}
                  alt=""
                />
              </div>
              <div className={style.teamMember}>
                <img
                  className={style.developersImage}
                  src={require(`../../../assets/images/users/default.jpg`)}
                  alt=""
                />
              </div>
              <div className={style.teamMember}>
                <img
                  className={style.developersImage}
                  src={require(`../../../assets/images/users/default.jpg`)}
                  alt=""
                />
              </div>
              <div className={style.teamMember}>
                <img
                  className={style.developersImage}
                  src={require(`../../../assets/images/users/default.jpg`)}
                  alt=""
                />
              </div>
              <div className={style.teamMember}>
                <img
                  className={style.developersImage}
                  src={require(`../../../assets/images/users/default.jpg`)}
                  alt=""
                />
              </div>
              <div className={style.teamMember}>
                <img
                  className={style.developersImage}
                  src={require(`../../../assets/images/users/default.jpg`)}
                  alt=""
                />
              </div>
              <div className={style.teamMember}>
                <img
                  className={style.developersImage}
                  src={require(`../../../assets/images/users/default.jpg`)}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={style.readMore}>
            <CustomSkeletonLoader
              count={1}
              width="100px"
              height="25px"
              position="center"
            />
          </div>
        </div>
      </div>
    </>
  );
}
