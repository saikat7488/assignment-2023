import React from "react";
import style from "./EventCard.module.css";
import EventSVG from "./EventSVG";

export default function EventCard({ time, title }) {
  return (
    <div className="col-md-6">
      <div
        className={style.media}
      >
        <div className={style.media_left}>
          <span>
            <EventSVG/>
          </span>
        </div>
        <div className={style.media_body}>
          <h4 className={style.media_heading_time}>{time}</h4>
          <h5 className={style.media_heading_title}>{title}</h5>
          <p className={style.media_description}>
            Simon is designer and partner at Fictivekin and has worked in a
            variety of situations htmlFor bands, record labels, governments,
            polar explorers, and most other things.
          </p>
        </div>
      </div>
    </div>
  );
}
