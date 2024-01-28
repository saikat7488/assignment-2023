import React from "react";
import aboutStyle from "./aboutUs.module.css";
import Head from "../ComponentHeading/Head";

export default function AboutUs() {
  return (
    <>
      <div className={aboutStyle.customContainer}>
        {/* <!-- --customContainer-- --> */}
        <div className={aboutStyle.sectionConatiner}>
          {/* <!-- --About-- --> */}
          <div className={`${aboutStyle.about} d-flex`}>
            {/* <!-- --about-cards-- --> */}
            <div className={`${aboutStyle.aboutCards} d-flex`}>
              {/* <!-- --about-card-- --> */}
              <div className={`${aboutStyle.aboutCard}`}>
                <h3>Professional Support</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  tenetur quibusdam iure accusantium provident aut pariatur
                  itaque deserunt molestiae voluptatum?
                </p>
              </div>
              <div className={`${aboutStyle.aboutCard}`}>
                <h3>Trusted Authority</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  tenetur quibusdam iure accusantium provident aut pariatur
                  itaque deserunt molestiae voluptatum?
                </p>
              </div>
              <div className={`${aboutStyle.aboutCard}`}>
                <h3>Planning and Executing</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  tenetur quibusdam iure accusantium provident aut pariatur
                  itaque deserunt molestiae voluptatum?
                </p>
              </div>
            </div>
            {/* <!-- --about-content-- --> */}
            <div className={`${aboutStyle.aboutContent}`}>
              {/* <h2>About Us</h2> */}
              <Head
                title="About Us"
                textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
                textTwo="Lorem ipsum dolor sit amet consectetur."
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                excepturi unde temporibus, reiciendis illum cum atque, earum
                corrupti eius dolorem nobis nisi veniam hic architecto! Tempora
                sunt cum distinctio quidem! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Quas, aut!
              </p>
              <span className={`${aboutStyle.customRow} ${aboutStyle.explore}`}>
                Explore
                <span className="fas fa-arrow-right"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
