import React, { useContext, useState } from "react";
import style from "./About.module.css";
import AboutManagement from "./about/AboutManagement";
import { ProfileContext } from "../../../contextApi/ProfileContext";

import Work from "./about/Work";
import Address from "./about/Address";
import Skill from "./about/DevelopmentSkills";
import Education from "./about/Education";
import ExtracurricularActivities from "./about/ExtracurricularActivities";
import ContactAndBasicInfo from "./about/ContactAndBasicInfo";

const About = () => {
  const data = useContext(ProfileContext) || {};
  const { profileData = {} } = data;
  const { userData } = profileData;

  const isTeacher = userData && userData.role === "teacher";

  const categories = isTeacher
    ? [
        "work",
        "skill",
        "education",
        "extraActivities",
        "placedLived",
        "contact",
      ]
    : ["education", "extraActivities", "placedLived", "contact"];

  const [selectCard, setSelectCard] = useState(
    isTeacher ? "work" : "education"
  );

  const renderSelectedComponent = () => {
    switch (selectCard) {
      case "education":
        return <Education data={userData}/>;
      case "extraActivities":
        return <ExtracurricularActivities data={userData}/>;
      case "placedLived":
        return <Address data={userData}/>;
      case "contact":
        return <ContactAndBasicInfo data={userData}/>;
      case "work":
        return <Work data={userData}/>;
      case "skill":
        return <Skill data={userData}/>;
      default:
        return null;
    }
  };

  return (
    <div className={style.aboutContainer}>
      <AboutManagement
        isTeacher={isTeacher}
        categories={categories}
        selectCard={selectCard}
        changeSelection={(category) => setSelectCard(category)}
        renderSelectedComponent={renderSelectedComponent}
      />
    </div>
  );
};

export default About;
