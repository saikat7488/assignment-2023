import React, { memo } from "react";
import style from "./CommentDisplay.module.css";
import CommentReplyList from "./CommentReplyList";

const CommentDisplay = ({ todo, isFetching, isLoading }) => {
  return (
    <>
      <div className={style.commentReplyContainer}>
        <div className={style.title}>Recent Comment</div>
        {!isLoading && !isFetching && todo && (
          <CommentReplyList commentList={todo?.socialData?.commentList} />
        )}
      </div>
    </>
  );
};

export default memo(CommentDisplay);
