import React from "react";
import style from "./ContactFormData.module.css";

const ContactFormData = ({ data, reasonData }) => {
  return (
    <div className={style.ContactFormDataContainer}>
      <div className={style.contactCard}>
        <div className={style.dataGroup}>
          <div className={style.topic}>Subject :</div>
          <div className={style.data}>{data.subject}</div>
        </div>
        <div className={style.dataGroup}>
          <div className={style.topic}>Full Name :</div>
          <div className={style.data}>{data.name}</div>
        </div>
        <div className={style.dataGroup}>
          <div className={style.topic}>Email :</div>
          <div className={style.data}>{data.email}</div>
        </div>
        <div className={style.dataGroup}>
          <div className={style.topic}>Reason :</div>
          <div className={style.data}>{reasonData?.label}</div>
        </div>
        <div className={style.dataGroup}>
          <div className={style.topic}>Message :</div>
          <div className={style.data}>{data.message}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormData;
