import React from "react";
import style from "./Lecture.module.css";
import LectureDetails from "./LectureDetails";

export default function Lecture() {
  return (
    <div className={style.lectureContainer}>
      <LectureDetails lecture="lecture One"/>
      <LectureDetails lecture="lecture two"/>
      <LectureDetails lecture="lecture three"/>
      <LectureDetails lecture="lecture four"/>
      <button className={style.documentBtn}>show all Lecture Document</button>
    </div>
  );
}
