import React, { Fragment, useCallback, useEffect, useState } from "react";
import JobListing from "./JobListing";
import "./JobOpenings.css";
import { api_token } from "../config/config";
import Intro from "./Intro";

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
          Authorization: `Bearer ${api_token.token}`,
          "Content-Type": "application/json ",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      console.log(data);

      const loadedJobData = [];

      for (const key in data) {
        // console.log(data[key].description);
        let dom = document.createElement("div");
        let frag2 = document
          .createRange()
          .createContextualFragment(data[key].description);
        dom.appendChild(frag2);
        console.log(dom);
        loadedJobData.push({
          id: data[key].id,
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
      <Intro />
      <div className="wrapper">
        <section>
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
