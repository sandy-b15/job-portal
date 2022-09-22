import React , {useEffect, useState , useCallback} from "react"
import {useParams , Link} from "react-router-dom"
import JobOpenings from "../JobOpenings";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SingleJobListing.css"

const SingleJobListing = () => {

    let {id} = useParams()
    const [jobDetails, setJobDetails] = useState({})
    const [error, setError] = useState(null);

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
        loadedData.title = data.title
        loadedData.location = data.branch.city
        loadedData.state = data.branch.state
        loadedData.description = data.description
 
        console.log(loadedData)

        setJobDetails((jobDetails) => ({
            ...jobDetails,
            ...loadedData
        }))
        
  
      } catch (error) {
        setError(error.message);
      }
    }, []);
  
    useEffect(() => {
      fetchSingleJob();
    }, [fetchSingleJob])

    return(
        <div>
            <div className="card">
            <div className="box">
                <Link to="/" element={<JobOpenings/>} className="nav">Back</Link>
                <Button className="button">Apply</Button>
            </div>
            <div className="jobTitle">
                <h1>{jobDetails.title}</h1>
                <p>{jobDetails.location} , {jobDetails.state}</p>
            </div>
            <div className="header-main">
                <h2 className="title">Who We Are</h2>
                <p className="para">'Lucida Technologies' is a Bangalore based Technology firm specializing in the areas of Digital and Analytics solutions,Machine Learning and Artificial Intelligence.We cater to multiple clients in India,Malaysia,Singapore and USA spanning across various domains and industries</p>
            </div>
            </div>

            <div className="header">
                <h2 className="title">Job description</h2>
                <p className="para">{jobDetails.description}</p>
            </div>
            
            <div className="header">
                <h2 className="title">Roles & Responsibilities</h2>
                <p className="para">Roles</p>
            </div>
            
        </div>
    )


}

   

export default SingleJobListing