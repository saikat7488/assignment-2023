import React, { useEffect, useState, memo } from "react";

import SingleBlogPost from "../../components/SingleBlogPost/SingleBlogPost";
import ReletedBlog from "../../components/reletedBlog/RelatedBlog";

// useLocation
import { useLocation, useParams } from "react-router-dom";

const SingleBlogRoute = () => {
  // init
  const location = useLocation();
  const { id } = useParams();
  // State
  const [blogData, setBlogData] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const dataFetching = async (id) => {
    try {
      setIsFetching(true);
      // Blog Data
      const resData = await fetch(
        `https://dbforassignment2023.onrender.com/blog_data/${id}`
      );
      const blogDataById = await resData.json();

      // Author Data
      const authorResData = await fetch(
        `https://dbforassignment2023.onrender.com/user_data/${blogDataById.author}`
      );
      const blogAuthorDataById = await authorResData.json();

      setBlogData({
        todo: blogDataById,
        authorTodo: blogAuthorDataById,
        dataFrom: "API",
      });
      setIsFetching(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (location.state === null || location.state === undefined) {
        dataFetching(id);
      } else {
        setBlogData({
          todo: location.state.todo,
          authorTodo: location.state.authorTodo,
          dataFrom: "LOCATION.STATE",
        });
        setIsFetching(false);
      }
    };

    //Function Impementation
    getData();
  }, [id, location.state]);
  return (
    <>
      <SingleBlogPost
        blogData={blogData ? blogData : null}
        error={error}
        isFetching={isFetching}
      />
      <ReletedBlog search={blogData ? blogData.todo.category : null} />
    </>
  );
};

export default memo(SingleBlogRoute);
