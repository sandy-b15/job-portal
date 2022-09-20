import JobOpenings from "./components/JobOpenings";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function App() {
  const fetchJobDetailsHandler = async () => {
    let url = "https://lucidatechnologies-team.freshteam.com/api/job_postings";
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

      console.log(data);

      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          id: data[key].id,
          title: data[key].title,
        });
      }

      console.log(loadedData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchJobDetailsHandler();
  }, []);

  return <JobOpenings />;
}

export default App;
