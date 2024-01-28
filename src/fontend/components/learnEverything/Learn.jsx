import React, { useState } from "react";
import learnStyle from "./learn.module.css";
import Head from "../ComponentHeading/Head";
//svg icon
import OnlineCourse from "./OnlineCourse";
import Certificates from "./Certificates";
import Expert from "./Expert";

export default function Learn() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <>
      <div className={learnStyle.customContainer}>
        <div className={`row`}>
          <div className={`d-none col-md-6 d-md-block`}>
            <div className={learnStyle.sectionImage}></div>
          </div>
          <div className={`col-md-6`}>
            <Head
              title="Benefits About Online Learning Expertise"
              textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
              textTwo="Lorem ipsum dolor sit amet consectetur."
            />
            <div className={learnStyle.cardDesign}>
              <div
                className={learnStyle.card}
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
              >
                <div className={learnStyle.leftContent}>
                  <OnlineCourse isHovered={isHovered1} />
                </div>
                <div className={learnStyle.rightContent}>
                  <h4>Online Courses</h4>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              {/* ************************* */}
              <div
                className={learnStyle.card}
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              >
                <div className={learnStyle.leftContent}>
                  <Certificates isHovered={isHovered2} />
                </div>
                <div className={learnStyle.rightContent}>
                  <h4>Earn A Certificates</h4>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              {/* ************************* */}
              <div
                className={learnStyle.card}
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
              >
                <div className={learnStyle.leftContent}>
                  <Expert isHovered={isHovered3} />
                </div>
                <div className={learnStyle.rightContent}>
                  <h4>Learn with Expert</h4>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
