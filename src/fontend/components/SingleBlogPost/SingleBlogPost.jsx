import React, { memo } from "react";
import style from "./SingleBlogPost.module.css";

//import Templete
import SocialDetails from "./SocialDetails";
import CreateComment from "./CreateComment";
import CommentDisplay from "./CommentDisplay";
import BlogTopSection from "./BlogTopSection";

const SingleBlogPost = ({ blogData, error, isFetching }) => {
  return (
    <>
      <div className={style.blogContainer}>
        <BlogTopSection
          todo={blogData && !error ? blogData.todo : null}
          authorTodo={blogData && !error ? blogData.authorTodo : null}
          isFetching={isFetching}
        />
        <SocialDetails
          todo={blogData && !error ? blogData.todo : null}
          authorTodo={blogData && !error ? blogData.authorTodo : null}
          isFetching={isFetching}
        />
        <CreateComment />
        <CommentDisplay
          todo={blogData && !error ? blogData.todo : null}
          authorTodo={blogData && !error ? blogData.authorTodo : null}
          isFetching={isFetching}
        />
      </div>
    </>
  );
};

export default memo(SingleBlogPost);
