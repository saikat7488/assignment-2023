import React, { useState } from "react";
import style from "./MakePayment.module.css";

const MakePayment = ({onSubmitAddPayment}) => {
  const [cardNumber, setCardNumber] = useState("4005550000000019");
  const [expiryDate, setExpiryDate] = useState("04/2026");
  const [cvv, setCvv] = useState("111");
  const [isSubmittedForm, setIsSubmittedForm] = useState(false);

  const handlePayment = (e) => {
    setIsSubmittedForm(true);
    const paymentedData ={
      cardNumber,
      expiryDate,
      cvv
    }
    e.preventDefault();
    onSubmitAddPayment(paymentedData);
  };

  return (
    <div className={style.paymentContainer}>
      <h2>Make a Payment</h2>
      <form>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          onChange={(e) => setCardNumber(e.target.value)}
          defaultValue={cardNumber}
          placeholder="Enter card number"
          readOnly 
        />

        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          onChange={(e) => setExpiryDate(e.target.value)}
          defaultValue={expiryDate}
          placeholder="MM/YY"
          readOnly 
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          defaultValue={cvv}
          onChange={(e) => setCvv(e.target.value)}
          placeholder="Enter CVV"
          readOnly 
        />

        {/* addNewCourse */}

        <button type="button" onClick={(e) => handlePayment(e)}>
          {!isSubmittedForm ? "Pay Now" : "Processing"}
        </button>
      </form>
    </div>          
  );
};

export default MakePayment;
