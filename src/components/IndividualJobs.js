import React from "react";
import { Link } from "react-router-dom";
import "./JobOpenings.css";
import { useNavigate } from "react-router-dom";
import "./IndividualJobs.css";

const IndividualJobs = (props) => {
  // console.log(props.description);
  let navigate = useNavigate();

  const onPress = () => {
    let id = props.id;
    navigate(`/jobDetails/${id}`, { state: { jobDetails: props } });
  };

  let string = props.description;
  let length = 100;
  let trimmedString = string.substring(0, length);
  let newString;
  if (trimmedString.length >= 20) {
    newString = `${trimmedString}...`;
  } else {
    newString = trimmedString;
  }
  return (
      <div className="card job_card">
        <div className="card-body bodycard">
          <h5 className="card-title mb-2">{props.title}</h5>
          <h6 className="card-subtitle mb-4 ">
            Experience:
            {props.experience === null ? " Any" : ` ${props.experience}`}
          </h6>
          <h6 className="card-subtitle mb-3">Job Description</h6>
          <div
            className="description-div"
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></div>
          <div className="btn-actions">
            <button className="apply-button mb-auto" onClick={onPress}>
              Apply
            </button>
          </div>
        </div>
      </div>
  );
};

export default IndividualJobs;
