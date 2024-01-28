import React from "react";
import style from "./RelatedBlogLoader.module.css";
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";

export default function RelatedBlogLoader() {
  return (
    <>
        <div className={`col-md-6 py-3`}>
          <div className={`${style.reletedBlogCard}`}>
            <div className={style.fontSide}>
              <div className={style.blogImageWithAuthorContent}>
                <div className={style.blogImage}>
                  <img
                    src={require(`../../../assets/images/blogImage/default.jpg`)}
                    alt=""
                  />
                </div>
                <div className={style.authorContent}>
                  <div className={style.authorImage}>
                    <img
                      src={require(`../../../assets/images/users/default.jpg`)}
                      alt=""
                    />
                  </div>
                  <div className={style.authorData}>
                    <div className={style.authorName}>
                      <CustomSkeletonLoader
                        count={1}
                        width="100%"
                        height="30px"
                        mt="4px"
                      />
                    </div>
                    <div className={style.socialLinks}>
                      <li>
                        <CustomSkeletonLoader
                          count={1}
                          width="24px"
                          height="24px"
                        />
                      </li>
                      <li>
                        <CustomSkeletonLoader
                          count={1}
                          width="24px"
                          height="24px"

                        />
                      </li>
                      <li>
                        <CustomSkeletonLoader
                          count={1}
                          width="24px"
                          height="24px"
                        />
                      </li>
                      <li>
                        <CustomSkeletonLoader
                          count={1}
                          width="24px"
                          height="24px"
                        />
                      </li>
                      <li>
                        <CustomSkeletonLoader
                          count={1}
                          width="24px"
                          height="24px"
                        />
                      </li>
                      <li>
                        <CustomSkeletonLoader
                          count={1}
                          width="24px"
                          height="24px"
                        />
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.content}>
                <div className={style.blogTitle}>
                  <CustomSkeletonLoader count={1} width="100%" height="30px" />
                </div>
                <div className={style.category}>
                  <CustomSkeletonLoader count={1} width="60%" height="30px" />
                </div>
                <div className={style.date}>
                  <CustomSkeletonLoader count={1} width="50%" height="30px" />
                </div>
                <div className={style.text}>
                  <CustomSkeletonLoader count={4} mt="8px" width="100%" height="30px" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
