import React, {
  useState,
  useRef,
  useEffect,
} from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import JobOpenings from "../components/JobOpenings";
import "../components/Listing/SingleJobListing.css";

import "bootstrap/dist/css/bootstrap.min.css";
import JobForm from "../components/Listing/JobForm";
import { FaChevronLeft } from "react-icons/fa";

import logo from "../images/logo.png";
import LoadingScreen from "../components/LoadingScreen";
import Footer from "../Footer/Footer";
import { getSingleJob } from "../controllers/jobController";

function JobDetails(props) {
  const [error, setError] = useState(null);
  const myRef = useRef(null);
  let { id } = useParams();
  let arrayLength

  const [loading, setLoading] = useState(true);
  const [jobDetails, setJobDetails] = useState(null)

  const fetchSingleJobDetailsHandler = async () => {
    const resp = await getSingleJob(id)
    console.log(resp);
    setLoading(false)
    setJobDetails(resp)
  };

  useEffect(() => {
    fetchSingleJobDetailsHandler()
  }, [])


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

  console.log(Math.floor(Math.random()*100)+1)

  return (
    <>
      <LoadingScreen loading={loading}>
        <div className="job_details">
          <div className="container">
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
                {jobDetails?.title && <h1>{jobDetails.title}</h1>}
                {jobDetails?.location && <p>{jobDetails.location}</p>}
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
              dangerouslySetInnerHTML={{ __html: jobDetails?.description }}
            ></div>

            {
              jobDetails?.skills.length !== 0 && (
                <div className="header">
                  <p className="title skills-para">Skills</p>
                  <ul className="skills-list">
                    {jobDetails?.skills.map((skill) => (
                      <li key={Math.floor(Math.random()*100)+1}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )
            }

          
          <JobForm
            jobId={jobDetails?.id}
            refProp={myRef}
            onLoading={loadingHandler}
          />
        </div>
        </div>
        <Footer />
      </LoadingScreen>
    </>
  );
}

export default JobDetails;
