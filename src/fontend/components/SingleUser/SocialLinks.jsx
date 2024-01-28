import React from "react";
import style from "./SocialLinks.module.css";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";

export default function SocialLinks({ todo }) {
  return (
    <>
      <div className={style.socialLinkContainer}>
        <ul className={style.socialLinkCard}>
          <li className={style.spcialLinkListItem}>
            {todo ? (
              <i className={`fab fa-facebook`}></i>
            ) : (
              <CustomSkeletonLoader
                count={1}
                circle
                width="3rem"
                height="3rem"
              />
            )}
          </li>
          <li className={style.spcialLinkListItem}>
            {todo ? (
              <i className={`fab fa-linkedin`}></i>
            ) : (
              <CustomSkeletonLoader
                count={1}
                circle
                width="3rem"
                height="3rem"
              />
            )}
          </li>
          <li className={style.spcialLinkListItem}>
            {todo ? (
              <i className={`fab fa-twitter`}></i>
            ) : (
              <CustomSkeletonLoader
                count={1}
                circle
                width="3rem"
                height="3rem"
              />
            )}
          </li>
          <li className={style.spcialLinkListItem}>
            {todo ? (
              <i className={`fab fa-github`}></i>
            ) : (
              <CustomSkeletonLoader
                count={1}
                circle
                width="3rem"
                height="3rem"
              />
            )}
          </li>
          <li className={style.spcialLinkListItem}>
            {todo ? (
              <i className={`fab fa-dribbble`}></i>
            ) : (
              <CustomSkeletonLoader
                count={1}
                circle
                width="3rem"
                height="3rem"
              />
            )}
          </li>
          <li className={style.spcialLinkListItem}>
            {todo ? (
              <i className={`fab fa-instagram`}></i>
            ) : (
              <CustomSkeletonLoader
                count={1}
                circle
                width="3rem"
                height="3rem"
              />
            )}
          </li>
        </ul>
      </div>
    </>
  );
}
