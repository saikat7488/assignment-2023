import React from "react";
import teamStyle from "./team.module.css";

export default function TeamCard({ todo }) {
  return (
    <>
      <div className={teamStyle.cardBox}>
        <div className={teamStyle.coverImage}>
          <img
            src={require(`../../../assets/images/team_section_cover.jpg`)}
            alt=""
          />
        </div>
        <div className={teamStyle.publicImage}>
          <img
            src={require(`../../../assets/images/users/${
              todo ? todo.image : "default.jpg"
            }`)}
            alt=""
          />
        </div>
        <div className={teamStyle.cardContent}>
          <h4>{todo ? todo.fullName : "Loading"}</h4>
          <span>
            <i className={`fas fa-code`}></i>
            {todo ? todo.expertise : "Loading"}
          </span>
          <p>{todo ? todo.bio : "Loading"}</p>
          <div className={teamStyle.social_icon}>
            <i className={`fab fa-facebook`}></i>
            <i className={`fab fa-twitter`}></i>
            <i className={`fab fa-github`}></i>
            <i className={`fab fa-instagram`}></i>
          </div>
        </div>
      </div>
    </>
  );
}
