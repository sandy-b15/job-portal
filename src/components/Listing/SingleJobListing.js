import React, { useEffect, useState, useCallback, Fragment , useRef } from "react";
import { useParams, Link } from "react-router-dom";
import JobOpenings from "../JobOpenings";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SingleJobListing.css";
import JobForm from "./JobForm";
import {FaAngleLeft} from "react-icons/fa"

const SingleJobListing = () => {
  let { id } = useParams();
  const [jobDetails, setJobDetails] = useState({});
  const [error, setError] = useState(null);
  const myRef = useRef(null)

  const fetchSingleJob = useCallback(async () => {
    setError(null);
    let url = `https://lucidatechnologies-team.freshteam.com/api/job_postings/${id}`;
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

      const loadedData = {};
      loadedData.title = data.title;
      loadedData.location = data.branch.city;
      loadedData.state = data.branch.state;
      loadedData.description = data.description;

      console.log(loadedData);

      setJobDetails((jobDetails) => ({
        ...jobDetails,
        ...loadedData,
      }));
    } catch (error) {
      setError(error.message);
    }
  }, [id]);

  useEffect(() => {
    fetchSingleJob();
  }, [fetchSingleJob]);

  let content;
  if (error) {
    content = error;
  }

  const onClickHandler = () => {
    myRef.current.scrollIntoView()
  }

  return (
    <Fragment>
      <div>
        <div className="info-card">
          <div className="box">
            <Link to="/" element={<JobOpenings />} className="nav">
              <FaAngleLeft className="backarrow"/>Back
            </Link>
            <button className="apply-button" onClick = {onClickHandler}>Apply</button>
          </div>
          <div className="jobTitle">
            {content}
            <h1>{jobDetails.title}</h1>
            <p>
              {jobDetails.location} , Karnataka
            </p>
          </div>
          <div className="header-main">
            <h2 className="title">Who We Are</h2>
            <p>
              'Lucida Technologies' is a Bangalore based Technology firm
              specializing in the areas of Digital and Analytics
              solutions,Machine Learning and Artificial Intelligence.We cater to
              multiple clients in India,Malaysia,Singapore and USA spanning
              across various domains and industries
            </p>
          </div>
        </div>

        <div className="header">
          <h2 className="title">Job description</h2>
          <p>
            Our Software Engineering Team is growing fast, and wave optimizing
            web pages for maximum efficiency and maintaining brand consistency
            across all products. The role will be required to lead the Back-End
            Development team alongside Front-End Development, Design and Product
            Development team to ensure all components and elements displayed on
            screens are consistent and delivered in most consistent and
            efficient way.
          </p>
        </div>

        <div className="header">
          <h2 className="title">Roles & Responsibilities</h2>
          <ul>
            <li>Perform planning for all front-end related projects</li>
            <li>
              R&D and introducing new features to enhance user experiences{" "}
            </li>
            <li>
              Applying and practicing SCRUM ceremonies for each of the projects{" "}
            </li>
          </ul>
          {/* <p className="para">Roles</p> */}
        </div>
      </div>
      <JobForm refProp={myRef}/>
    </Fragment>
  );
};

export default SingleJobListing;