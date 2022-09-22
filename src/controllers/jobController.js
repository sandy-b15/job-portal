import { getApi } from "../Utils/http";

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
