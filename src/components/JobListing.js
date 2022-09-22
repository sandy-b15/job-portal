import React from "react";
import IndividualJobs from "./IndividualJobs";

import "./JobOpenings.css";

const JobListing = (props) => {
  return (
    <ul className="new-jobs">
      {props.jobs.map((job) => (
        <IndividualJobs
          key={job.id}
          id={job.id}
          title={job.title}
          experience={job.experience}
          description={job.description}
        />
      ))}
    </ul>
  );
};

export default JobListing;
