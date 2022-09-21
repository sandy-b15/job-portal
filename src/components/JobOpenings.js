import React, { Fragment, useCallback, useEffect, useState } from "react";
import JobListing from "./JobListing";
import "./JobOpenings.css";

const JobOpenings = () => {
  const [addJobs, setAddJobs] = useState([]);
  const [error, setError] = useState(null);
  const fetchJobDetailsHandler = useCallback(async () => {
    setError(null);
    let url = "https://lucidatechnologies-team.freshteam.com/api/job_postings";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer fyLvFPNHSQUtxJX2sPsq7g`,
          "Content-Type": "application/json ",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedJobData = [];

      for (const key in data) {
        console.log(data[key].description);
        loadedJobData.push({
          id: key,
          title: data[key].title,
          experience: data[key].experience,
          description: data[key].description,
        });
      }
      setAddJobs(loadedJobData);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchJobDetailsHandler();
  }, [fetchJobDetailsHandler]);

  let content = <p>No Jobs Found</p>;

  if (addJobs.length > 0) {
    content = <JobListing jobs={addJobs} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <Fragment>
      <div className="wrapper">
        <section>
          <div className="job-header">
            <h1>Current Job Openings</h1>
          </div>
          <div className="job_postings">
            {content}

            {/* <div className="card job_card">
              <div className="card-body">
                <h5 className="card-title mb-2">Marketing Manager</h5>
                <h6 className="card-subtitle mb-4 ">Experience: 2-5 years</h6>
                <h6 className="card-subtitle mb-2">Job Description</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="btn-actions">
                  <button className="apply-button">Apply</button>
                </div>
              </div>
            </div>
            <div className="card job_card">
              <div className="card-body">
                <h5 className="card-title mb-2">Marketing Manager</h5>
                <h6 className="card-subtitle mb-4 ">Experience: 2-5 years</h6>
                <h6 className="card-subtitle mb-2">Job Description</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="btn-actions">
                  <button className="apply-button">Apply</button>
                </div>
              </div>
            </div>
            <div className="card job_card">
              <div className="card-body">
                <h5 className="card-title mb-2">Marketing Manager</h5>
                <h6 className="card-subtitle mb-4 ">Experience: 2-5 years</h6>
                <h6 className="card-subtitle mb-2">Job Description</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="btn-actions">
                  <button className="apply-button">Apply</button>
                </div>
              </div>
            </div>
            <div className="card job_card">
              <div className="card-body">
                <h5 className="card-title mb-2">Marketing Manager</h5>
                <h6 className="card-subtitle mb-4 ">Experience: 2-5 years</h6>
                <h6 className="card-subtitle mb-2">Job Description</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="btn-actions">
                  <button className="apply-button">Apply</button>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default JobOpenings;
