import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className={style.footerContainer}>
        <div className={`conatiner-fluid ${style.customConatiner}`}>
          <div className={`row ${style.customRow}`}>
            <div className="col-md-6 col-sm-12 col-lg-3">
              <div className={style.footerIcon}>WorldCoder</div>
              <div className={style.footerText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                veritatis incidunt sint nulla adipisci quisquam! Corporis
                repellat, animi maxime harum facilis tempore iure consequuntur.
              </div>
              <ul className={style.socialIcons}>
                <li>
                  <i className="ri-facebook-line"></i>
                </li>
                <li>
                  <i className="ri-instagram-line"></i>
                </li>
                <li>
                  <i className="ri-twitter-fill"></i>
                </li>
                <li>
                  <i className="ri-dribbble-line"></i>
                </li>
                <li>
                  <i className="ri-github-fill"></i>
                </li>
                <li>
                  <i className="ri-linkedin-box-line"></i>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-2">
              <div className={style.footerTitle}>Services</div>
              <ul className={style.footerListItems}>
                <li>
                  <Link className={style.linkItem} to="/course">
                    Course
                  </Link>
                </li>
                <li>
                  <Link className={style.linkItem} to="/development">
                    Development
                  </Link>
                </li>
              </ul>

              <div className={style.footerTitle}>Community</div>
              <ul className={style.footerListItems}>
                <li>
                  <Link className={style.linkItem} to="/blog">
                    Blog
                  </Link>
                </li>
                <li>Forms</li>
                <li>Q&A</li>
                <li>Purpose</li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-2">
              <div className={style.footerTitle}>Menu</div>
              <ul className={style.footerListItems}>
                <li>
                  <Link className={style.linkItem} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className={style.linkItem} to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className={style.linkItem} to="/courses">
                    Course
                  </Link>
                </li>
                <li>
                  <Link className={style.linkItem} to="/development">
                    Development
                  </Link>
                </li>
                <li>
                  <Link className={style.linkItem} to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className={style.linkItem} to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className={style.linkItem} to="/team">
                    Team
                  </Link>
                </li>
                <li>
                  <Link className={style.linkItem} to="/testimonial">
                    Testimonial
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-2">
              <div className={style.footerTitle}>About Us</div>
              <ul className={style.footerListItems}>
                <li>
                  <Link className={style.linkItem} to="/team">
                    Team
                  </Link>
                </li>
                <li>
                  <Link className={style.linkItem} to="/about">
                    History
                  </Link>
                </li>
                <li>
                  <Link className={style.linkItem} to="/about">
                    Company
                  </Link>
                </li>
                <li>
                  <Link className={style.linkItem} to="/contact">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-3">
              <div className={style.footerTitle}>OUR NEWSLETTER</div>
              <div className={style.footerText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                veritatis incidunt sint nulla adipisci quisquam! Corporis
                repellat, animi maxime harum facilis tempore iure consequuntur.
              </div>
              <div className={style.footerForm}>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <input
                    className={`${style.textInput}`}
                    type="text"
                    name="footer_email"
                    id="footer_email"
                    placeholder="Eamil Address"
                  />
                  <button className={`btn btn-secondary`} type="button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.copyRight}>
          Copyright ©2023 All rights reserved | This template is made with by{" "}
          <span style={{ fontWeight: "bolder" }}>WorldCoderMaster</span>
        </div>
      </div>
    </>
  );
}
