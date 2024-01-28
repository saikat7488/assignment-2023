// BubblesAnimation.js
import React, { useEffect, useState } from "react";
import style from "./BubblesAnimation.module.css";

const BubblesAnimation = ({ numBubbles }) => {
  const [cloudPositions, setCloudPositions] = useState([]);

  useEffect(() => {
    const initialPositions = Array.from({ length: numBubbles }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 50,
    }));

    setCloudPositions(initialPositions);

    const updateCloudPositions = () => {
      setCloudPositions((prevPositions) =>
        prevPositions.map((position) => ({
          top: (position.top + 2) % 100,
          left: position.left,
        }))
      );
    };

    const intervalId = setInterval(updateCloudPositions, 50);

    return () => clearInterval(intervalId);
  }, [numBubbles]);

  return (
    <div className={style.cloudsContainer}>
      {cloudPositions.map((position, index) => (
        <img
          key={index}
          className={style.cloud}
          src={require(`../../../assets/images/animation/cloud.png`)}
          alt={`Cloud ${index + 1}`}
          style={{ top: `${position.top}%`, left: `${position.left}%` }}
        />
      ))}
    </div>
  );
};

export default BubblesAnimation;
