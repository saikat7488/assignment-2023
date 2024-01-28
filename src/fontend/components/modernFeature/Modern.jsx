import React from "react";
import modernStyle from "./morder.module.css";
import Head from "../ComponentHeading/Head";

export default function Modern() {
  return (
    <>
      <div className={modernStyle.customSection}>
        <div className={`${modernStyle.customContainer}`}>
          <div className={`row`}>
            <div className={`col-md-12`}>
              <Head
                title="Morder Feature"
                textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
                textTwo="Lorem ipsum dolor sit amet consectetur."
              />
            </div>
          </div>
          <div className={`row`}>
            <div
              className={`col-sm-12 col-md-6 col-lg-4 order-2 order-md-2 order-lg-1 mb-4`}
            >
              <div className={modernStyle.featureItems}>
                <div className={modernStyle.featureItem}>
                  <h4>Flexibility</h4>
                  <p>
                    Online education allows students to learn at their own pace
                    and on their own schedule. This flexibility is especially
                    beneficial for us.
                  </p>
                </div>
                <div className={modernStyle.featureItem}>
                  <h4>Accessibility</h4>
                  <p>
                    Online courses can be accessed from anywhere with an
                    internet connection, eliminating the need to commute to a
                    physical location.
                  </p>
                </div>
                <div className={modernStyle.featureItem}>
                  <h4>Wide Range of Courses</h4>
                  <p>
                    Online platforms offer a diverse selection of courses,
                    ranging from academic subjects to professional skills and
                    hobbies.
                  </p>
                </div>
                <div className={modernStyle.featureItem}>
                  <h4>Global Learning</h4>
                  <p>
                    Students can connect with instructors and peers from around
                    the world, providing opportunities for diverse perspectives
                    and cultural exchange.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`col-sm-12 col-md-12 col-lg-4 order-1 order-md-1 order-lg-2 ${modernStyle.imageConatiner}`}
            >
              <div className={modernStyle.imagePosition}>
                <img
                  src={require(`../../../assets/images/modernSection3.png`)}
                  alt=""
                />{" "}
              </div>
            </div>
            <div
              className={`col-sm-12 col-md-6 col-lg-4 order-3 order-md-3 order-lg-3`}
            >
              <div className={modernStyle.featureItems}>
                <div className={modernStyle.featureItem}>
                  <h4>Personalized Learning</h4>
                  <p>
                    Some online platforms use algorithms and data analysis to
                    tailor the learning experience to individual preferences and
                    needs.
                  </p>
                </div>
                <div className={modernStyle.featureItem}>
                  <h4>Immediate Feedback</h4>
                  <p>
                    Online assessments and quizzes often provide instant
                    feedback, helping students gauge their understanding and
                    identify areas for improvement.
                  </p>
                </div>
                <div className={modernStyle.featureItem}>
                  <h4>Skill Development</h4>
                  <p>
                    Online courses cater to skill development, allowing
                    individuals to learn specific skills relevant to their
                    careers or interests.
                  </p>
                </div>
                <div className={modernStyle.featureItem}>
                  <h4>Recorded Lectures</h4>
                  <p>
                    Recorded lectures and course materials can be revisited at
                    any time, allowing students to review and reinforce their
                    learning.
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
