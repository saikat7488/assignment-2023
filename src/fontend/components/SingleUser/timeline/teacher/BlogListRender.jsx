import React from "react";
import { v4 as uuidv4 } from "uuid";
import BlogList from "./BlogList";
import style from "./BlogList.module.css";

export default function BlogListRender({
  isLoading,
  todos,
  onBlogClick,
  selectedBlog,
}) {
  return (
    <>
      <div className={style.blogContainer}>
        {isLoading ? (
          <>
            {Array.from({ length: 6 }).map((_, index) => (
              <BlogList key={uuidv4()} />
            ))}
          </>
        ) : todos && todos.length > 0 ? (
          todos.map((todo, index) => (
            <BlogList
              key={uuidv4()}
              todo={todo}
              onBlogClick={() => {
                onBlogClick(todo);
              }}
              selectedBlog={selectedBlog}
            />
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </>
  );
}
