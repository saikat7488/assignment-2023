import React, { useContext, useState, useEffect } from "react";
import style from "./TeacherTimeline.module.css";

import BlogListRender from "./BlogListRender";
import BlogTopSection from "../../../SingleBlogPost/BlogTopSection";
import SocialDetails from "../../../SingleBlogPost/SocialDetails";
import CreateComment from "../../../SingleBlogPost/CreateComment";
import CommentDisplay from "../../../SingleBlogPost/CommentDisplay";
import CreateBlogPost from "../../createPost/CreateBlogPost";

// Context API
import { ProfileContext } from "../../../../../contextApi/ProfileContext";
import { useAuth } from "../../../../../contextApi/AuthContext";

const TeacherTimeline = () => {
  //Authentication User
  const { isAuthenticated, user } = useAuth();
  const { id: loggedUserId } = user && user[0] ? user[0] : {};

  const data = useContext(ProfileContext) || {};

  // data -> isLoading & profileData [object destructer]
  const [isLocalLoading, setIsLoacalLoading] = useState(true);

  const { profileData = {} } = data;
  const { userData, blogDetails } = profileData;

  const defaultBlog =
    blogDetails && blogDetails.length > 0 ? blogDetails[0] : null;
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    setSelectedBlog(defaultBlog);
    const loadingTimeout = setTimeout(() => {
      setIsLoacalLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, [defaultBlog]);

  // Control Blog Section
  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <>
      {isAuthenticated && loggedUserId === userData.id && (
        <div className={style.createBlog}>
          <CreateBlogPost />
        </div>
      )}

      <div className={style.blogManagement}>
        <div className={style.blogListManagement}>
          <BlogListRender
            isLoading={isLocalLoading}
            todos={blogDetails}
            onBlogClick={handleBlogClick}
            selectedBlog={selectedBlog}
          />
        </div>
        <div className={style.blogDisplay}>
          <div className={style.blogPost}>
            <BlogTopSection
              isLoading={isLocalLoading}
              todo={selectedBlog}
              authorTodo={selectedBlog ? userData : null}
            />
            <div className={style.socialDetailsDisplay}>
              <SocialDetails isLoading={isLocalLoading} todo={selectedBlog} />
            </div>
            <div className={style.createCommentDisplay}>
              <CreateComment />
            </div>
            <div className={style.commentDisplay}>
              <CommentDisplay isLoading={isLocalLoading} todo={selectedBlog} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherTimeline;
