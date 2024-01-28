import React from "react";
import style from "./BlogList.module.css";
import CustomSkeletonLoader from "../../../../../customSkeloton/CustomSkeletonLoader";

export default function BlogList({ todo, onBlogClick, selectedBlog }) {
  return (
    <>
      <div className={`${style.blogCard} ${todo && todo.id === selectedBlog?.id ? style.active : null}`} onClick={onBlogClick}>
        {todo ? (
          <div className={style.blogTitle}>{todo.title}</div>
        ) : (
          <CustomSkeletonLoader count={2} width="100%" height="25px" />
        )}

        {todo ? (
          <div className={style.blogCategory}>
            <i className={`fa fa-diamond`}></i> {todo.category}
          </div>
        ) : (
          <CustomSkeletonLoader count={1} width="80%" height="25px" />
        )}

        {todo ? (
          <div className={style.dateTime}>
            <i className={`fa fa-calendar`}></i> {todo.createdDate}
          </div>
        ) : (
          <CustomSkeletonLoader count={1} width="40%" height="25px" />
        )}
      </div>
    </>
  );
}
