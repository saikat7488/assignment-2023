import React from "react";
import style from "./blog.module.css";
import { useNavigate } from "react-router-dom";
import textHandler from "../../utility/textHandler";
import timeAgo from "../../utility/timeAgo";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";

export default function BlogCardTemplete({ todo, authorData, isLoading }) {
  // BLOG Route
  const navigate = useNavigate();
  const handleButtonClick = (todo, authorTodo) => {
    navigate(`/blog/${todo.id}`, { state: { todo, authorTodo } });
    window.scrollTo({
      top: 20,
      behavior: "smooth",
    });
  };

  // Profile Route
  const profileNavigate = useNavigate();
  const handleProfile = (id) => {
    profileNavigate(`/profile/${id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.blogCard}>
      {/* BLOG CARD IMAGE SECTION */}
      <div className={style.blogImageContent}>
        <img
          src={require(`../../../assets/images/blogImage/${
            todo ? todo.image + ".jpg" : "default.jpg"
          }`)}
          alt=""
        />
      </div>

      {/* BLOG CARD CONTENT SECTION */}
      <div className={style.blogContent}>
        {todo ? (
          <div className={style.dateTimeContent}>
            <div className={style.dateContent}>
              <i className={`fa fa-calendar`}></i>
              <span> {todo.createdDate}</span>
            </div>
            <div className={style.timeCalculation}>
              <i className={`fa fa-clock-o`}></i>
              <span className={style.timeAgo}>{timeAgo(todo.createdDate)}</span>
            </div>
          </div>
        ) : (
          <CustomSkeletonLoader count={2} width="40%" height="24px" />
        )}

        {todo ? (
          <div className={style.blogTitle}>
            {textHandler(todo.title, 50, true)}
          </div>
        ) : (
          <CustomSkeletonLoader count={2} width="100%" height="24px" />
        )}

        {todo ? (
          <div className={style.blogCategory}>
            <i className={`fa fa-diamond`}></i>
            <span>{todo.category} </span>
          </div>
        ) : (
          <CustomSkeletonLoader count={1} width="80%" height="24px" />
        )}

        {todo ? (
          <div className={style.blogDescription}>
            {textHandler(todo.description, 210, true)}
          </div>
        ) : (
          <CustomSkeletonLoader count={4} width="100%" height="24px" />
        )}

        {/* Read More */}
        {todo ? (
          <div className={style.btnContent}>
            {todo && authorData && (
              <button
                onClick={() => {
                  handleButtonClick(todo, authorData);
                }}
              >
                Read More
              </button>
            )}
          </div>
        ) : (
          <CustomSkeletonLoader
            count={1}
            position="center"
            width="100px"
            height="24px"
          />
        )}
      </div>

      {/*SOCIAL DATA SECTION */}
      <div className={style.socialDataSection}>
        <div className={`${style.read} ${style.socialDataSectionCard}`}>
          <div className={style.value}>
            {todo ? (
              todo.socialData.viewed
            ) : (
              <CustomSkeletonLoader count={1} width="50px" height="30px" />
            )}
          </div>
          <div className={style.type}>View</div>
        </div>
        <div className={`${style.view} ${style.socialDataSectionCard}`}>
          <div className={style.value}>
            {todo ? (
              todo.socialData.readed
            ) : (
              <CustomSkeletonLoader count={1} width="50px" height="30px" />
            )}
          </div>
          <div className={style.type}>Read</div>
        </div>
        <div className={`${style.comment} ${style.socialDataSectionCard}`}>
          <div className={style.value}>
            {todo ? (
              todo.socialData.commented
            ) : (
              <CustomSkeletonLoader count={1} width="50px" height="30px" />
            )}
          </div>
          <div className={style.type}>Comments</div>
        </div>
      </div>

      {/* PROFILR CONTENT */}

      {!todo
        ? ""
        : authorData && (
            <div className={style.ProfileContent}>
              {authorData && (
                <div
                  className={style.profileImageContent}
                  onClick={() => handleProfile(authorData.id)}
                >
                  <img
                    src={require(`../../../assets/images/users/${authorData.image}.jpg`)}
                    alt={authorData.image}
                  />
                </div>
              )}
              <div className={style.athorName}
                      onClick={() => handleProfile(authorData.id)}
                      >
                {authorData && authorData.fullName}
              </div>
              <div className={style.authorProfession}>
                {authorData && authorData.expertise}
              </div>
              <div className={style.social_icons}>
                <i className={`fab fa-facebook ${style.icon}`}></i>
                <i className={`fab fa-github ${style.icon}`}></i>
                <i className={`fab fa-instagram ${style.icon}`}></i>
                <i className={`fab fa-linkedin ${style.icon}`}></i>
                <i className={`fab fa-twitter ${style.icon}`}></i>
              </div>
            </div>
          )}
    </div>
  );
}
