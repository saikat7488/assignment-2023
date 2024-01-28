import React, { useContext, useState, useEffect } from "react";
import style from "./Timeline.module.css";
import { ProfileContext } from "../../../contextApi/ProfileContext";
import TeacherTimeline from "./timeline/teacher/TeacherTimeline";
import StudentTimeline from "./timeline/student/StudentTimeline";
import BubbleAnimation from "./BobbleAnimation";

export default function Timeline() {
  const data = useContext(ProfileContext) || {};
  const { isLoading, profileData = {} } = data;
  const { userData } = profileData;

  const [isTeacher, setIsTeacher] = useState(null);

  useEffect(() => {
    if (!isLoading && userData) {
      setIsTeacher(userData.role === "teacher");
    }
  }, [isLoading, userData]);

  if (isLoading || isTeacher === null) {
    return <BubbleAnimation />;
  }

  return (
    <>
      <div className={style.timelineContainer}>
        {isTeacher === true ? (
          <TeacherTimeline />
        ) : isTeacher === false ? (
          <StudentTimeline />
        ) : null}
      </div>
    </>
  );
}
