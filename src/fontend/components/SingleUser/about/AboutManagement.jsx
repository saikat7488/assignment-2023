import React from "react";
import style from "./AboutManagement.module.css";
import AboutCategory from "./AboutCategory";

const AboutManagement = ({ isTeacher, categories, selectCard, changeSelection, renderSelectedComponent }) => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutManagement}>
        <div className={style.leftSideManagement}>
          <AboutCategory
            changeSelection={changeSelection}
            selectCard={selectCard}
            categories={categories}
          />
        </div>
        <div className={style.rightSideManagement}>{renderSelectedComponent()}</div>
      </div>
    </div>
  );
};

export default AboutManagement;
