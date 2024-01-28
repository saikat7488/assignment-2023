import React, { useEffect } from "react";
import style from "./DeveloperRoute.module.css";
import DeveloperTeam from "../../components/developerTeam/DeveloperTeam";

export default function DeveloperRoute() {
  useEffect(() => {
    document.title = "WorldCoder | Developer";
  }, []);
  return (
    <>
      <div className={style.pageContainer}>
        <DeveloperTeam paginationSystem={true} contentPerPage="6" />
      </div>
    </>
  );
}
