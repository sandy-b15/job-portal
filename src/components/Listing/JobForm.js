import React, { useState } from "react";
import "./JobForm.css";
import { FaAsterisk } from "react-icons/fa";
import axios from "axios";
import { applyJob } from "../../controllers/jobController";
import { useEffect } from "react";

import DropFileInput from "../drop-file-input/DropFileInput";

const JobForm = (props) => {
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setSelectedResume] = useState(null);
  const fileInputRef = React.createRef();

  let fileSize

  const [isLoading, setIsLoading] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    file: ""
  });

  const clearInputData = () => {
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      file: ""
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setSelectedResume(null)
  };

  const isFormValid = () => {
    let isValid = true;
    let formErrors = { ...errors };
    console.log(formErrors);
    if (firstName.trim().length === 0) {
      formErrors.firstName = "Please enter a first name.";
    } else {
      formErrors.firstName = "";
      console.log(errors);
    }

    if (lastName.trim().length === 0) {
      formErrors.lastName = "Please enter a last name.";
    } else {
      formErrors.lastName = "";
    }

    if (email.trim().length === 0) {
      formErrors.email = "Please enter a valid email address.";
    } else if (email.includes("@")) {
      formErrors.phone = "Please enter a valid phone number.";
    } else {
      formErrors.email = "";
    }

    if (phone.trim().length === 0) {
      formErrors.phone = "Please enter a valid phone number.";
    } else if (phone.trim().length > 10) {
      formErrors.phone = "Please enter a valid phone number.";
    } else {
      formErrors.phone = "";
    }

    if (resume === null) {
      formErrors.file = "Please add resume";
    } else if (resume.type != "application/pdf") {
      formErrors.file = "Please enter pdf file"
    } else if ((resume.size/ (1024*1024)).toFixed(2) > 2) {
      formErrors.file = "Minimum file size is 2MB"
    }
    else {
      formErrors.file = ""
    }

    setErrors(formErrors);

    console.log(errors);

    Object.keys(formErrors).forEach((key) => {
      if (formErrors[key] !== "" && isValid) {
        isValid = false;
      }
      console.log(key);
    });

    return isValid;
  };

  useEffect(() => {
    props.onLoading(isLoading);
  }, [isLoading]);

  const onSubmitHandler = async () => {
    // validation goes here
    console.log(isFormValid());
    if (isFormValid()) {
      setIsLoading(true);
      console.log("entered check");
      const formData = new FormData();

      formData.append("candidate[first_name]", firstName);
      formData.append("candidate[last_name]", lastName);
      formData.append("candidate[email]", email);
      formData.append("candidate[mobile]", phone);
      formData.append("candidate[source_id]", 5000597199);
      formData.append("candidate[source_category_id]", 5000533866);
      formData.append("candidate[resumes][]", resume);

      try {
        const response = await applyJob(props.jobId, formData);
        if (response?.status == "201") {
          alert("Thank you for applying!");
          setIsLoading(false);
          clearInputData();
        } else {
          console.log(response);
          alert("Something went wrong!");
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  const onFileChange = (files) => {
    setSelectedResume(files);
  };

  return (
    <div className="job-form" ref={props.refProp}>
      <div className="form-header">
        <h2>
          Apply For This Job
          <span className="required">
            <sup className="asterisk">
              <FaAsterisk />
            </sup>
            &nbsp;Required
          </span>
        </h2>
        {/* <button className="sign-in">Sign in with LinkedIn</button> */}
      </div>
      <hr className="horizontal-line" />
      <form className="application-form">
        <div className="row mb-3">
          <label
            htmlFor="name"
            className="col-sm-3 col-md-3 col-3 col-form-label"
          >
            First Name&nbsp;
            <sup className="asterisk">
              <FaAsterisk />
            </sup>
          </label>
          <div className="col-sm-9 col-md-9 col-9">
            <input
              type="text"
              className="form-control"
              onChange={handleFirstNameChange}
              id="name"
              value={firstName}
            />

            {errors.firstName && (
              <p className="error-text">{errors.firstName}</p>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="name"
            className="col-sm-3 col-md-3 col-3 col-form-label"
          >
            Last Name&nbsp;
            <sup className="asterisk">
              <FaAsterisk />
            </sup>
          </label>
          <div className="col-sm-9 col-md-9 col-9">
            <input
              type="text"
              className="form-control"
              onChange={handleLastNameChange}
              id="name"
              value={lastName}
            />
            {errors.lastName && <p className="error-text">{errors.lastName}</p>}
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="email"
            className="col-sm-3 col-md-3 col-3 col-form-label"
          >
            Email&nbsp;
            <sup className="asterisk">
              <FaAsterisk />
            </sup>
          </label>
          <div className="col-sm-9 col-md-9 col-9">
            <input
              type="email"
              onChange={handleEmailChange}
              className="form-control "
              id="email"
              value={email}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="phone"
            className="col-sm-3 col-md-3 col-3 col-form-label"
          >
            Phone&nbsp;
            <sup className="asterisk">
              <FaAsterisk />
            </sup>
          </label>
          <div className="col-sm-9 col-md-9 col-9">
            <input
              type="number"
              className="form-control "
              onChange={handlePhone}
              id="phone"
              value={phone}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="phone"
            className="col-sm-3 col-md-3 col-3 col-form-label"
          >
            Resume&nbsp;
            <sup className="asterisk">
              <FaAsterisk />
            </sup>
          </label>

          <div className="col-sm-9 col-md-9 col-9">
            <DropFileInput onFileChange={(files) => onFileChange(files)} />
            {errors.file && (
              <p className="error-text">{errors.file}</p>
            )}
          </div>
          
        </div>
      </form>
      <div className="row mb-3">
        <div className="col-sm-12 col-md-12 col-12 app-btn">
          <button
            className="submit-button"
            type="button"
            onClick={onSubmitHandler}
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
