import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./CommenReplytList.module.css";
import SingleCommentReply from "./SingleCommentReply";
import ReadMoreComment from "./ReadMoreComment";
import CommentViewer from "./CommentViewer";

export default function CommentReplyList({ commentList }) {
  const [commentedUserDetails, setCommentedUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const commentedUserDetailsPromises =
          commentList &&
          commentList.map((comment) =>
            fetch(
              `https://dbforassignment2023.onrender.com/user_data/${comment.id}`
            ).then((response) => {
              if (!response.ok) {
                setError(
                  `Error fetching user details for user ID: ${comment.id}`
                );
              }
              return response.json();
            })
          );

        const commentedUserDetailsData = await Promise.all(
          commentedUserDetailsPromises
        );

        setCommentedUserDetails(commentedUserDetailsData);
        setIsLoading(false);
      } catch (error) {
        setError(`Error fetching in CommentReplyList: ${error.message}`);
      }
    };

    commentList && fetchUserDetails();
  }, [commentList]);


  
  // Ramdom Number
  function generateRandomNumber() {
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  }

  return (
    <>
      {/* COMMENT : From Database */}
      {!isLoading &&
        !error &&
        commentedUserDetails &&
        commentedUserDetails.slice(0, 3).map((user, index) => {
          let randomNumber = generateRandomNumber();
          return (
            <div key={uuidv4()} className={style.commentContainer}>
              <SingleCommentReply
                replied={false}
                name={user?.fullName}
                image={user?.image}
                id={user?.id}
                number={randomNumber}
              ></SingleCommentReply>
            </div>
          );
        })}

      {/* Create Random Comment  */}
      <CommentViewer />
      {/* Read More Comments */}
      <ReadMoreComment />
    </>
  );
}
