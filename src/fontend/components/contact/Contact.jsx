import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { redexEmailValidation } from "../../utility/redexValidation";
import Head from "../ComponentHeading/Head";

import { useAuth } from "../../../contextApi/AuthContext";

export default function Contact(props) {
  const { isAuthenticated, user } = useAuth();
  const { fullName, email: userEmailAdress } =
    isAuthenticated && user && user[0];

  // Form Management by useForm hook
  const {
    register,
    handleSubmit,
    reset, // Add this line to use the reset method
    formState: { errors },
  } = useForm();

  // Props Management
  const { label, onFormSubmit, onFormReason } = props;

  // Select Option Management
  const options = [
    { value: "contact_us", label: "Contact Us" },
    { value: "comment", label: "Feedback" },
    { value: "account_active", label: "Account Active" },
    { value: "account_deactive", label: "Account Inactive" },
    { value: "account_ban", label: "Account Ban" },
    { value: "other", label: "Other" },
  ];

  // State Management
  const [subject, setSubject] = useState("");
  const [name, setName] = useState(isAuthenticated ? fullName : "");
  const [email, setEmail] = useState(isAuthenticated ? userEmailAdress : "");
  const [reason, setReason] = useState(options[0]);
  const [message, setMessage] = useState("");
  const [terms, setTerms] = useState(false);

  const inputDataManagement = (stateName, setStateValue) => {
    switch (stateName) {
      case "subject":
        setSubject(setStateValue);
        break;
      case "name":
        setName(setStateValue);
        break;
      case "email":
        setEmail(setStateValue);
        break;
      case "reason":
        setReason(setStateValue);
        break;
      case "message":
        setMessage(setStateValue);
        break;
      case "terms":
        setTerms(setStateValue);
        break;

      default:
        break;
    }
  };

  // onSubmitInputForm
  const onSubmitContactForm = (data) => {
    onFormSubmit(data);
    onFormReason(reason);

    reset({
      subject: "",
      name: isAuthenticated ? fullName : "",
      email: isAuthenticated ? userEmailAdress : "",
      reason: "",
      message: "",
      terms: false,
    });
  };

  // MAIN CODE
  return (
    <Form
      className="card crad-body m-5 p-5 rounded-1"
      onSubmit={handleSubmit(onSubmitContactForm)}
    >
      <Head
        title={`${label}`}
        textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
        textTwo="Lorem ipsum dolor sit amet consectetur."
      />

      <Form.Group className="mb-3" controlId="formSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your subject"
          className={errors.subject && "is-invalid"}
          defaultValue={subject}
          onChange={(e) => {
            inputDataManagement("subject", e.target.value);
          }}
          {...register("subject", {
            required: true,
            minLength: 5,
            maxLength: 40,
          })}
        />
        {errors.subject && (
          <span className="text-danger">
            {errors.subject.type === "required" && "Give your subject"}
            {errors.subject.type === "minLength" &&
              "Please give your subject minimum 5 characters"}
            {errors.subject.type === "maxLength" &&
              "Please give your subject maximum 40 characters"}
          </span>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          className={errors.name && "is-invalid"}
          defaultValue={name}
          {...(isAuthenticated && { readOnly: true })}
          onChange={(e) => {
            inputDataManagement("name", e.target.value);
          }}
          {...register("name", {
            required: true,
            minLength: 5,
            maxLength: 20,
          })}
          autoComplete="name"
        />
        {errors.name && (
          <span className="text-danger">
            {errors.name.type === "required" && "Give your name"}
            {errors.name.type === "minLength" &&
              "Please give your name minimum 5 characters"}
            {errors.name.type === "maxLength" &&
              "Please give your name maximum 20 characters"}
          </span>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          className={errors.email && "is-invalid"}
          defaultValue={email}
          {...(isAuthenticated && { readOnly: true })}
          onChange={(e) => {
            inputDataManagement("email", e.target.value);
          }}
          {...register("email", {
            required: true,
            pattern: redexEmailValidation(),
          })}
          autoComplete="email"
        />
        {errors.email && (
          <span className="text-danger">
            {errors.email.type === "required" && "Give your email address"}
            {errors.email.type === "pattern" &&
              "Please give a valid email address"}
          </span>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="formReason">Reason</Form.Label>
        <Select
          inputId="formReason"
          isClearable={true}
          options={options}
          value={reason}
          onChange={(value) => inputDataManagement("reason", value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          rows={3}
          placeholder="Write a message"
          className={errors.message && "is-invalid"}
          defaultValue={message}
          onChange={(e) => {
            inputDataManagement("message", e.target.value);
          }}
          {...register("message", {
            required: true,
            minLength: 10,
            maxLength: 100,
          })}
        />
        {errors.message && (
          <span className="text-danger">
            {errors.message.type === "required" && "Write your message"}
            {errors.message.type === "minLength" &&
              "Message should be a minimum of 10 characters"}
            {errors.message.type === "maxLength" &&
              "Message should be a maximum of 100 characters"}
          </span>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTerms">
        <Form.Check
          type="checkbox"
          label="Read Terms and Condition"
          onChange={() => {
            inputDataManagement("terms", !terms);
          }}
          {...register("terms", {
            required: true,
          })}
        />
        {errors.terms && (
          <span className="text-danger">
            {errors.terms.type === "required" &&
              "Read terms and conditions then check it"}
          </span>
        )}
      </Form.Group>

      <Button type="submit" variant="success">
        <i className="fa fa-send"></i> Send
      </Button>
    </Form>
  );
}
