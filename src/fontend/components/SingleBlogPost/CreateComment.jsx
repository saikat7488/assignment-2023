import React, { memo } from "react";
import style from "./CreateComment.module.css";

const CreateComment = () => {
  return (
    <>
      <div className={style.createCommentContainer}>
        <form>
          <div className={style.comment}>
            <div className={style.commentDesign}>
              <label htmlFor="create_comment">Write a comment</label>
              <textarea className={style.writeComment} name="create_comment" id="create_comment"></textarea>
            </div>
            <div>
              <button
                className={style.commentBtn}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default memo(CreateComment);
