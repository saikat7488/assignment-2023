import React, { useState } from "react";
import counterStyle from "./counter.module.css";
import CounterUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faBook,
  faUsers,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

export default function Counter() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className={counterStyle.layoutSetting}>
          <div className={counterStyle.customCounter}>
            <div className={`row`}>
              <div
                className={`col-sm-6 col-md-6 col-lg-3 d-flex align-items-center`}
              >
                <div className={counterStyle.counterBody}>
                  <div className={counterStyle.counterIcon}>
                    <FontAwesomeIcon icon={faBook} />
                  </div>
                  <div className={counterStyle.counterContent}>
                    <div className={counterStyle.counterNumber}>
                      {counterOn && (
                        <CounterUp
                          start={0}
                          end={3000}
                          duration={6}
                          delay={0}
                          className={counterStyle.counterUp}
                        />
                      )}
                    </div>
                    <div className={counterStyle.counterCaption}>
                      SUCCESS STORIES
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`col-sm-6 col-md-6 col-lg-3 d-flex align-items-center`}
              >
                <div className={counterStyle.counterBody}>
                  <div className={counterStyle.counterIcon}>
                    <FontAwesomeIcon icon={faTrophy} />
                  </div>
                  <div className={counterStyle.counterContent}>
                    <div className={counterStyle.counterNumber}>
                      {counterOn && (
                        <CounterUp start={0} end={600} duration={6} delay={0} className={counterStyle.counterUp}/>
                      )}
                    </div>
                    <div className={counterStyle.counterCaption}>COURSES</div>
                  </div>
                </div>
              </div>
              <div
                className={`col-sm-6 col-md-6 col-lg-3 d-flex align-items-center`}
              >
                <div className={counterStyle.counterBody}>
                  <div className={counterStyle.counterIcon}>
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <div className={counterStyle.counterContent}>
                    <div className={counterStyle.counterNumber}>
                      {counterOn && (
                        <CounterUp start={0} end={320} duration={6} delay={0} className={counterStyle.counterUp}/>
                      )}
                    </div>
                    <div className={counterStyle.counterCaption}>
                      TRUSTED TUTORS
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`col-sm-6 col-md-6 col-lg-3 d-flex align-items-center`}
              >
                <div className={counterStyle.counterBody}>
                  <div className={counterStyle.counterIcon}>
                    <FontAwesomeIcon icon={faCalendarDays} />
                  </div>
                  <div className={counterStyle.counterContent}>
                    <div className={counterStyle.counterNumber}>
                      {counterOn && (
                        <CounterUp
                          start={0}
                          end={1000}
                          duration={6}
                          delay={0}
                          className={counterStyle.counterUp}
                        />
                      )}
                    </div>
                    <div className={counterStyle.counterCaption}>SCHEDULES</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}
