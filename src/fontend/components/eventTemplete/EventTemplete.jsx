import React from "react";
import style from "./EventTemplete.module.css";
import Head from "../ComponentHeading/Head";
import EventCard from "./EventCard";

export default function EventTemplete() {
  return (
    <>
      <div className={style.customContainer}>
        <Head
          title="UpComing Events"
          textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit!"
          textTwo="Lorem ipsum dolor sit amet consectetur."
        />
        <div className={style.section_container}>
          <ul className={style.tab_container}>
            <li>
              <input type="radio" name="tab" id="tab_1" defaultChecked />
              <div
                className={style.customLabel}
                onClick={() => document.getElementById("tab_1").click()}
              >
                Day 01 <span className={style.date}>(1st, January)</span>
              </div>

              <div className={style.tab_content}>
                <div className="row">
                  <EventCard
                    time="10:30am to 12:30pm"
                    title="Unleashing Creativity in Digital Design"
                  />
                  <EventCard
                    time="12:30pm to 02:30pm"
                    title="Navigating the Future of Information Technology"
                  />
                  <EventCard
                    time="02:30pm to 04:30pm"
                    title="Strategies for Effective Team Management"
                  />
                  <EventCard
                    time="04:30pm to 06:30pm"
                    title=" Explore the World Through Words"
                  />
                </div>
              </div>
            </li>
            <li>
              <input type="radio" name="tab" id="tab_2" />
              <div
                className={style.customLabel}
                onClick={() => document.getElementById("tab_2").click()}
              >
                Day 02 <span className={style.date}>(2nd, January)</span>
              </div>
              <div className={style.tab_content}>
                <div className="row">
                  <EventCard
                    time="10:30am to 12:30pm"
                    title="Dive into the World of Big Data"
                  />
                  <EventCard
                    time="12:30pm to 02:30pm"
                    title="Work and Life for Peak Performance"
                  />
                  <EventCard
                    time="02:30pm to 04:30pm"
                    title="From Idea to Business Success"
                  />
                  <EventCard
                    time="04:30pm to 06:30pm"
                    title="Sustainable Solutions for a Better Tomorrow"
                  />
                </div>
              </div>
            </li>
            <li>
              <input type="radio" name="tab" id="tab_3" />
              <div
                className={style.customLabel}
                onClick={() => document.getElementById("tab_3").click()}
              >
                Day 03 <span className={style.date}>(2rd, January)</span>
              </div>

              <div className={style.tab_content}>
                <div className="row">
                  <EventCard
                    time="10:30am to 12:30pm"
                    title="Enhancing Focus and Learning"
                  />
                  <EventCard
                    time="12:30pm to 02:30pm"
                    title="Achieve Your Wellness Goals"
                  />
                  <EventCard
                    time="02:30pm to 04:30pm"
                    title="Building a Solid Foundation for Wealth"
                  />
                  <EventCard
                    time="04:30pm to 06:30pm"
                    title="Exploring the Future of Automation and AI"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
