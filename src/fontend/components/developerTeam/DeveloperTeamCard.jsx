import React from "react";
import style from "./DeveloperTeamCard.module.css";
import { useNavigate } from "react-router-dom";
import textHandler from "../../utility/textHandler";

export default function DeveloperTeamCard({ todo }) {
  const profileNavigate = useNavigate();

  return (
    <>
      <div className={style.cardDesign} key={Math.random()}>
        <div className={style.cardHeader}>
          <div className={style.cardHeaderImage}>
            <img
              src={require(`../../../assets/images/users/${
                todo ? todo.image + ".jpg" : "default.jpg"
              }`)}
              alt=""
              onClick={() => profileNavigate(`/profile/${todo.id}`)}
            />
          </div>
          <div className={style.cardHeaderInformation}>
            <div className={style.cardHeaderFirstText}>
              {todo ? todo.fullName : "Loading"}
            </div>
            <div className={style.cardHeaderSecondText}>
              {todo ? todo.email : "Loading"}
            </div>
          </div>
          <div className={style.cardHeaderContent}>
            <div className={style.cardHeaderContentCenter}>
              {todo ? todo.expertise : "Loading"}
            </div>
          </div>
        </div>
        <div className={style.cardBody}>
          <div className={style.cardBodyInformation}>
            <div className={style.cardBodyInformationLeft}>
              <div className={style.top}>Projects</div>
              <div className={style.bottom}>41</div>
            </div>
            <div className={style.cardBodyInformationCenter}>
              <div className={style.top}>Following</div>
              <div className={style.bottom}>12K</div>
            </div>
            <div className={style.cardBodyInformationRight}>
              <div className={style.top}>Follower</div>
              <div className={style.bottom}>35k</div>
            </div>
          </div>
          <div className={style.cardBodyText}>
            <p>{todo ? textHandler(todo.bio, 127, true) : "Loading"}</p>
          </div>
          <div className={style.cardSocialMedia}>
            <ul>
              <li className={style.facebookColor}>
                <i className={`fab fa-facebook`}></i>
              </li>
              <li className={style.instagramColor}>
                <i className="fab fa-instagram"></i>
              </li>
              <li className={style.linkedinColor}>
                <i className="fab fa-linkedin"></i>
              </li>
              <li className={style.githubColor}>
                <i className="fab fa-github"></i>
              </li>
              <li className={style.twitterColor}>
                <i className="fab fa-twitter"></i>
              </li>
            </ul>
          </div>
          <div className={style.cardAction}>
            <div className={style.message}> Message</div>
            <div className={style.following}> Following </div>
            <div
              className={style.viewProfile}
              onClick={() => profileNavigate(`/profile/${todo.id}`)}
            >
              View Profile
            </div>
          </div>
        </div>
        <div className={style.cardFooter}>
          <div className={style.cardFooterHeading}>Skills</div>
          <ul className={style.cardfooterItems}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </>
  );
}
