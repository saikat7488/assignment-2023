import React, { useState } from "react";
import Contact from "../components/contact/Contact";
import ContactFormData from "../components/contact/ContactFormData";
import Model from "../Model/Model";
export default function ContactContainer() {
  const [isContactModel, setIsContactModel] = useState(false);
  const [contactData, setContactData] = useState(null);
  const [reasonData, setReasonDta] = useState(null);

  const handleSubmitContactData = (data) => {
    setIsContactModel(true);
    setContactData(data);
  };

  const handleSubmitReasonData = (data) =>{
    setReasonDta(data);
  }

  const handleCloseModal = () => {
    setIsContactModel(false);
  };

  return (
    <>
      <Contact
        label="Contact With Us"
        onFormSubmit={handleSubmitContactData}
        onFormReason={handleSubmitReasonData}
      ></Contact>

      {isContactModel && (
        <Model
          modelOn={isContactModel}
          setModelOn={handleCloseModal}
          handleSelectedSection={() => {}}
        >
          <ContactFormData data={contactData} reasonData={reasonData}/>
        </Model>
      )}
    </>
  );
}
