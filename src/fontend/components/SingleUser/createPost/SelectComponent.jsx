import React, { useState } from "react";
import styles from "./SelectComponent.module.css";

const SelectComponent = ({ options, handleSelectChange, selectedOption }) => {
  const [isOpenOptionBox, setIsOpenOptionBox] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsOpenOptionBox(!isOpenOptionBox);
  };

  const handleOptionClick = (value) => {
    handleSelectChange(value);
    setIsOpenOptionBox(false);
  };

  return (
    <div className={styles.selectWrapper}>
      <button className={styles.selectButton} onClick={(e) => handleButtonClick(e)}>
        {selectedOption || "Select an option"}
      </button>

      <div className={styles.optionsList} style={{ display: isOpenOptionBox ? 'block' : 'none' }}>
        {options.map((option) => (
          <div
            key={option.value}
            className={styles.option}
            onClick={() => handleOptionClick(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectComponent;

