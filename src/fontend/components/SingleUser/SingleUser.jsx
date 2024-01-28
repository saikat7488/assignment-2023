import React, { useState, useContext } from "react";
import style from "./SingleUser.module.css";
import Profile from "./Profile";
import ProfileGroup from "./ProfileGroup";
import Timeline from "./Timeline";
import About from "./About";
import BubbleAnimation from "./BobbleAnimation";

import { ProfileContext } from "../../../contextApi/ProfileContext";

export default function SingleUser() {
  const data = useContext(ProfileContext) || {};

  // data -> isLoading & profileData [object destructer]
  const { isLoading, profileData = {} } = data;
  const { userData } = profileData;

  const [active, setActive] = useState("timeline");

  const activeTimeline = () => {
    setActive("timeline");
  };

  const activeAbout = () => {
    setActive("about");
  };

  return (
    <div className={style.singleUserContainer}>
      <Profile todo={userData} />

      {!isLoading && (
        <ProfileGroup
          activeTimeline={activeTimeline}
          activeAbout={activeAbout}
          active={active}
        />
      )}

      {isLoading ? (
        <BubbleAnimation />
      ) : active === "timeline" ? (
        <Timeline />
      ) : (
        <About />
      )}
    </div>
  );
}
