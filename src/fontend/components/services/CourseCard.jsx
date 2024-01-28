import React, { useState, useCallback } from "react";
import style from "./CourseCard.module.css";
import IconManagement from "./IconManagement";
import { useNavigate } from "react-router-dom";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CourseCard({ todo, index }) {
  // useNavigate
  const navigate = useNavigate();
  const onCardClick = useCallback(() => {
    // Assuming `todo` has an `id` property
    if (todo && todo.id) {
      // Navigate to the "course/:id" route
      navigate(`/course/${todo.id}`);
    }
  }, [navigate, todo]);

  // ICON MANAGEMENT
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleCardHover = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  return (
    <>
      <div
        key={Math.random()}
        className={style.serviceContent}
        onClick={onCardClick}
        onMouseEnter={() => {
          handleCardHover(index);
        }}
        onMouseLeave={() => {
          handleCardHover(null);
        }}
      >
        <div className={style.icon}>
          <IconManagement
            icon={todo.image}
            index={index}
            hoveredIndex={hoveredIndex}
          />
        </div>
        <div className={style.title}>{todo.title}</div>
        <div className={style.enroll}>
          <button>
            <FontAwesomeIcon icon={faCheck} className={style.check} />
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
}
