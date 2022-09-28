import React, {
  useState,
  useRef,
} from "react";
import { Link, useLocation } from "react-router-dom";
import JobOpenings from "../components/JobOpenings";
import "../components/Listing/SingleJobListing.css";

import "bootstrap/dist/css/bootstrap.min.css";
import JobForm from "../components/Listing/JobForm";
import { FaChevronLeft } from "react-icons/fa";

import logo from "../images/logo.png";
import LoadingScreen from "../components/LoadingScreen";
import Footer from "../Footer/Footer";

function JobDetails(props) {
  const location = useLocation();
  const [error, setError] = useState(null);
  const [jobDetails, setJobdetail] = useState(location.state.jobDetails);
  const myRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const loadingHandler = (loadingValue) => {
    setLoading(loadingValue);
  };

  let content;
  if (error) {
    content = error;
  }

  const onClickHandler = () => {
    myRef.current.scrollIntoView();
  };
  return (
    <>
      <LoadingScreen loading={loading}>
        <div className="job_details">
          <div className="jobPage-logo">
            <img src={logo} alt="Lucida's logo" />
          </div>
          <div className="info-card">
            <div className="box">
              <Link to="/" element={<JobOpenings />} className="nav">
                <FaChevronLeft className="backarrow" />
                &nbsp;Back
              </Link>
              <button className="applyJob-button" onClick={onClickHandler}>
                Apply
              </button>
            </div>
            <div className="jobTitle" style={{ marginTop: 40 }}>
              {content}
              {jobDetails.title && <h1>{jobDetails.title}</h1>}
              {jobDetails.location && <p>{jobDetails.location}</p>}
            </div>
            <div className="header-main">
              <h2 className="title">Who We Are</h2>
              <p>
                'Lucida Technologies' is a Bangalore based Technology firm
                specializing in the areas of Digital and Analytics
                solutions,Machine Learning and Artificial Intelligence.We cater
                to multiple clients in India,Malaysia,Singapore and USA spanning
                across various domains and industries
              </p>
            </div>
          </div>

          <div
            className="header"
            dangerouslySetInnerHTML={{ __html: jobDetails.description }}
          ></div>
          <JobForm
            jobId={jobDetails.id}
            refProp={myRef}
            onLoading={loadingHandler}
          />
        </div>
        <Footer />
      </LoadingScreen>
    </>
  );
}

export default JobDetails;
