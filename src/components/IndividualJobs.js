import React from "react";
import "./JobOpenings.css";

const IndividualJobs = (props) => {
  return (
    <li>
      <div className="card job_card">
        <div className="card-body">
          <h5 className="card-title mb-2">{props.title}</h5>
          <h6 className="card-subtitle mb-4 ">
            Experience: {props.experience}
          </h6>
          <h6 className="card-subtitle mb-2">Job Description</h6>
          <p className="card-text">
            Creating a detailed business analysis, outlining problems,
            opportunities and solution for a business
          </p>
          <div className="btn-actions">
            <button className="apply-button">Apply</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default IndividualJobs;
