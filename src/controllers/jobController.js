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
        return error.response;
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
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    return applyResponse;
  } else {
    alert("Invalid Job Id");
    return [];
  }
}
