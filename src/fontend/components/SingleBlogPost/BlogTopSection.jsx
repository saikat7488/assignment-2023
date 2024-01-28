import React from "react";
import style from "./BlogTopSection.module.css";

import { useNavigate } from "react-router-dom";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";

export default function BlogTopSection({
  todo,
  authorTodo,
  isFetching,
  isLoading,
}) {
  const profileNaviagte = useNavigate();

  const profileNavigateHandler = (id) => {
    profileNaviagte(`/profile/${id}`);
  };
  return (
    <>
      <div className={style.blogTopSection}>
        {!isLoading && !isFetching && todo && Object.keys(todo).length !== 0 ? (
          <div className={style.blogTitle}>{todo?.title}</div>
        ) : (
          <CustomSkeletonLoader count={1} width="90%" height="26px" />
        )}

        {!isLoading && !isFetching && todo && Object.keys(todo).length !== 0 ? (
          <div className={style.blogCategory}>
            <i className={`fa fa-diamond`}></i>
            <span> {todo ? todo?.category : "Loading"}</span>
          </div>
        ) : (
          <CustomSkeletonLoader count={1} width="50%" height="26px" />
        )}

        {!isLoading && !isFetching && todo && Object.keys(todo).length !== 0 ? (
          <div className={style.createDate}>
            <i className={`fa fa-calendar`}></i> <span>{todo?.createdDate}</span>
          </div>
        ) : (
          <CustomSkeletonLoader count={1} width="30%" height="26px" />
        )}

        <div className={style.blogIamge}>
          <img
            src={require(`../../../assets/images/blogImage/${
              !isLoading &&
              !isFetching &&
              todo &&
              Object.keys(todo).length !== 0
                ? todo.image
                : "default"
            }.jpg`)}
            alt=""
          />
        </div>

        {/* ************** */}
        {/* Author Section */}
        {/* ************** */}

        <div className={style.authorDetails}>
          <div
            className={style.authorIamge}
            onClick={() =>
              profileNavigateHandler(
                !isLoading &&
                  !isFetching &&
                  authorTodo &&
                  Object.keys(authorTodo).length !== 0 &&
                  authorTodo?.id
              )
            }
          >
            <img
              src={require(`../../../assets/images/users/${
                !isLoading &&
                !isFetching &&
                authorTodo &&
                Object.keys(authorTodo).length !== 0
                  ? authorTodo?.image + ".jpg"
                  : "default.jpg"
              }`)}
              alt=""
            />
          </div>

          <div>
            {!isLoading &&
            !isFetching &&
            authorTodo &&
            Object.keys(authorTodo).length !== 0 ? (
              <div className={style.authorName}>{authorTodo.fullName}</div>
            ) : (
              <CustomSkeletonLoader count={1} width="100%" height="24px" />
            )}

            <div className={style.socialLinks}>
              <li>
                {!isLoading &&
                !isFetching &&
                authorTodo &&
                Object.keys(authorTodo).length !== 0 ? (
                  <i className={`fab fa-facebook`}></i>
                ) : (
                  <CustomSkeletonLoader
                    count={1}
                    width="30px"
                    height="30px"
                    circle={true}
                  />
                )}
              </li>
              <li>
                {!isLoading &&
                !isFetching &&
                authorTodo &&
                Object.keys(authorTodo).length !== 0 ? (
                  <i className={`fab fa-instagram`}></i>
                ) : (
                  <CustomSkeletonLoader
                    count={1}
                    width="30px"
                    height="30px"
                    circle={true}
                  />
                )}
              </li>
              <li>
                {!isLoading &&
                !isFetching &&
                authorTodo &&
                Object.keys(authorTodo).length !== 0 ? (
                  <i className={`fab fa-linkedin`}></i>
                ) : (
                  <CustomSkeletonLoader
                    count={1}
                    width="30px"
                    height="30px"
                    circle={true}
                  />
                )}
              </li>
              <li>
                {!isLoading &&
                !isFetching &&
                authorTodo &&
                Object.keys(authorTodo).length !== 0 ? (
                  <i className={`fab fa-github`}></i>
                ) : (
                  <CustomSkeletonLoader
                    count={1}
                    width="30px"
                    height="30px"
                    circle={true}
                  />
                )}
              </li>
              <li>
                {!isLoading &&
                !isFetching &&
                authorTodo &&
                Object.keys(authorTodo).length !== 0 ? (
                  <i className="fab fa-dribbble"></i>
                ) : (
                  <CustomSkeletonLoader
                    count={1}
                    width="30px"
                    height="30px"
                    circle={true}
                  />
                )}
              </li>
              <li>
                {!isLoading &&
                !isFetching &&
                authorTodo &&
                Object.keys(authorTodo).length !== 0 ? (
                  <i className={`fab fa-twitter`}></i>
                ) : (
                  <CustomSkeletonLoader
                    count={1}
                    width="30px"
                    height="30px"
                    circle={true}
                  />
                )}
              </li>
            </div>
          </div>
        </div>

        {!isLoading && !isFetching && todo && Object.keys(todo).length !== 0 ? (
          <div className={style.postDescription}>{todo.description}</div>
        ) : (
          <CustomSkeletonLoader count={16} width="100%" height="26px" />
        )}
      </div>
    </>
  );
}
