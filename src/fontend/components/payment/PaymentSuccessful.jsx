import React, { memo } from "react";
import style from "./PaymentSuccessful.module.css";
import PaymentSuccessfulSvg from "./PaymentSuccessfulSvg";
import GoToNext from "../../components/goToNext/GoToNext";

const PaymentSuccessful = ({ data = {} }) => {
  return (
    <div className={style.paymentSuccessfulContainer}>
      <div
        className={`${style.sectionContainer} ${style.paymentSuccessfulDisplay}`}
      >
        <PaymentSuccessfulSvg />
        <div className={style.headingMessage}>
          Transaction Completed Succesfully
        </div>
        <div className={style.billingMessage}>Thank you for your billing</div>
      </div>
      <div className={`${style.sectionContainer}`}>
        <div className={style.title}>Transaction Detais</div>
        <div>
          Payment Status : <span>{data?.paymentStatus}</span>
        </div>
        <div>
          Transaction ID :<span>{data?.purchaseCourseData?.transactionId}</span>
        </div>
        <div>
          Account : <span>{data?.paymentData?.cardNumber}</span>
        </div>
        <div>
          Payment : <span>{data?.purchaseCourseData?.amountPaid}</span>
        </div>
      </div>
      
      <div className={`${style.sectionContainer}`}>
        <div className={style.title}>User Details </div>
        <div>
          User ID : <span>{data?.userData?.id}</span>
        </div>
        <div>
          User Name: <span>{data?.userData?.fullName}</span>
        </div>
        <div>
          User Email : <span>{data?.userData?.email}</span>
        </div>
      </div>
      <div className={`${style.sectionContainer}`}>
        <div className={style.title}>Purchased Course Deatils</div>
        <div>
          Course ID : <span>{data?.purchaseCourseData?.courseId}</span>
        </div>
        <div>
          Course Title: <span>{data?.purchaseCourseData?.courseTitle}</span>
        </div>
        <div>
          Course Status : <span>{data?.purchaseCourseData?.status}</span>
        </div>
      </div>

      <GoToNext to={`/profile/${data?.userData?.id}`} />
    </div>
  );
};

export default memo(PaymentSuccessful);
