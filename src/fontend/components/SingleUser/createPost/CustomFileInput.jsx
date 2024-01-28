// CustomFileInput.js
import React from "react";
import style from "./CustomFileInput.module.css";

const CustomFileInput = ({ selectedFile, handleFileChange }) => {
  return (
    <div className={style.customFileInput}>
      <input
        type="file"
        id="fileInput"
        onChange={(e) => handleFileChange(e.target.files[0])}
      />
      <label htmlFor="fileInput">
        {selectedFile ? selectedFile.name : "Choose a file"}
      </label>
    </div>
  );
};

export default CustomFileInput;
