import { useState } from "react";
import { useLocation } from "react-router-dom";

function JobDetails(props) {
  const location = useLocation();

  const [jobDetail, setJobdetail] = useState(location.state.jobDetails);

  return <div>{jobDetail.title}</div>;
}

export default JobDetails;
