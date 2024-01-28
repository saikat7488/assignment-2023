import React, { useState } from "react";
import loginStyle from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// Import AuthContext
import { useAuth } from "../../../../contextApi/AuthContext.jsx";
// Import ModelContext
import { useModelContext } from "../../../../contextApi/ModelContext.jsx";

export default function Login({ handleSelectedSection }) {
  // Use AuthContext
  const { login } = useAuth();
  // Use ModelContext
  const { setModelOn } = useModelContext();

  const [signInEmail, setSignInEmail] = useState("claud.ziemann510@gmail.com");
  const [signInPassword, setSignInPassword] = useState("123456");
  const [eye, setEye] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  // Focus Input Field
  const handleFocus = (filedStatus) => {
    if (filedStatus === "signInEmail") {
      setIsFocusedEmail(true);
    }

    if (filedStatus === "signInPassword") {
      setIsFocusedPassword(true);
    }
  };

  const handleBlur = (filedStatus) => {
    if (filedStatus === "signInEmail") {
      setIsFocusedEmail(false);
    }

    if (filedStatus === "signInPassword") {
      setIsFocusedPassword(false);
    }
  };

  const handleEye = () => {
    setEye(!eye);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await login(signInEmail, signInPassword);
      // If login is successful
      setModelOn(false);
    } catch (error) {
      setError(error);
      // If login fails
      setModelOn(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={loginStyle.login_section} id="logIn">
        <div className={loginStyle.top_icon}>
          <i className="fa fa-sign-in" aria-hidden="true"></i>
        </div>
        <div className={loginStyle.form_box}>
          <h4 className={loginStyle.title_text}>Sign In</h4>
          <form onSubmit={handleSubmit} className={loginStyle.onSubmit}>
            <div className={loginStyle.inputFildSection}>
              <div className={loginStyle.input_box}>
                <span className={loginStyle.icon}>
                  <i className="fa fa-envelope"></i>
                </span>
                <input
                  type="text"
                  name="signInEmail"
                  id="signInEmail"
                  defaultValue={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                  required
                  onFocus={() => handleFocus("signInEmail")}
                  onBlur={() => handleBlur("signInEmail")}
                  placeholder={
                    isFocusedEmail ? "claud.ziemann510@gmail.com" : ""
                  }
                  autoComplete="off"
                />
                <label htmlFor="signInEmail">Email</label>
              </div>
            </div>
            {/* *********** */}
            <div className={loginStyle.inputFildSection}>
              <div className={loginStyle.input_box}>
                <input
                  type={eye ? "password" : "text"}
                  name="signInPassword"
                  id="signInPassword"
                  defaultValue={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                  required
                  onFocus={() => handleFocus("signInPassword")}
                  onBlur={() => handleBlur("signInPassword")}
                  placeholder={isFocusedPassword ? "123456" : ""}
                />
                <label htmlFor="signInPassword">Password</label>
                <FontAwesomeIcon
                  icon={eye ? faEyeSlash : faEye}
                  className={loginStyle.eyeIcon}
                  onClick={handleEye}
                />
                <span
                  className={`${loginStyle.icon} ${loginStyle.icon_disable}`}
                >
                  <i className={`fa fa-lock`}></i>
                </span>
              </div>
            </div>

            <div className={loginStyle.remember_signInPassword}>
              <div className={loginStyle.checkbox_control}>
                <input type="checkbox" id="checkboxLogin" />
                <label htmlFor="checkboxLogin">Remember me</label>
              </div>
              <span
                id="toRecovery"
                onClick={() => {
                  handleSelectedSection(2);
                }}
              >
                Forgot Password?
              </span>
            </div>

            {error && <div className={loginStyle.error_message}>{error}</div>}

            <button
              type="submit"
              className={loginStyle.signin_btn}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <div className={loginStyle.create_account}>
              <div>Not registered yet?</div>
              <span
                id="toCreate"
                onClick={() => {
                  handleSelectedSection(1);
                }}
              >
                Create an account?
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
