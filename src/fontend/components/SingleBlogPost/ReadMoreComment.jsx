import React from "react";
import style from "./ReadMoreComment.module.css";

export default function ReadMoreComment() {
  return (
    <>
      <div className={style.readMoreCommentContainer}>
        <div className={style.readMoreBtnContainer}>
          <button>Read More Comments</button>
        </div>
      </div>
    </>
  );
}
