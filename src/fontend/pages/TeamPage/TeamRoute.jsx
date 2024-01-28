import React, { useEffect } from "react";
import style from "./TeamRoute.module.css";
import Team from '../../components/teamComponent/Team'

export default function TeamRoute() {
  useEffect(() => {
    document.title = 'WorldCoder | Team';
  }, []);
  return (
    <>
      <div className={style.pageContainer}>
        <Team paginationSystem={true} contentPerPage="6" />
      </div>
    </>
  );
}
