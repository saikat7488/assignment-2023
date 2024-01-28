import React, { useEffect, useState, memo } from "react";
import style from "./PaymentRoute.module.css";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

import PaymentConfirmation from "./PaymentConfirmation";
import PurchasedNotAllowed from "./PurchasedNotAllowed";
import PolicyFAQSection from "../../components/policyfaq/FAQSection";
import BubbleAnimation from "../../components/bubbleAnimation/BobbleAnimation";
import PaymentSuccessful from "../../components/payment/PaymentSuccessful";
import PaymentFailed from "../../components/payment/PaymentFailed";
import PaymentConfirmationLoading from "../../components/payment/PaymentConfirmationLoading";

import { useModelContext } from "../../../contextApi/ModelContext";
import { useAuth } from "../../../contextApi/AuthContext";

const PaymentRoute = () => {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth();
  const { setModelOn } = useModelContext();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [processCourseData, setProcessCourseData] = useState();
  const [isValidCourseURL, setIsValidCourseURL] = useState(true);
  const [isValidCourse, setIsValidCourse] = useState(false);

  const [processUserData, setProcessUserData] = useState();
  const [isValidUserURL, setIsValidUserURL] = useState(true);
  const [isValidUser, setIsValidUser] = useState(true);

  const [isPaymentSubmitted, setIsPaymentSubmitted] = useState(false);
  const [isPaymentSubmittedStatus, setIsPaymentSubmittedStatus] =
    useState(null);
  const [paymentConfirmationData, setPaymentConfirmationData] = useState(null);
  const [isPaymentSubmittedLoading, setIsPaymentSubmittedLoading] =
    useState(false);

  const onSubmitPaymentHandler = (data) => {
    setIsPaymentSubmittedLoading(data?.actionStatus);
    setPaymentConfirmationData(data ?? data);
    setIsPaymentSubmittedStatus(data?.paymentStatus);
    setIsPaymentSubmitted(true);
  };

  // ********************************************************* //
  const fetchData = async (
    url,
    setProcessData,
    setIsValidURLState,
    setIsValidState,
    errorType
  ) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();

        if (Object.keys(data).length > 0) {
          setProcessData(data);
          setIsValidState(true);
        } else {
          throw new Error(`Server Response Error`);
        }
      } else {
        setIsValidURLState(false);
        throw new Error(errorType);
      }
    } catch (error) {
      setError(`Payment Route, ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // ------------------------------------- //
  useEffect(() => {
    document.title = "WorldCoder | Payment";
  }, []);

  useEffect(() => {
    if (id) {
      const courseDataUrl = `https://dbforassignment2023.onrender.com/course_data/${id}`;
      fetchData(
        courseDataUrl,
        setProcessCourseData,
        setIsValidCourseURL,
        setIsValidCourse,
        "Course Not Found By ID"
      );
    }
  }, [id]);

  useEffect(() => {
    if (user && user[0] && user[0]?.id) {
      const userDataUrl = `https://dbforassignment2023.onrender.com/user_data/${user[0]?.id}`;
      fetchData(
        userDataUrl,
        setProcessUserData,
        setIsValidUserURL,
        setIsValidUser,
        "User Data Error"
      );
    }
  }, [user]);

  // ********************************************************* //
  //
  // ********************************************************* //
  const checkPurchasedStatus = () => {
    if (
      !processCourseData ||
      !processUserData ||
      !processUserData.coursesPurchased
    ) {
      return false;
    }
    const targetCourseId = processCourseData.id;
    const coursesPurchased = processUserData.coursesPurchased;
    const isCoursePurchased = coursesPurchased.some(
      (course) => course.courseId === targetCourseId
    );
    return isCoursePurchased;
  };

  // ---------------------------------------//
  let isAllreadyPurchased;
  let purchasedCoursesArrayInfoById;
  let isCompleteAll;

  if (
    user &&
    user[0] &&
    processUserData &&
    processUserData.coursesPurchased &&
    processCourseData
  ) {
    isCompleteAll = processUserData.coursesPurchased.some(
      (course) =>
        course.courseId === processCourseData.id &&
        course.status !== "completed"
    );
  }

  if (user && user[0] && processUserData && processCourseData) {
    isAllreadyPurchased = checkPurchasedStatus();
    if (isAllreadyPurchased) {
      purchasedCoursesArrayInfoById = processUserData.coursesPurchased.filter(
        (item) => {
          return item.courseId === processCourseData.id;
        }
      );
    }
  }

  // ------------------------------------- //
  let warningMessage;
  const warningForTeacherUser = "TEACHERS CANNOT PURCHASE ANY COURSE";
  const warningForActiveCourseUser =
    "YOU HAVE ALREADY PURCHASED THIS COURSE, AND THE COURSE IS ACTIVE, PENDING, OR UPCOMING. YOU CANNOT PURCHASE THIS COURSE AGAIN BEFORE IT IS COMPLETED. VISIT YOUR PROFILE TO SEE THE CURRENT STATUS OF THIS COURSE.";
  const warningForCompltedCourseUser =
    "YOU HAVE ALREADY PURCHASE THIS COURSE, AND THE COURSE IS COMPLETED. IF YOU WISH TO CONTINUE WITH THE PURCHASE, THE PROCEDURE WILL PROCEED.";
  const warningForNotParchasedUser =
    "THIS COURSE HAS NOT BEEN PURCHASED YET. CONTINUE TO THE PURCHASE PROCEDURE.";

  if (user && user[0] && processCourseData && processUserData) {
    warningMessage =
      user[0].role === "teacher"
        ? warningForTeacherUser
        : isAllreadyPurchased
        ? isCompleteAll
          ? warningForActiveCourseUser
          : warningForCompltedCourseUser
        : warningForNotParchasedUser;
  }

  // *******************************************
  // isLoading
  // *******************************************
  if (isLoading) {
    return (
      <>
        <div className={style.paymentValidation}>
          <BubbleAnimation bubble="5" message="LOADING..." />
        </div>
      </>
    );
  }

  // *******************************************
  // !isVlidURL
  // *******************************************
  if (!isValidCourseURL && !isValidUserURL) {
    return (
      <>
        <div className={style.paymentValidation}>
          <BubbleAnimation
            bubble="5"
            message="THE URL IS INVALID FOR COURSE ID OR User ID"
          />
        </div>
      </>
    );
  }

  // *********************************************
  // !isAuthenticated && !user
  // *********************************************
  if (!isAuthenticated && !user) {
    return (
      <>
        <div className={style.paymentValidation}>
          <BubbleAnimation
            bubble="5"
            message="YOU ARE NOT LOGGIED IN. Please authenticate, sign in, or create an account"
          />
          <div className={style.signInButtonContainer}>
            <button
              className={style.signInButton}
              onClick={() => setModelOn(true)}
            >
              Sign In
            </button>
          </div>
        </div>
      </>
    );
  }

  // *********************************************
  // error
  // *********************************************
  if (error) {
    return (
      <>
        <div className={style.paymentValidation}>
          <BubbleAnimation
            bubble="5"
            message="CLIENT SIDE ERROR, TRY AGAIN. CHECK YOUR NETWORK CONNECTION"
          />
        </div>
      </>
    );
  }

  // *********************************************
  // !isValidCourse
  // *********************************************
  if (!isValidCourse) {
    return (
      <>
        <div className={style.paymentValidation}>
          <BubbleAnimation
            bubble="5"
            message="COURSE VALIDATION FAILD, TRY AGAIN..."
          />
        </div>
      </>
    );
  }

  // *******************************************
  // *******************************************
  // *******************************************
  return (
    <>
      {isPaymentSubmittedLoading ? (
        <PaymentConfirmationLoading isPaymentSubmitted={isPaymentSubmitted} />
      ) : (
        <div className={style.paymentContainer}>
          {isPaymentSubmittedStatus === "successfully_payment" ? (
            <PaymentSuccessful
              data={paymentConfirmationData}
              isPaymentSubmitted={isPaymentSubmitted}
            />
          ) : isPaymentSubmittedStatus === "unsuccessful_payment" ? (
            <PaymentFailed
              data={paymentConfirmationData}
              isPaymentSubmitted={isPaymentSubmitted}
            />
          ) : (
            !isLoading &&
            !error &&
            isValidCourse &&
            isValidUser &&
            isAuthenticated &&
            processCourseData &&
            processUserData && (
              <div className={style.display}>
                {/* INFORMATION */}
                <div className={style.dataContainer}>
                  <div className={style.dataContent}>
                    <div className={style.contentDetails}>
                      <div className={style.title}>Author Details</div>
                      <div className={style.dataGroup}>
                        <div className={style.label}>User ID :</div>
                        <div className={style.data}>{processUserData.id}</div>
                      </div>
                      <div className={style.dataGroup}>
                        <div className={style.label}>User Role :</div>
                        <div className={style.data}>{processUserData.role}</div>
                      </div>
                      <div className={style.dataGroup}>
                        <div className={style.label}>Full Name :</div>
                        <div className={style.data}>
                          {processUserData.fullName}
                        </div>
                      </div>
                      <div className={style.dataGroup}>
                        <div className={style.label}>Email Address :</div>
                        <div className={`${style.data} ${style.mailAddress}`}>
                          {processUserData.email}
                        </div>
                      </div>
                      <div className={style.dataGroup}>
                        <div className={style.label}>Warning :</div>
                        <div
                          className={`${style.data} ${
                            warningMessage === warningForCompltedCourseUser ||
                            warningMessage === warningForNotParchasedUser
                              ? style.active
                              : style.inactive
                          }`}
                        >
                          {warningMessage}
                        </div>
                      </div>

                      {isAllreadyPurchased && (
                        <div className={style.contentDetails}>
                          <div className={style.title}>
                            PREVIOUS COURSE DETAILS
                          </div>
                          {purchasedCoursesArrayInfoById &&
                            purchasedCoursesArrayInfoById.map((item) => (
                              <div
                                key={uuid()}
                                className={style.previousCourseData}
                              >
                                <div className={style.dataGroup}>
                                  <div className={style.label}>COURSE ID :</div>
                                  <div className={style.data}>
                                    {processCourseData?.id}
                                  </div>
                                </div>
                                <div className={style.dataGroup}>
                                  <div className={style.label}>TITLE :</div>
                                  <div className={style.data}>
                                    {processCourseData?.title}
                                  </div>
                                </div>
                                <div className={style.dataGroup}>
                                  <div className={style.label}>Status :</div>
                                  <div className={style.data}>
                                    {item?.status}
                                  </div>
                                </div>
                                <div className={style.dataGroup}>
                                  <div className={style.label}>
                                    purchase date :
                                  </div>
                                  <div className={style.data}>
                                    {item?.purchase_date}
                                  </div>
                                </div>

                                {Object.keys(item?.result).length > 0 && (
                                  <>
                                    <div className={style.dataGroup}>
                                      <div className={style.label}>
                                        midterm :
                                      </div>
                                      <div className={style.data}>
                                        {item?.result?.midterm}
                                      </div>
                                    </div>
                                    <div className={style.dataGroup}>
                                      <div className={style.label}>
                                        sessional:
                                      </div>
                                      <div className={style.data}>
                                        {item?.result?.sessional}
                                      </div>
                                    </div>
                                    <div className={style.dataGroup}>
                                      <div className={style.label}>final:</div>
                                      <div className={style.data}>
                                        {item?.result?.final}
                                      </div>
                                    </div>
                                    <div className={style.dataGroup}>
                                      <div className={style.label}>
                                        totalMark:
                                      </div>
                                      <div className={style.data}>
                                        {item?.result?.totalMark}
                                      </div>
                                    </div>
                                    <div className={style.dataGroup}>
                                      <div className={style.label}>cgpa:</div>
                                      <div className={style.data}>
                                        {item?.result?.cgpa}
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>

                    <div className={style.contentDetails}>
                      <div className={style.title}>Course Details</div>

                      <div className={style.dataGroup}>
                        <div className={style.label}>Course ID :</div>
                        <div className={style.data}>
                          {processCourseData?.id || id}
                        </div>
                      </div>

                      <div className={style.dataGroup}>
                        <div className={style.label}>Course Tracking ID :</div>
                        <div className={style.data}> {uuid()} </div>
                      </div>

                      <div className={style.dataGroup}>
                        <div className={style.label}>Course Title :</div>
                        <div className={style.data}>
                          {processCourseData?.title}
                        </div>
                      </div>

                      <div className={style.dataGroup}>
                        <div className={style.label}>Course Rating :</div>
                        <div className={style.data}>
                          {processCourseData?.ratings?.rating}
                        </div>
                      </div>

                      <div className={style.dataGroup}>
                        <div className={style.label}>Course Duration :</div>
                        <div className={style.data}>
                          {processCourseData?.courseDuration}
                        </div>
                      </div>

                      <div className={style.dataGroup}>
                        <div className={style.label}>
                          CertificationAvailable :
                        </div>
                        <div className={style.data}>
                          {processCourseData?.certificationAvailable === true
                            ? "Available"
                            : "No Certificate"}
                        </div>
                      </div>

                      <div className={style.dataGroup}>
                        <div className={style.label}>Course Price :</div>
                        <div className={style.data}>
                          {processCourseData?.price}
                        </div>
                      </div>
                    </div>

                    <div className={style.contentDetails}>
                      <div className={style.title}>Course Details</div>

                      <div className={style.dataGroup}>
                        <div className={style.label}>Course ID :</div>
                        <div className={style.data}>
                          {processCourseData?.id || id}
                        </div>
                      </div>

                      <div className={style.dataGroup}>
                        <div className={style.label}>Course Tracking ID :</div>
                        <div className={style.data}> {uuid()} </div>
                      </div>

                      <div className={style.dataGroup}>
                        <div className={style.label}>Course Title :</div>
                        <div className={style.data}>
                          {processCourseData?.title}
                        </div>
                      </div>

                      <div className={style.dataGroup}>
                        <div className={style.label}>Course Rating :</div>
                        <div className={style.data}>
                          {processCourseData?.ratings?.rating}
                        </div>
                      </div>

                      <div className={style.dataGroup}>
                        <div className={style.label}>Course Duration :</div>
                        <div className={style.data}>
                          {processCourseData?.courseDuration}
                        </div>
                      </div>

                      <div className={style.dataGroup}>
                        <div className={style.label}>
                          CertificationAvailable :
                        </div>
                        <div className={style.data}>
                          {processCourseData?.certificationAvailable === true
                            ? "Available"
                            : "No Certificate"}
                        </div>
                      </div>

                      <div className={style.dataGroup}>
                        <div className={style.label}>Course Price :</div>
                        <div className={style.data}>
                          {processCourseData?.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PAYMENT */}
                <div className={style.paymentArea}>
                  <div className={style.paymentAreaTitle}>
                    MAKE YOUR PAYMENT
                  </div>
                  {warningMessage === warningForCompltedCourseUser ||
                  warningMessage === warningForNotParchasedUser ? (
                    isAuthenticated &&
                    processCourseData &&
                    user[0].role === "student" && (
                      <div className={style.paymentCompnent}>
                        <PaymentConfirmation
                          course_Id={processCourseData.id}
                          price={processCourseData.price}
                          user_Id={user[0].id}
                          onSubmitPaymentHandler={onSubmitPaymentHandler}
                        />
                      </div>
                    )
                  ) : (
                    <div className={style.puchasedNOtAllowed}>
                      <PurchasedNotAllowed warningMessage={warningMessage} />
                    </div>
                  )}

                  <div className={style.policy}>
                    <div className={style.policyTitle}>
                      Read Our Policy Before Make Payment
                    </div>
                    <PolicyFAQSection />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};

export default memo(PaymentRoute);
