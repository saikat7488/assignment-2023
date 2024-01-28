import React, { useState } from "react";
import regiStyle from "./registation.module.css";
import { v4 as uuid } from "uuid";

export default function Registration({ handleSelectedSection }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [error, setError] = useState(null);

  const StatusMessagePrint = () => (
    <p
      style={{
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "uppercase",
        padding: "04px 0px",
      }}
    >
      {statusMessage}
    </p>
  );

  const ErrorDisplay = () => (
    <p
      style={{
        color: "red",
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {error}
    </p>
  );

  const validateForm = () => {
    let errors = {};

    if (!fullName.trim()) {
      errors.fullName = "Full Name is required";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!contactNumber.trim()) {
      errors.contactNumber = "Contact Number is required";
    } else if (
      contactNumber.trim().length !== 11 ||
      !/^\d+$/.test(contactNumber.trim())
    ) {
      errors.contactNumber = "Contact Number must be 11 digits";
    }

    if (gender === "") {
      errors.gender = "Please select a gender";
    } else if (gender !== "2" && gender !== "3") {
      errors.gender = "Invalid gender value";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const mapGenderValue = (value) => {
    if (value === "2") {
      return "Male";
    } else if (value === "3") {
      return "Female";
    } else {
      return "";
    }
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000); 
  };

  const generateUsername = (fullName) => {
    const randomSuffix = generateRandomNumber();
    const lowercasedName = fullName.replace(/\s+/g, "").toLowerCase();
    const username = lowercasedName + randomSuffix;
    return username;
  };

  const handleSubmit = async (e) => {
    setProcessing(true);
    e.preventDefault();

    const isFormValid =
      validateForm() &&
      password === confirmPassword &&
      !validationErrors.contactNumber &&
      !validationErrors.gender;

    if (!isFormValid) {
      console.log(`.....!isFormValid....`, isFormValid);
      setProcessing(false); 
      return;
    }

    if (isFormValid) {
      console.log(`....condition...isFormValid...`, isFormValid);
      try {
        // Check if email is already in use
        const responseUser = await fetch(
          `https://dbforassignment2023.onrender.com/user_data?email=${email}`
        );
        const userDataByEmail = await responseUser.json();

        console.log(`......userDataByEmail.....`, userDataByEmail);
        const currentDate = new Date();
        const day = currentDate.getDate().toString().padStart(2, "0");
        const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
        const year = currentDate.getFullYear().toString();
        const formattedDate = `${day}-${month}-${year}`;

        const body = {
          dbType: "user_data",
          role: "student",
          joinDate: formattedDate,
          userName: generateUsername(fullName),
          firstName: "N/A",
          lastName: "N/A",
          fullName: fullName,
          globalJobPosition: "N/A",
          email: email,
          password: password,
          age: 23,
          gender: mapGenderValue(gender),
          bio: "Hic quas nostrum fugiat culpa error inventore quidem mollitia. Fugit dicta in odit in veniam molestiae ullam animi. Possimus ratione nisi itaque minima ad voluptas dolorem.",
          company: "N/A",
          socialLinks: {
            facebook: "https://www.facebook.com/",
            linkedin: "https://bd.linkedin.com/",
            twitter: "https://twitter.com/",
            github: "https://github.com/",
            dribbble: "https://dribbble.com/",
            instagram: "https://www.instagram.com/",
          },
          address: {
            street: "N/A",
            state: "N/A",
            city: "N/A",
            country: "N/A",
            countryCode: "N/A",
            zipcode: "N/A",
            geo: {
              latitude: 0,
              longitude: 0,
            },
          },
          education: {
            department: "Depertment : N/A",
            institution: "Institution : N/A",
          },
          extracurricularActivities: ["N/A", "N/A", "N/A"],
          testimonitalData: [],
          image: "default",
          id: uuid(),
        };

        if (userDataByEmail.length > 0) {
          setValidationErrors({ email: "This email is already in used" });

          console.log("This email is already in used");
          setProcessing(false);
          return;
        } else {
          // setValidEmail(true);
          console.log("......setValidEmail...true");

          const apiUrl = "https://dbforassignment2023.onrender.com/user_data";
          try {
            const response = await fetch(apiUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            });

            if (response.ok) {
              const responseData = await response.json();

              console.log(`.......responseData.....`, responseData);

              if (responseData) {
                setStatusMessage("User Created Successfully, Login Now");
                setProcessing(false);
                setTimeout(() => {
                  handleSelectedSection(0);
                }, 2000);
              }
            } else {
              setError("Failed to submit registration:", response.statusText);
              setProcessing(false);
            }
          } catch (error) {
            setError("Error during registration:", error.message);
            setProcessing(false);
          } finally {
            setProcessing(false);
            setFullName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setContactNumber("");
            setGender("");
          }
        }
      } catch (error) {
        // setValidEmail(false);
        setValidationErrors({
          email: "Error checking email. Please try again.",
        });
        setError("Error checking email:", error.message);
      }
    }
  };

  return (
    <>
      <div className={regiStyle.registation_section}>
        <div className={regiStyle.top_icon}>
          <i className="fa fa-user-plus" aria-hidden="true"></i>
        </div>
        <div className={regiStyle.form_box}>
          <h4 className={regiStyle.title_text}>Registration</h4>
          <form onSubmit={handleSubmit}>
            <div className={regiStyle.inputFildSection}>
              <div className={regiStyle.input_box}>
                <span className={regiStyle.icon}>
                  <i className="fa fa-user"></i>
                </span>
                <input
                  type="text"
                  name=""
                  id="fullName"
                  required
                  onChange={(e) => setFullName(e.target.value)}
                  defaultValue={fullName}
                  autoComplete="off"
                />
                <label htmlFor="fullName">Full Name</label>
              </div>

              {validationErrors.fullName && (
                <div className={regiStyle.validation_message}>
                  <p>{validationErrors.fullName}</p>
                </div>
              )}
            </div>

            <div className={regiStyle.inputFildSection}>
              <div className={regiStyle.input_box}>
                <span className={regiStyle.icon}>
                  <i className="fa fa-envelope"></i>
                </span>
                <input
                  type="text"
                  name=""
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue={email}
                  autoComplete="off"
                />
                <label htmlFor="email">Email</label>
              </div>
              {validationErrors.email && (
                <div className={regiStyle.validation_message}>
                  <p>{validationErrors.email}</p>
                </div>
              )}
            </div>

            <div className={regiStyle.multiple_input_box}>
              <div className={regiStyle.inputFildSection}>
                <div className={regiStyle.input_box}>
                  <span className={regiStyle.icon}>
                    <i className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name=""
                    id="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    defaultValue={password}
                    autoComplete="off"
                  />
                  <label htmlFor="password">Password</label>
                </div>

                {validationErrors.password && (
                  <div className={regiStyle.validation_message}>
                    {validationErrors.password && (
                      <p>{validationErrors.password}</p>
                    )}
                  </div>
                )}

                {validationErrors.confirmPassword && (
                  <div className={regiStyle.validation_message}>
                    {validationErrors.confirmPassword && (
                      <p>{validationErrors.confirmPassword}</p>
                    )}
                  </div>
                )}
              </div>

              <div className={regiStyle.inputFildSection}>
                <div className={regiStyle.input_box}>
                  <span className={regiStyle.icon}>
                    <i className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name=""
                    id="confirm_password"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    defaultValue={confirmPassword}
                    autoComplete="off"
                  />
                  <label htmlFor="confirm_password">Confirm Password</label>
                </div>

                {validationErrors.confirmPassword && (
                  <div className={regiStyle.validation_message}>
                    {validationErrors.confirmPassword && (
                      <p>{validationErrors.confirmPassword}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className={regiStyle.multiple_input_box}>
              <div className={regiStyle.inputFildSection}>
                <div className={regiStyle.input_box}>
                  <span className={regiStyle.icon}>
                    <i className="fa fa-phone"></i>
                  </span>
                  <input
                    type="text"
                    name=""
                    id="contact"
                    required
                    onChange={(e) => setContactNumber(e.target.value)}
                    defaultValue={contactNumber}
                    autoComplete="off"
                  />
                  <label htmlFor="contact">Contact Number</label>
                </div>
                {validationErrors.contactNumber && (
                  <div className={regiStyle.validation_message}>
                    <p>{validationErrors.contactNumber}</p>
                  </div>
                )}
              </div>

              <div className={regiStyle.inputFildSection}>
                <div className={regiStyle.input_box}>
                  <span className={regiStyle.icon}>
                    <i className="fas fa-venus"></i>
                  </span>
                  <select
                    name=""
                    id="selectGender"
                    onChange={(e) => setGender(e.target.value)}
                    defaultValue={gender}
                    required
                    autoComplete="false"
                  >
                    <option value="">Gender</option>
                    <option value="2">Male</option>
                    <option value="3">Female</option>
                  </select>
                </div>
                {validationErrors.gender && (
                  <div className={regiStyle.validation_message}>
                    <p>{validationErrors.gender}</p>
                  </div>
                )}
              </div>
            </div>

            <button className={regiStyle.signin_btn}>
              {processing ? "Wait Registering..." : "Register"}
            </button>

            {statusMessage ? <StatusMessagePrint /> : ""}
            {error ? <ErrorDisplay /> : ""}

            <div className={regiStyle.create_account}>
              <div>All ready have an account?</div>
              <span
                id="toCreate"
                onClick={() => {
                  handleSelectedSection(0);
                }}
              >
                sign in
              </span>
            </div>
          </form>
        </div>
      </div>

      {/* {validationErrors.confirmPassword && (
              <div className={regiStyle.validation_message}>
                <p>{validationErrors.confirmPassword}</p>
              </div>
            )} */}
    </>
  );
}
