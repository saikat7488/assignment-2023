import React from "react";
import missionStyle from "./mission.module.css";
import Head from "../ComponentHeading/Head";

export default function Mission() {
  return (
    <>
      <div className={missionStyle.customContainer}>
        <div className={missionStyle.left_side}>
          <div className={missionStyle.flexContainer}>
            <div
              className={`${missionStyle.imageContent} ${missionStyle.imageContentMission}`}
            >
              <img src={require("../../../assets/images/mission.jpg")} alt="" />
            </div>
            <Head
              title="misssion"
              textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
              textTwo="Lorem ipsum dolor sit amet consectetur."
            />
            <div className={missionStyle.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              est, culpa temporibus dolorum repudiandae eveniet officiis
              repellendus nihil fuga iusto ut facere cumque. Inventore,
              molestiae laudantium expedita, amet tenetur corrupti eos tempora
              quae doloremque ipsam distinctio et. Labore debitis aliquam error
              tenetur vero minus porro quas sequi, nisi optio dolore.
            </div>
          </div>
        </div>
        <div className={missionStyle.right_side}>
          <div className={missionStyle.flexContainer}>
            <Head
              title="goal"
              textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
              textTwo="Lorem ipsum dolor sit amet consectetur."
            />
            <div className={missionStyle.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              est, culpa temporibus dolorum repudiandae eveniet officiis
              repellendus nihil fuga iusto ut facere cumque. Inventore,
              molestiae laudantium expedita, amet tenetur corrupti eos tempora
              quae doloremque ipsam distinctio et. Labore debitis aliquam error
              tenetur vero minus porro quas sequi, nisi optio dolore.
            </div>
            <div
              className={`${missionStyle.imageContent} ${missionStyle.imageContentGoal}`}
            >
              <img src={require("../../../assets/images/goal.jpg")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
