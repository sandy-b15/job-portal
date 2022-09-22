import React, { Fragment } from "react";
import JobOpenings from "./components/JobOpenings";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SingleJobListing from "./components/Listing/SingleJobListing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<JobOpenings />} />
        <Route path="/job/:id" element={<SingleJobListing />} />
      </Routes>
    </Fragment>
  );
}

export default App;
