import React, { Fragment } from "react";
import "./JobOpenings.css";

const JobOpenings = () => {
  return (
    <Fragment>
      <section>
        <div className="job-header">
          <h1>Current Job Openings</h1>
        </div>
        <div className="card job-card">
          <div className="card-body">
            <h5 className="card-title mb-2">Marketing Manager</h5>
            <h6 className="card-subtitle mb-4 ">Experience: 2-5 years</h6>
            <h6 className="card-subtitle mb-2">Job Description</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="btn-actions">
              <button className="btn btn-apply">Apply</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default JobOpenings;
