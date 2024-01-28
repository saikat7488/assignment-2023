import React from "react";
import style from "./ContactAndBasicInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

// AuthContext
import { useAuth } from "../../../../contextApi/AuthContext";

export default function ContactAndBasicInfo({ data }) {
  const { address, email } = data;
  const { street, state, city, country } = address;

  //Authentication User
  const { isAuthenticated, user } = useAuth();
  const { id: loggedUserId } = user && user[0] ? user[0] : {};

  return (
    <>
      <div className={style.contactAndBasicInfoContainer}>
        <div className={style.contactDetails}>
          <div className={style.contactCard}>
            <div className={style.iocn}>
              <FontAwesomeIcon
                className={style.fontAwesomeIcon}
                icon={faLocationDot}
              />
            </div>
            <div className={style.title}>ADDRESS</div>
            <div className={style.text}>
              <span>{data && street}</span>,<span>{data && state}</span>,
            </div>
            <div className={style.text}>
              <span>{data && city}</span>,<span>{data && country}</span>
            </div>
          </div>
          <div className={style.contactCard}>
            <div className={style.iocn}>
              <FontAwesomeIcon
                className={style.fontAwesomeIcon}
                icon={faPhone}
              />
            </div>
            <div className={style.title}>PHONE NUMBER</div>
            <div className={style.text}>
              <span>235-2865-2389</span>,<span>856-8439-4738</span>,
            </div>
          </div>
          <div className={style.contactCard}>
            <div className={style.iocn}>
              <FontAwesomeIcon
                className={style.fontAwesomeIcon}
                icon={faEnvelope}
              />
            </div>
            <div className={style.title}>EMAIL</div>
            <div className={style.text}>
              <span>{data && email}</span>
            </div>
          </div>
          <div className={style.contactCard}>
            <div className={style.iocn}>
              <FontAwesomeIcon
                className={style.fontAwesomeIcon}
                icon={faHeart}
              />
            </div>
            <div className={style.title}>SOCIAL</div>
            <div className={style.socialMediaGroup}>
              <li className={style.spcialLinkListItem}>
                <i className={`fab fa-facebook`}></i>
              </li>
              <li className={style.spcialLinkListItem}>
                <i className={`fab fa-linkedin`}></i>
              </li>
              <li className={style.spcialLinkListItem}>
                <i className={`fab fa-twitter`}></i>
              </li>
              <li className={style.spcialLinkListItem}>
                <i className={`fab fa-github`}></i>
              </li>
              <li className={style.spcialLinkListItem}>
                <i className={`fab fa-dribbble`}></i>
              </li>
              <li className={style.spcialLinkListItem}>
                <i className={`fab fa-instagram`}></i>
              </li>
            </div>
          </div>
        </div>

        {/* messageMe */}
        {isAuthenticated && loggedUserId !== data.id && (
          <div className={style.messageMe}>
            <form>
              <div className={style.formDesign}>
                <div className={style.formBox}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter a Subject"
                  />
                  <i></i>
                </div>
                <div className={style.formBox}>
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter a Title"
                  />
                  <i></i>
                </div>
              </div>
              <div className={style.formBox}>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Enter a message"
                ></textarea>
                <i></i>
              </div>
              <div>
                <button
                  className={style.submitBtn}
                  onClick={(e) => e.preventDefault()}
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
