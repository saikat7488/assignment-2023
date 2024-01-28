import React from "react";
import style from "./SingleCommentReply.module.css";
import { useNavigate } from "react-router-dom";
import Like from "./Like";

export default function SingleCommentReply({ replied, name, image, id, number}) {
  const profileNavigate = useNavigate();

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateRandomSentence(minWords, maxWords) {
    const words = [
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipisicing",
      "elit",
      "Mollitia",
      "soluta",
      "quam",
      "Assumenda",
      "tempore",
      "beatae",
      "quibusdam",
      "officia",
      "nam",
      "saepe",
      "voluptatem",
      "earum",
      "ad",
      "omnis",
      "quos",
      "repudiandae",
      "aut",
      "vel",
      "obcaecati",
      "laboriosam",
      "est",
      "explicabo",
      "atque",
      "soluta",
      "eaque",
      "in",
      "libero",
      "amet",
      "dicta",
      "ut",
      "Vel",
      "porro",
      "quam",
      "modi",
      "temporibus",
      "excepturi",
      "nesciunt",
      "repudiandae",
      "Illum",
      "ad",
      "expedita",
      "rerum",
      "pariatur",
      "deleniti",
      "facilis",
      "quos",
      "quis",
      "obcaecati",
      "vero",
      "dolores",
      "natus",
      "odio",
      "molestiae",
      "placeat",
      "Iste",
      "vitae",
      "non",
      "quis",
      "officiis",
      "harum",
      "Neque",
      "corrupti",
      "quisquam",
      "quaerat",
      "explicabo",
      "quis",
      "voluptas",
      "esse",
      "minus",
      "quam",
      "tempore",
      "consequatur",
      "exercitationem",
      "quae",
      "dicta",
      "pariatur",
      "cumque",
      "dolores",
      "assumenda",
      "porro",
      "velit",
      "aliquam",
      "eius",
      "quod",
      "Tenetur",
      "et",
      "earum",
      "commodi",
      "ea",
      "suscipit",
      "minima",
      "necessitatibus",
      "repudiandae",
      "asperiores",
      "fugiat",
      "architecto",
      "neque",
      "deserunt",
      "impedit",
      "sequi",
      "accusamus",
      "quas",
      "incidunt",
      "voluptates",
      "at",
      "Error",
      "voluptatibus",
      "animi",
      "veritatis",
      "blanditiis",
      "eaque",
      "molestiae",
      "iure",
      "sed",
      "expedita",
      "id",
      "eius",
      "ipsum",
      "rerum",
      "labore",
      "eos",
      "quisquam",
      "porro",
      "tenetur",
      "Consequuntur",
      "perspiciatis",
      "temporibus",
      "quos",
    ];

    const sentenceLength =
      Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
    let randomSentence = "";

    for (let i = 0; i < sentenceLength; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      randomSentence += words[randomIndex] + " ";
    }

    // Trim the extra space at the end
    randomSentence = randomSentence.trim();

    return randomSentence;
  }

  return (
    <>
      <div className={style.singleCommentReply}>
        <div
          className={style.userProfile}
          onClick={() => profileNavigate(`/profile/${id}`)}
        >
          <img
            src={require(`../../../assets/images/users/${
              image ?? "default"
            }.jpg`)}
            alt=""
          />
        </div>
        <div className={style.commentReplyContent}>
          <div className={style.userNameAndCommentReplyContainer}>
            <div className={style.userName}>{name}</div>
            <div className={style.userCommentReplyText}>
              {generateRandomSentence(25, getRandomNumber(40, 80))}
            </div>
            <div className={style.commentReplyLikeCount}>
              <i className="fas fa-check"></i> <span>{number}</span>
              <div className={style.likeList}>
                <Like number={number}/>
              </div>
            </div>
          </div>
          <div className={style.actionBtns}>
            <div>20W</div>
            <div>Like</div>
            <div>Reply</div>
          </div>

          {replied && (
            <div className={style.repliedContainer}>
              <i className="fa fa-reply"></i>
              <div>replied 2</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
