import React, { memo } from "react";
import style from "./StudentCard.module.css";
import { useNavigate } from "react-router-dom";

const StudentCard = ({ todo }) => {
  const profileNavigate = useNavigate();
  const handleStudentProfile = (id) => {
    profileNavigate(`/profile/${id}`);

    window.scrollTo({
      to: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`col-md-4 col-sm-12 ${style.cardBox}`}>
      <div
        className={style.cardContent}
        onClick={() => handleStudentProfile(todo?.id)}
      >
        <div className={style.cardImage}>
          <img
            src={require(`../../../assets/images/users/${
              todo?.image.replace(".jpg", "") + ".jpg" || "default.jpg"
            }`)}
            alt=""
          />
        </div>
        <div className={style.studentName}>{todo?.fullName}</div>
        <div className={style.studentEmail}>{todo?.email}</div>
        <div className={style.studentUniversity}>
          {todo?.education?.institution}
        </div>

        {/* ANIMATION */}
        <div className={style.bubbleAnimation}></div>
      </div>
    </div>
  );
};

export default memo(StudentCard);
