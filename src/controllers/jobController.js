import { getApi, postApi } from "../Utils/http";

export async function getJobsList(params) {
  let url = "https://lucidatechnologies-team.freshteam.com/api/job_postings";

  const jobList = await getApi(url, params)
    .then((response) => {
      if (response?.data?.length) {
        return response.data;
      }
    })
    .catch((error) => {
      console.log("error", error);
      return [];
    });
  return jobList;
}

export async function getSingleJob(id) {

  if (id) {
    let url = `https://lucidatechnologies-team.freshteam.com/api/job_postings/${id}`;
    const singleJobDetails = await getApi(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        alert("Something went wrong!");
        return {};
      });
    return singleJobDetails;
  } else {
    alert("Invalid Job Id");
    return {};
  }
}

export async function applyJob(jobId, data) {
  if (jobId) {
    let url = `https://lucidatechnologies-team.freshteam.com/api/job_postings/${jobId}/applicants`;
    const applyResponse = await postApi(url, data)
      .then((response) => {
        console.log("response", response);
        return response;
      })
      .catch((error) => {
        console.log("error", error);
        alert("Something went wrong!");
        return [];
      });
    return applyResponse;
  } else {
    alert("Invalid Job Id");
    return [];
  }
}
