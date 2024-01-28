import React, { memo, useState } from "react";
import style from "./SocialDetails.module.css";

const SocialDetails = ({ todo, isFetching, isLoading }) => {
  const [isNotLiked, setIsNotLiked] = useState(true);
  const likeHandlerOnPost = () => {
    setIsNotLiked(!isNotLiked);
  };

  return (
    <>
      <div className={style.socialDetails}>
        <div className={style.socialDataItems}>
          <div className={style.socialDataItem}>
            <div className={style.likeData}>
              {isLoading && !todo && isFetching
                ? "Loading"
                : todo?.socialData?.readed}
              <span> likes</span>
            </div>
            <div className={style.viewData}>
              {isLoading && !todo && isFetching
                ? "Loading"
                : todo?.socialData?.viewed}
              <span> views</span>
            </div>
          </div>
          <div className={style.socialDataItem}>
            <div className={style.commentData}>
              {isLoading && !todo && isFetching
                ? "Loading"
                : todo?.socialData?.commented}
              <span> comments</span>
            </div>
            <div className={style.shareData}>
              10 <span> shares</span>
            </div>
          </div>
        </div>

        <div className={style.socialDataBtns}>
          <div className={style.socialBtn} onClick={likeHandlerOnPost}>
            {isNotLiked ? (
              <i className="fas fa-check"></i>
            ) : (
              <i className="fas fa-times"></i>
            )}
            <span>Like</span>
          </div>
          <div className={style.socialBtn}>
            <i className="fas fa-comment"></i> <span>Comment</span>
          </div>
          <div className={style.socialBtn}>
            <i className="fas fa-share"></i> <span>share</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(SocialDetails);
