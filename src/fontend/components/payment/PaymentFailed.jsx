import React, {memo} from "react";
import style from "./PaymentFailed.module.css";
import PaymentFailedSvg from "./PaymentFailedSvg";
import GoToNext from "../goToNext/GoToNext";

const PaymentFailed = ({ data = {} }) => {
  return (
    <div className={style.paymentSuccessfulContainer}>
      {/* ******** PAYMENT STATUS *********** */}
      <div
        className={`${style.sectionContainer} ${style.paymentSuccessfulDisplay}`}
      >
        <PaymentFailedSvg />
        <div className={style.headingMessage}>Transaction Completed Failed</div>
        <div className={style.billingMessage}>Your billing is not complete</div>
      </div>
      <div className={`${style.sectionContainer}`}>
        <div className={style.title}>No Transaction Detais</div>
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

      {/* ********USER DETAILS *********** */}
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

      {/* *********COURSE DETAILS *********** */}
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

      <GoToNext to={`/course/${data?.purchaseCourseData?.courseId}`} />
    </div>
  );
};

export default memo(PaymentFailed); 
