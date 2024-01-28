import React, { useState, useEffect, useCallback } from "react";
import style from "./Like.module.css";
import UserDataFetcher from "./UserDataFetcher";
import { useNavigate } from 'react-router-dom'

export default function Like({ number }) {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isWait, setIsWait] = useState(true);
  const [isError, setIsError] = useState(null);
  const profileNavigate = useNavigate();

  const { userData, isLoading, error } = UserDataFetcher();

  const fetchRandomUsers = useCallback(() => {
    try {
      if (error) {
        throw new Error(`Error fetching user data: ${error.message}`);
      }

      if (!userData || userData.length === 0) {
        throw new Error("No user data available.");
      }

      const shuffledUserArray = shuffleArray(userData);
      const selectedUsersData = shuffledUserArray.slice(0, parseInt(number, 10));
      setSelectedUsers(selectedUsersData);
      setIsWait(false);
    } catch (error) {
      setIsError(`Error in Like Component: ${error.message}`);
    }
  }, [number, userData, error]);

  useEffect(() => {
    !isLoading && !error && fetchRandomUsers();
  }, [fetchRandomUsers, isLoading, error]);

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  return (
    <>
      {!isWait && !isError && (
        <div className={style.likeContainer}>
          <div className={style.likeCard}>
            {selectedUsers.map((user, index) => (
              <div className={style.likedUser} key={index}>
                <div className={style.likeUserProfile} onClick={() => profileNavigate(`/profile/${user?.id}`)}>
                  <img src={require(`../../../assets/images/users/${user?.image}.jpg`)} alt="" />
                </div>
                <div className={style.likeUserName}>{user?.fullName}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

