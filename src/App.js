import React, { Fragment } from "react";
import JobOpenings from "./components/JobOpenings";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Intro from "./components/Intro";

function App() {
  return (
    <Fragment>
      <Intro />
      <JobOpenings />
    </Fragment>
  );
}

export default App;
