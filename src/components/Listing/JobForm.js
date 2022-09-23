import React, { useState } from "react";
import "./JobForm.css";
import { FaAsterisk } from "react-icons/fa";
import axios from "axios";
import { applyJob } from "../../controllers/jobController";

const JobForm = (props) => {
  const [firstName, setFirstName] = useState("test");
  const [lastName, setLastName] = useState("z");
  const [email, setEmail] = useState("testing@gmail.com");
  const [phone, setPhone] = useState("1234123412");
  const [resume, setSelectedResume] = useState(null);
  const fileInputRef = React.createRef();
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

  const onSubmit = async () => {
    // validation goes here

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
      } else {
        console.log(response);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileSelect = (event) => {
    console.log("event", typeof event.target.files[0]);
    setSelectedResume(event.target.files[0]);
  };

  return (
    <div className="job-form" ref={props.refProp} >
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
        <button className="sign-in">Sign in with LinkedIn</button>
      </div>
      <hr className="horizontal-line" />
      <form className="application-form">
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-3 col-form-label">
            First Name&nbsp;
            <sup className="asterisk">
              <FaAsterisk />
            </sup>
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              onChange={handleFirstNameChange}
              id="name"
              value={firstName}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-3 col-form-label">
            Last Name&nbsp;
            <sup className="asterisk">
              <FaAsterisk />
            </sup>
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              onChange={handleLastNameChange}
              id="name"
              value={lastName}
            />
          </div>
        </div>
        {/* <div className="row mb-3">
          <label htmlFor="position" className="col-sm-3 col-form-label">
            Position Applied&nbsp;
            <sup className="asterisk">
              <FaAsterisk />
            </sup>
          </label>
          <div className="col-sm-9">
            <select
              class="form-select"
              aria-label="Default select example"
              id="position"
            >
              <option selected>{}</option>
            </select>
          </div>
        </div> */}

        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-3 col-form-label">
            Email&nbsp;
            <sup className="asterisk">
              <FaAsterisk />
            </sup>
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              onChange={handleEmailChange}
              className="form-control "
              id="email"
              value={email}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="phone" className="col-sm-3 col-form-label">
            Phone&nbsp;
            <sup className="asterisk">
              <FaAsterisk />
            </sup>
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control "
              onChange={handlePhone}
              id="phone"
              value={phone}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="phone" className="col-sm-3 col-form-label">
            Resume&nbsp;
            <sup className="asterisk">
              <FaAsterisk />
            </sup>
          </label>
          <div className="col-sm-9">
            <input
              class="form-control"
              type="file"
              id="formFile"
              ref={fileInputRef}
              // value={resume}
              onChange={handleFileSelect}
            />
          </div>
        </div>
      </form>
      <div className="row mb-3">
        <div className="col-sm-3"></div>
        <div className="col-sm-9">
          <button className="apply-button" onClick={onSubmit}>
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
