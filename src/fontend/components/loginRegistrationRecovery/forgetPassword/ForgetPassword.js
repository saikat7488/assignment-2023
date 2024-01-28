import React from "react";
import forgetStyle from "./ForgetPassword.module.css";

export default function ForgetPassword({ handleSelectedSection }) {
  return (
    <>
      <div className={forgetStyle.forget_section} id="forgetPassword">
        <div className={forgetStyle.top_icon}>
          <i className="fa fa-key" aria-hidden="true"></i>
        </div>
        <div className={forgetStyle.form_box}>
          <h4 className={forgetStyle.title_text}>Forget Password</h4>
          <form>
            <div className={forgetStyle.input_box}>
              <span className={forgetStyle.icon}>
                <i className="fa fa-envelope"></i>
              </span>
              <input
                type="text"
                name=""
                id="forget_password"
                required
                autoComplete="off"
              />
              <label htmlFor="forget_password">Enter Your Email</label>
            </div>

            <button className={forgetStyle.send_btn}>Send</button>

            <div className={forgetStyle.login_account}>
              <div>All ready have an account?</div>
              <span
                id="toLogin"
                onClick={() => {
                  handleSelectedSection(0);
                }}
              >
                Login
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
