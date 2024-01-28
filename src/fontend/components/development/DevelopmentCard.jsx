import React from "react";
import style from "./DevelopmentCard.module.css";
import { useNavigate } from "react-router-dom";

export default function DevelopmentCard({ todo, index }) {
  const navigate = useNavigate();
  const handleButtonClick = (todo) => {
    navigate(`/development/${todo.id}`);
  };

  //Icon Management
  const iconStore = [
    "fab fa-microsoft",
    "fab fa-apple",
    "fab fa-app-store",
    "fa fa-android",
    "fa fa-laptop",
    "fa fa-cloud",
    "fa fa-server",
    "fa fa-signal",
    "fa fa-fingerprint",
  ];

  return (
    <>
      <div className={style.singleCard}>
        <i className={iconStore[index % iconStore.length]}></i>
        <h3>{todo ? todo.title : ""}</h3>
        <p>{todo ? todo.description : ""}</p>
        <div
          className={style.readMore}
          onClick={() => {
            handleButtonClick(todo);
          }}
        >
          <span className="fas fa-arrow-right"></span>
        </div>
      </div>
    </>
  );
}
