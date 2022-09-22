import React from "react";
import { Link } from "react-router-dom";
import "./JobOpenings.css";
import { useNavigate } from "react-router-dom";

const IndividualJobs = (props) => {
  let navigate = useNavigate();
  const onPress = () => {
    let id = props.id
    navigate(`/jobDetails/${id}`, { state: { jobDetails: props } });
  };
  return (
    <li>
      <div className="card job_card">
        <div className="card-body">
          <h5 className="card-title mb-2">{props.title}</h5>
          <h6 className="card-subtitle mb-4 ">
            Experience:
            {props.experience === null ? " Any" : ` ${props.experience}`}
          </h6>
          <h6 className="card-subtitle" style={{ marginBottom: "5px" }}>
            Job Description
          </h6>
          <div
            style={{ height: "100px", fontSize: 12, overflow: "hidden" }}
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></div>

          <div style={{ marginTop: "10px" }} className="btn-actions">
            <button onClick={onPress} className="apply-button">
              Apply
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default IndividualJobs;
