import React, { useState, useEffect } from "react";
import MakePayment from "../../components/makePayment/MakePayment";
import { v4 as uuid } from "uuid";

const PaymentConfirmation = ({
  course_Id,
  price,
  user_Id,
  onSubmitPaymentHandler = () => {},
}) => {
  const [userData, setUserData] = useState(null);
  const [courseData, setCourseData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async (userId) => {
      try {
        if (!userId) {
          setError("User ID is required");
          setLoading(false);
          return;
        }
        const apiUrl = `https://dbforassignment2023.onrender.com/user_data/${userId}`;
        const response = await fetch(apiUrl);
        const userData = await response.json();

        setUserData(userData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (user_Id) {
      fetchData(user_Id);
    }
  }, [user_Id]);

  useEffect(() => {
    const fetchData = async (courseId) => {
      try {
        if (!courseId) {
          setError("Course ID is required");
          setLoading(false);
          return;
        }
        const apiUrl = `https://dbforassignment2023.onrender.com/course_data/${courseId}`;
        const response = await fetch(apiUrl);
        const courseDataObject = await response.json();

        setCourseData(courseDataObject);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (course_Id) {
      fetchData(course_Id);
    }
  }, [course_Id]);

  const screenPosition = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling animation
    });
  };

  // onSubmitAddPayment
  const onSubmitAddPayment = async (paymentedData) => {
    screenPosition();

    let data = {
      userData: userData,
      purchaseCourseData: null,
      paymentData: null,
      paymentStatus: null,
      actionStatus: true,
    };

    // Notify the start of the payment process
    onSubmitPaymentHandler({ ...data });

    const currentDate = new Date();
    const formattedDate = currentDate
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, "-");

    // New course data
    let newCourseData;
    if (courseData && Object.keys(courseData).length > 0) {
      newCourseData = {
        courseId: courseData?.id || course_Id,
        courseTitle: courseData?.title,
        transactionId: uuid(),
        purchase_date: formattedDate,
        year: currentDate.getFullYear().toString(),
        session: "Spring",
        semester: currentDate.getFullYear().toString(),
        status: "pendingApproval",
        result: {},
        amountPaid: courseData?.price || price,
        paymentConfirmation: true,
      };
    }

    // Update the user data locally
    setUserData((prevUserData) => {
      const newUserData = { ...prevUserData };
      newUserData.coursesPurchased = [
        ...prevUserData.coursesPurchased,
        newCourseData,
      ];
      return newUserData;
    });

    try {
      // Update the user data on the server
      const apiUrl = `https://dbforassignment2023.onrender.com/user_data/${userData?.id}`;
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...userData,
          coursesPurchased: [...userData.coursesPurchased, newCourseData],
        }),
      });

      const updatedUserData = await response.json();

      // Update the user data state with the server response
      setUserData(updatedUserData);

      // Update the data object with the latest information
      data.userData = updatedUserData;
      data.purchaseCourseData = newCourseData;
      data.paymentData = paymentedData;
      data.paymentStatus = "successfully_payment";
      data.actionStatus = false;
      onSubmitPaymentHandler(data);
    } catch (error) {
      setError(`paymentConfirmation : ${error}`);
      data.userData = userData;
      data.purchaseCourseData = newCourseData;
      data.paymentData = paymentedData;
      data.paymentStatus = "unsuccessful_payment";
      data.actionStatus = false;
      newCourseData.status = "N/A";

      // Notify the handler with the error information
      // onSubmitPaymentHandler(data);
      onSubmitPaymentHandler(data);
    }
  };

  return (
    <div>
      {!error &&
        !loading &&
        userData &&
        Object.keys(userData).length > 0 &&
        courseData &&
        Object.keys(courseData).length > 0 && (
          <MakePayment onSubmitAddPayment={onSubmitAddPayment} />
        )}
    </div>
  );
};

export default PaymentConfirmation;
