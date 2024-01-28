import React, { useState, useEffect } from "react";
import style from "./testimonial.module.css";

import { useNavigate } from "react-router-dom";

export default function TestimonialCard({ todo }) {
  const [authorData, setAuthorData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const profileNavigate = useNavigate();

  const findData = async (id) => {
    const res = await fetch(
      `https://dbforassignment2023.onrender.com/user_data/${id}`
    );
    const result = await res.json();
    setAuthorData(result);
    setIsLoading(false);
  };

  useEffect(() => {
    if (todo && todo.authId) {
      findData(todo.authId);
    }
  }, [todo, todo.authId]);

  return (
    <div className="col-md-6">
      <div className={style.main_area}>
        <div className={style.left}>
          <img
            src={require(`../../../assets/images/users/${
              !isLoading && authorData
                ? authorData.image + ".jpg" || "default.jpg"
                : "default.jpg"
            }`)}
            alt=""
            onClick={() => profileNavigate(`/profile/${authorData.id}`)}
          />
        </div>
        <div className={style.right}>
          <i className={`fas fa-quote-left ${style.quoteIcon}`}></i>
          {todo ? todo.comment : "Loading"}
          <div className={style.comment}>
            - {authorData ? authorData.fullName : "Loading"},
            <span className={style.job_position}>
              - {authorData ? authorData.role : "Loading"},
            </span>
            <span className={style.institution}>WOELDCODERMASTER</span>
          </div>
        </div>
      </div>
    </div>
  );
}
