import React, { useEffect, useState, useCallback, Fragment ,useRef } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import JobOpenings from "../components/JobOpenings";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Listing/SingleJobListing.css";
import JobForm from "../components/Listing/JobForm";
import { FaAngleLeft } from "react-icons/fa";

function JobDetails(props) {
  const location = useLocation();
  const [error, setError] = useState(null);
  const [jobDetails, setJobdetail] = useState(location.state.jobDetails);
  const myRef = useRef(null)

  console.log("jobDetails", jobDetails);
  let content;
  if (error) {
    content = error;
  }

  const onClickHandler = () => {
    myRef.current.scrollIntoView()
  };

  console.log(jobDetails.description, "<----");
  return (
    <Fragment>
      <div className="info-card">
        <div className="box">
          <Link to="/" element={<JobOpenings />} className="nav">
            <FaAngleLeft className="backarrow" />
            Back
          </Link>
          <button className="apply-button" onClick={onClickHandler}>
            Apply
          </button>
        </div>
        <div className="jobTitle" style={{ marginTop: 20 }}>
          {content}
          {jobDetails.title && <h1>{jobDetails.title}</h1>}
          {jobDetails.location && <p>{jobDetails.location}</p>}
        </div>
        <div className="header-main">
          <h2 className="title">Who We Are</h2>
          <p>
            'Lucida Technologies' is a Bangalore based Technology firm
            specializing in the areas of Digital and Analytics solutions,Machine
            Learning and Artificial Intelligence.We cater to multiple clients in
            India,Malaysia,Singapore and USA spanning across various domains and
            industries
          </p>
        </div>
      </div>

      <div
        className="header"
        dangerouslySetInnerHTML={{ __html: jobDetails.description }}
      ></div>
      <JobForm jobId={jobDetails.id} refProp={myRef}/>
    </Fragment>
  );
}

export default JobDetails;
