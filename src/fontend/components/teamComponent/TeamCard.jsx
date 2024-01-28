import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./team.module.css";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";

export default function TeamCard({ todo }) {
  const profileNavigate = useNavigate();
  const handleProfile = (id) => {
    profileNavigate(`/profile/${id}`);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={style.cardBox}>
        <div className={style.coverImage}></div>

        <div className={style.publicImage}>
          <img
            src={require(`../../../assets/images/users/${
              todo ? todo.image + ".jpg" : "default.jpg"
            }`)}
            alt=""
            onClick={() => handleProfile(todo && todo.id)}
          />
        </div>

        <div className={style.cardContent}>
          <h4>
            {todo ? (
              todo.fullName
            ) : (
              <CustomSkeletonLoader
                count={1}
                position="center"
                width="50%"
                height="30px"
              />
            )}
          </h4>
          <span>
            {todo ? (
              <>
                <i className={`fas fa-code`}></i> {todo.expertise}
              </>
            ) : (
              <CustomSkeletonLoader
                mt="-12px"
                count={1}
                position="center"
                width="50%"
                height="30px"
              />
            )}
          </span>
          <div className={style.bidoSection}>
            {todo ? (
              todo.bio
            ) : (
              <>
                <CustomSkeletonLoader
                  count={1}
                  mt="5px"
                  position="center"
                  width="80%"
                  height="30px"
                />
                <CustomSkeletonLoader
                  count={1}
                  mt="5px"
                  position="center"
                  width="80%"
                  height="30px"
                />
                <CustomSkeletonLoader
                  count={1}
                  mt="5px"
                  position="center"
                  width="80%"
                  height="30px"
                />
              </>
            )}
          </div>
          {todo ? (
            <div className={style.social_icon}>
              <i className={`fab fa-facebook`}></i>
              <i className={`fab fa-twitter`}></i>
              <i className={`fab fa-github`}></i>
              <i className={`fab fa-instagram`}></i>
            </div>
          ) : (
            <>
              <CustomSkeletonLoader
                mt="10px"
                count={4}
                position="center"
                width="50px"
                height="50px"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
