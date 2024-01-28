import React from "react";
import style from "./AboutCategory.module.css";

export default function AboutCategory({
  changeSelection,
  selectCard,
  categories,
}) {
  return (
    <>
      <div className={style.aboutCategoryContainer}>
        {categories.map((category) => (
          <div
            key={category}
            className={`${style.card} ${
              selectCard === category ? style.active : ""
            }`}
            onClick={() => {
              changeSelection(category);
            }}
          >
            {category}
          </div>
        ))}
      </div>
    </>
  );
}
