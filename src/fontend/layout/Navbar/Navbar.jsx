import React, { useState } from "react";
import navStyle from "./navbar.module.css";

import { Link, useNavigate } from "react-router-dom";
import { menuItems } from "./menuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import LogoImage from "../../../assets/images/logo10.png";

// Import AuthContext
import { useAuth } from "../../../contextApi/AuthContext";
// Import ModelContext
import { useModelContext } from "../../../contextApi/ModelContext";

export default function Navbar() {
  // Use AuthContext
  const { isAuthenticated, user, logout } = useAuth();

  // Use ModelContext
  const { modelOn, setModelOn } = useModelContext();

  //Home Navigate
  const homeURLNaviagte = useNavigate();

  // Check if the user object exists and has an 'id' property
  const loggedUserId = user && user[0]?.id;
  const loggedUserName = user && user[0]?.userName;
  const loggedUserProfilePic = user && user[0]?.image;

  const [click, setClick] = useState(false);

  const handleToggle = () => {
    setClick(!click);
  };

  const handleSignInSignOut = () => {
    setModelOn(!modelOn);
    logout();
    homeURLNaviagte("/");
  };

  const sidebarControl = () => {
    setClick(false);
  };

  return (
    <>
      <div className={navStyle.navbarContainer}>
        <div className={navStyle.logoContainer}>
          <Link to="/">
            <img src={LogoImage} alt="Logo" className={navStyle.navIcon} />
          </Link>
        </div>

        <div className={`${navStyle.menubarIconContainer} ${click ? navStyle.transparentMenu : ''}`}>
          <FontAwesomeIcon
            onClick={handleToggle}
            icon={click ? faXmark : faBars}
            className={navStyle.menubarIcon}
          />
        </div>

        <div
          className={`${navStyle.navContent} ${
            click ? navStyle.active : navStyle.disable
          }`}
        >
          <ul className={navStyle.navItems}>
            {menuItems &&
              menuItems.map((item, index) => {
                return (
                  <li key={index}>
                    {item.url === "/profile" ? (
                      !isAuthenticated ? (
                        <Link
                          className={`${navStyle.navLink} ${navStyle.authenticatedFalse}`}
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <Link
                          to={`/profile/${loggedUserId}`}
                          className={navStyle.navLink}
                          onClick={sidebarControl}
                        >
                          {isAuthenticated &&
                            loggedUserProfilePic &&
                            loggedUserName && (
                              <img
                                src={require(`../../../assets/images/users/${loggedUserProfilePic}.jpg`)}
                                alt={loggedUserName}
                                className={navStyle.navProfileImage}
                              />
                            )}
                        </Link>
                      )
                    ) : (
                      <Link
                        to={item.url}
                        className={navStyle.navLink}
                        onClick={sidebarControl}
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                );
              })}
          </ul>

          <button
            className={navStyle.signInOutBtn}
            onClick={handleSignInSignOut}
          >
            {isAuthenticated && isAuthenticated === true
              ? "Sign Out"
              : "Sign In"}
          </button>
        </div>
      </div>
    </>
  );
}
