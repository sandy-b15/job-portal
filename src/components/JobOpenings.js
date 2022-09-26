import React, { Fragment, useCallback, useEffect, useState } from "react";
import JobListing from "./JobListing";
import "./JobOpenings.css";
import { getJobsList } from "../controllers/jobController";

const JobOpenings = (props) => {
  const [jobsList, setJobs] = useState(null);
  const [error, setError] = useState(null);

  const fetchJobDetailsHandler = async () => {
    const resp = await getJobsList({ status: "published", remote: false });

    setJobs(resp);
  };

  useEffect(() => {
    if (jobsList === null) {
      fetchJobDetailsHandler();
    }
  }, [jobsList]);

  let content = <p>No Jobs Found</p>;

  if (jobsList?.length > 0) {
    content = <JobListing jobs={jobsList} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <Fragment>
      <div className="wrapper" ref={props.refProp}>
        <section className="header-section">
          <div className="job-header">
            <h1>Current Job Openings</h1>

            <main></main>
          </div>
          <div className="job_postings">{content}</div>
        </section>
      </div>
    </Fragment>
  );
};

export default JobOpenings;
