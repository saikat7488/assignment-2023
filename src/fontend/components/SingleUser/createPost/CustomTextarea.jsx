// CustomTextarea.js
import React from "react";
import style from "./CustomTextarea.module.css";

const CustomTextarea = ({ value, handleDescriptionTextChange }) => {
  return (
    <div className={style.customTextareaContainer}>
      <textarea
        className={style.customTextarea}
        value={value}
        onChange={(e) => handleDescriptionTextChange(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

export default CustomTextarea;
