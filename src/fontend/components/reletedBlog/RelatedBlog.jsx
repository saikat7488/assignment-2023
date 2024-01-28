import React, { useEffect, useState } from "react";
import style from "./RelatedBlog.module.css";
import { v4 as uuidv4 } from "uuid";
import Head from "../ComponentHeading/Head";
import { useNavigate } from "react-router-dom";
import textHandler from "../../utility/textHandler";
import RelatedBlogLoader from "./RelatedBlogLoader";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";

export default function RelatedBlog({ search }) {
  const [blogDataByCategory, setBlogDataByCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (search) => {
    try {
      setIsFetching(true);

      const response = await fetch(
        `https://dbforassignment2023.onrender.com/blog_data?dbType=blog_data&category=${search}`
      );
      const data = await response.json();

      const blogsWithAuthors = await Promise.all(
        data.map(async (blogItem) => {
          const authorResponse = await fetch(
            `https://dbforassignment2023.onrender.com/user_data?dbType=user_data&id=${blogItem.author}`
          );
          const authorData = await authorResponse.json();
          return { ...blogItem, authorTodo: authorData };
        })
      );

      setBlogDataByCategory(blogsWithAuthors);
      setIsLoading(false);
      setIsFetching(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData(search);
  }, [search]);

  const loadingItems = Array.from({ length: 6 }, (_, index) => (
    <RelatedBlogLoader key={Math.random()} />
  ));

  const navigate = useNavigate();
  const handleRelatedBlogClick = (todo, authorTodo) => {
    navigate(`/blog/${todo.id}`, { state: { todo, authorTodo } });
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className={`${style.customContainer}`}>
        <Head
          title="Releted Blogs"
          textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
          textTwo="Lorem ipsum dolor sit amet consectetur."
        />
        <div className={`row`}>
          {isFetching || isLoading || error ? (
            loadingItems
          ) : (
            <>
              {blogDataByCategory.map((todo, index) => {
                return (
                  <div
                    key={uuidv4()}
                    className={`col-md-6 py-3`}
                    onClick={() =>
                      handleRelatedBlogClick(todo, todo.authorTodo[0])
                    }
                  >
                    <div className={`${style.reletedBlogCard}`}>
                      <div className={style.fontSide}>
                        <div className={style.blogImageWithAuthorContent}>
                          <div className={style.blogImage}>
                            <img
                              src={require(`../../../assets/images/blogImage/${
                                todo ? todo.image : "default"
                              }.jpg`)}
                              alt=""
                            />
                          </div>
                          <div className={style.authorContent}>
                            <div className={style.authorImage}>
                              <img
                                src={require(`../../../assets/images/users/${
                                  todo
                                    ? todo.authorTodo[0].image + ".jpg"
                                    : "default.jpg"
                                }`)}
                                alt=""
                              />
                            </div>
                            <div className={style.authorData}>
                              <div className={style.authorName}>
                                {todo ? todo.authorTodo[0].fullName : "Loading"}
                              </div>
                              <div className={style.socialLinks}>
                                <li>
                                  {blogDataByCategory ? (
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
                                  {blogDataByCategory ? (
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
                                  {blogDataByCategory ? (
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
                                  {blogDataByCategory ? (
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
                                  {blogDataByCategory ? (
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
                                  {blogDataByCategory ? (
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
                        </div>
                        <div className={style.content}>
                          <div className={style.blogTitle}>
                            {todo ? todo.title : "Loading"}
                          </div>
                          <div className={style.category}>
                            {todo ? todo.category : "Loading"}
                          </div>
                          <div className={style.date}>
                            {todo ? todo.createdDate : "Loading"}
                          </div>
                          <div className={style.text}>
                            {todo
                              ? textHandler(todo.description, 150, true)
                              : "Loading"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
