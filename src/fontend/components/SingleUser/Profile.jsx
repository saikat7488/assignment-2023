import React, { useContext } from "react";
import style from "./Profile.module.css";
// IMPORT
import SocialLinks from "./SocialLinks";
import Expertise from "./Expertise";
// CustomSkeleton
import CustomSkeletonLoader from "../../../customSkeloton/CustomSkeletonLoader";

// AuthContext
import { useAuth } from "../../../contextApi/AuthContext";
import { ProfileContext } from "../../../contextApi/ProfileContext";

export default function Profile({ todo }) {
  // AuthContext Context
  const { isAuthenticated, user } = useAuth();
  const { id: loggedUserId } = user && user[0] ? user[0] : {};

  // Profile Context
  const data = useContext(ProfileContext) || {};
  const { profileData = {} } = data;
  const { userData } = profileData;

  return (
    <>
      <div className={style.profileContainer}>
        <div className={style.profileCard}>
          {isAuthenticated && loggedUserId === userData?.id && (
            <div className={style.editProfile}>Edit Profile</div>
          )}

          <div className={style.userImage}>
            <img
              src={require(`../../../assets/images/users/${
                todo ? todo.image.replace(".jpg", "") + ".jpg" : "default.jpg"
              }`)}
              alt=""
            />
          </div>

          {todo ? (
            <div className={style.fullName}>{todo.userName}</div>
          ) : (
            <CustomSkeletonLoader
              count={1}
              position="center"
              width="40%"
              height="26px"
            />
          )}

          {todo ? (
            <div className={style.fullName}>{todo.fullName}</div>
          ) : (
            <CustomSkeletonLoader
              count={1}
              position="center"
              width="40%"
              height="26px"
            />
          )}

          {todo ? (
            <div className={style.emailAddress}>{todo.email}</div>
          ) : (
            <CustomSkeletonLoader
              count={1}
              position="center"
              width="70%"
              height="26px"
            />
          )}

          {todo?.role === "teacher" && (
            <div className={style.expertise}>
              {todo ? (
                <Expertise data={todo?.expertise} />
              ) : (
                <CustomSkeletonLoader
                  count={1}
                  position="center"
                  width="40%"
                  height="26px"
                />
              )}
            </div>
          )}

          <div className={style.roleGenderAgeDiv}>
            {todo ? (
              <div className={style.role}>{todo.role}</div>
            ) : (
              <CustomSkeletonLoader count={1} width="40px" height="20px" />
            )}

            {todo ? (
              <div className={style.gender}>{todo?.gender}</div>
            ) : (
              <CustomSkeletonLoader count={1} width="40px" height="20px" />
            )}

            {todo ? (
              <div className={style.age}>26</div>
            ) : (
              <CustomSkeletonLoader count={1} width="40px" height="20px" />
            )}
          </div>
          <div className={style.bio}>
            {todo ? (
              <>
                <i className="fa fa-quote-left"></i>
                {todo.bio}
                <i className="fa fa-quote-right"></i>
              </>
            ) : (
              <CustomSkeletonLoader
                count={2}
                position="center"
                width="80%"
                height="20px"
              />
            )}
          </div>
          <div>
            <SocialLinks todo={todo} />
          </div>
        </div>
      </div>
    </>
  );
}
