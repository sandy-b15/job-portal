import React from "react";
import "./JobForm.css";
import { FaAsterisk } from "react-icons/fa";
const JobForm = (props) => {
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
        <button className="sign-in">Sign in with LinkedIn</button>
      </div>
      <hr className="horizontal-line" />
      <form className="application-form">
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-3 col-form-label">
            Full Name&nbsp;
            <sup className="asterisk">
              <FaAsterisk />
            </sup>
          </label>
          <div className="col-sm-9">
            <input type="text" className="form-control " id="name" />
          </div>
        </div>
        <div className="row mb-3">
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
              <option selected></option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-3 col-form-label">
            Email&nbsp;
            <sup className="asterisk">
              <FaAsterisk />
            </sup>
          </label>
          <div className="col-sm-9">
            <input type="email" className="form-control " id="email" />
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
            <input type="number" className="form-control " id="phone" />
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
            <input class="form-control" type="file" id="formFile" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3"></div>
          <div className="col-sm-9">
            <button type="submit" className="apply-button">
              Submit Application
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
