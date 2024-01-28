import React, { useState } from "react";
import style from "./CommentViewer.module.css";
import GenerateComments from "./GenerateComments";
import Like from "./Like";
import { useNavigate } from "react-router-dom";

export default function CommentViewer() {
  const { comments } = GenerateComments();

  const [showSecondStage, setShowSecondStage] = useState({});
  const [showThirdStage, setShowThirdStage] = useState({});
  const profileNavigate = useNavigate();

  const handleToggleSecondStage = (commentId) => {
    setShowSecondStage((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));

    setShowThirdStage({});
  };

  const handleToggleThirdStage = (secondStageId) => {
    setShowThirdStage((prev) => ({
      ...prev,
      [secondStageId]: !prev[secondStageId],
    }));
  };

  // Ramdom Number
  function generateRandomNumber() {
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  }

  return (
    <>
      <div className={style.rootContainer}>
        {comments &&
          comments.length > 0 &&
          comments.map((comment, index) => {
            let randomNumber = generateRandomNumber();
            return (
              <div key={comment.id} className={style.mappingContainer}>
                <div className={style.commentContentLayer}>
                  <div
                    className={style.profileImage}
                    onClick={() => profileNavigate(`/profile/${comment.uid}`)}
                  >
                    <img
                      src={require(`../../../assets/images/users/${comment?.image}.jpg`)}
                      alt=""
                    />
                  </div>
                  <div className={style.commentContent}>
                    <div className={style.comment}>
                      <div className={style.authorName}>
                        {comment?.fullName}
                      </div>
                      <div className={style.commentText}>
                        {comment?.comment}
                      </div>
                      <div className={style.commentReplyLikeCount}>
                        <i className="fas fa-check"></i>{" "}
                        <span className={style.commentLikeNumber}>
                          {randomNumber}
                        </span>
                        <div className={style.likeList}>
                          <Like number={randomNumber} />
                        </div>
                      </div>
                    </div>
                    <div className={style.actionBtns}>
                      <div>20W</div>
                      <div>Like</div>
                      <div>Reply</div>
                    </div>
                    <div className={style.repliedContainer}>
                      <i className="fa fa-reply"></i>
                      <div
                        className={style.clickMeButton}
                        onClick={() => handleToggleSecondStage(comment.id)}
                      >
                        {showSecondStage[comment.id]
                          ? ` hide replies ${comment?.reply?.length}`
                          : `show replies ${comment?.reply?.length}`}
                      </div>
                    </div>
                  </div>
                </div>

                {showSecondStage[comment.id] &&
                  comment.reply &&
                  comment.reply.map((secondStageItem) => {
                    let randomNumber = generateRandomNumber();
                    return(
                      <div
                      className={`${style.mappingContainer} ${style.secondLayer}`}
                    >
                      <div className={style.commentContentLayer}>
                        <div
                          className={style.profileImage}
                          onClick={() =>
                            profileNavigate(`/profile/${secondStageItem.uid}`)
                          }
                        >
                          <img
                            src={require(`../../../assets/images/users/${secondStageItem?.image}.jpg`)}
                            alt=""
                          />
                        </div>
                        <div className={style.commentContent}>
                          <div className={style.comment}>
                            <div className={style.authorName}>
                              {secondStageItem?.fullName}
                            </div>
                            <div className={style.commentText}>
                              {secondStageItem?.comment}
                            </div>
                            <div className={style.commentReplyLikeCount}>
                              <i className="fas fa-check"></i> <span>{randomNumber}</span>
                              <div className={style.likeList}>
                                <Like number={randomNumber} />
                              </div>
                            </div>
                          </div>
                          <div className={style.actionBtns}>
                            <div>20W</div>
                            <div>Like</div>
                            <div>Reply</div>
                          </div>
                          <div className={style.repliedContainer}>
                            <i className="fa fa-reply"></i>
                            <div
                              className={style.clickMeButton}
                              onClick={() =>
                                handleToggleThirdStage(secondStageItem.id)
                              }
                            >
                              {showThirdStage[secondStageItem.id]
                                ? ` hide replies ${secondStageItem?.reply?.length}`
                                : `show replies ${secondStageItem?.reply?.length}`}
                            </div>
                          </div>
                        </div>
                      </div>

                      {showThirdStage[secondStageItem.id] &&
                        secondStageItem.reply &&
                        secondStageItem.reply.map((thirdStageItem, index) => {
                          let randomNumber = generateRandomNumber();
                          return(
                            <div
                            className={`${style.mappingContainer} ${style.thirdLayer}`}
                          >
                            <div className={style.commentContentLayer}>
                              <div
                                className={style.profileImage}
                                onClick={() =>
                                  profileNavigate(
                                    `/profile/${secondStageItem.uid}`
                                  )
                                }
                              >
                                <img
                                  src={require(`../../../assets/images/users/${thirdStageItem?.image}.jpg`)}
                                  alt=""
                                />
                              </div>
                              <div className={style.commentContent}>
                                <div className={style.comment}>
                                  <div className={style.authorName}>
                                    {thirdStageItem?.fullName}
                                  </div>
                                  <div className={style.commentText}>
                                    {thirdStageItem?.comment}
                                  </div>
                                  <div className={style.commentReplyLikeCount}>
                                    <i className="fas fa-check"></i>
                                    <span>{randomNumber}</span>
                                    <div className={style.likeList}>
                                      <Like number={randomNumber} />
                                    </div>
                                  </div>
                                </div>
                                <div className={style.actionBtns}>
                                  <div>20W</div>
                                  <div>Like</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          )
                        })}
                    </div>
                    )
                  })}
              </div>
            );
          })}
      </div>
    </>
  );
}
