import React from "react";
import style from "./DevelopmentSkills.module.css";
import { v4 as uuidv4 } from "uuid";

export default function DevelopmentSkills({ data }) {
  const { role, developmentSkills } = data;

  return (
    <>
      <div className={style.developmentSkillsContainer}>
        {data &&
          role === "teacher" &&
          developmentSkills &&
          developmentSkills.map((item, index) => {
            return (
              <div key={uuidv4()} className={style.developmentSkillsCard}>
                <div className={style.iconTitleDiv}>
                  <div className={style.iconContainer}>
                    <img
                      src={require(`../../../../assets/images/users/default.jpg`)}
                      alt=""
                    />
                  </div>
                  <div className={style.DevelopmentTitle}>
                    {data && item.title}
                  </div>
                </div>
                <div className={style.skillMode}>{data && item.skillMode}</div>
                <div className={style.experience}>
                  <span className={style.title}>Experience</span>
                  <span className={style.text}>{data && item.experience}</span>
                </div>
                <div className={style.completedProject}>
                  <span className={style.text}>
                    {data && item.completedProjects}
                  </span>
                  <span className={style.title}>Projects</span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
