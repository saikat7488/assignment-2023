import React from "react";
import style from "./CreateBlogPost.module.css";

export default function CreateBlogPost() {
  return (
    <>
      <div className={style.createBlogContainer}>
        <div className={style.blogFormContainer}>
          <form className={style.blogForm}>
            <div className={style.innerBox}>
              <input type="text" name="" id="" required />
              <label htmlFor="">Blog Title</label>
            </div>
            <div className={style.innerBox}>
              <select name="" id="">
                <option value="">Select Category</option>
                <option value="">Technology</option>
                <option value="">Career in Tech</option>
                <option value="">Programming Languages</option>
                <option value="">Tech News and Events</option>
                <option value="">Cryptography</option>
                <option value="">Computer Graphics</option>
                <option value="">Artificial Intelligence</option>
                <option value="">Software Testing</option>
                <option value="">Cybersecurity</option>
                <option value="">Robotics</option>
                <option value="">Software Engineering</option>
                <option value="">Network</option>
              </select>
            </div>
            <div className={style.innerBox}>
              <textarea
                name=""
                id="blogTextArea"
                cols="30"
                rows="5"
                required
              ></textarea>
              <label htmlFor="">Write a description...</label>
            </div>
            <div className={`${style.innerBox} ${style.uploadDiv}`}>
              <input type="file" name="" id="" required />
              <div className={style.customFileUploader}>
                <span className={style.customFileIcon}>
                  <i className="fa fa-upload"></i>
                </span>
                <span className={style.spanLabel}>Upload a cover image</span>
              </div>
            </div>
            <button className={style.sendBtn}>
              <i className={`fa fa-send`}></i>
              <span>Upload</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
