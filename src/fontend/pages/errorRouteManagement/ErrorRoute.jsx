import React from "react";
import style from "./ErrorRoute.module.css";
import { Link } from "react-router-dom";

const ErrorRoute = ({
  header_text,
  errorText,
  errorTextDescription,
  gallery,
}) => {
  return (
    <div className={style.notMatchContainer}>
      <h2 className={style.opps}>{header_text}</h2>
      <h1 className={style.errorPage}>{errorText}</h1>
      <p className={style.notExist}>{errorTextDescription}</p>
      <div className={style.design404}>
        <div className={`${style.error404} ${style.image_1}`}>
          <img
            src={require(`../../../assets/images/error/${gallery}/error_1.png`)}
            alt=""
          />
        </div>
        <div className={`${style.error404} ${style.image_2}`}>
          <img
              src={require(`../../../assets/images/error/${gallery}/error_2.png`)}
            alt=""
          />
        </div>
        <div className={`${style.error404} ${style.image_3}`}>
          <img
               src={require(`../../../assets/images/error/${gallery}/error_3.png`)}
            alt=""
          />
        </div>
      </div>
      <div className={style.goToHome}>
        <Link to="/" className={style.homeURL}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorRoute;
