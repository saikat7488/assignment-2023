import React from "react";
import style from "./BobbleAnimation.module.css";

export default function BobbleAnimation({ bubble = 5, message="Loading...." }) {
  const renderBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < bubble; i++) {
      bubbles.push(<div key={i} className={style.bubble}></div>);
    }
    return bubbles;
  };

  return (
    <div className={style.animationBody}>
      <div className={style.loader}>
        {renderBubbles()}
      </div>
      <div className={style.message}>
        {message}
      </div>
    </div>
  );
}
