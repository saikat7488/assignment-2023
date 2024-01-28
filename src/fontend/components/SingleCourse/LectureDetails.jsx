import React, { useState, useEffect } from "react";
import style from "./LectureDetails.module.css";

const LectureComponent = ({ lecture }) => {
  const [rotationAngles, setRotationAngles] = useState([-30, -15, 0, 15, 30]);

  const updateRotationAngles = () => {
    if (window.innerWidth <= 991) {
      // Update rotation angles for small screens
      setRotationAngles([60, 75, 90, 105, 120]); // Adjust these values as needed
    } else {
      // Reset rotation angles for larger screens
      setRotationAngles([-30, -15, 0, 15, 30]);
    }
  };

  useEffect(() => {
    // Update rotation angles on component mount and window resize
    updateRotationAngles();

    const handleResize = () => {
      updateRotationAngles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const circleStyle = {
    width: "2rem",
    height: "2rem",
    background: "rgba(30, 30, 30, 0.5)",
    borderRadius: "50%",
    position: "relative",
  };

  const lineStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "180px",
    height: "4px", 
    background: "rgba(30, 30, 30, 0.5)",
    transformOrigin: "0% 50%",
  };

  return (
    <div className={style.lecture_container}>
      <div className={style.left_content}>
        <div className={style.leftGroup}>
          <div className={style.circle}>{lecture}</div>
          <div style={circleStyle} className={style.lineCircle}>
            {rotationAngles.map((angle, index) => (
              <div
                className={style.arrayLine}
                key={index}
                style={{
                  ...lineStyle,
                  transform: `rotate(${angle}deg)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={style.right_content}>
        <div className={style.topic_box}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          itaque. 1
        </div>
        <div className={style.topic_box}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          itaque. 2
        </div>
        <div className={style.topic_box}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          itaque. 3
        </div>
        <div className={style.topic_box}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          itaque. 4
        </div>
        <div className={style.topic_box}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          itaque. 5
        </div>
      </div>
    </div>
  );
};

export default LectureComponent;
