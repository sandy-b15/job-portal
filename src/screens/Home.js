import React, { useState, useRef } from "react";
import Intro from "../components/Intro";
import JobOpenings from "../components/JobOpenings";
import "../components/home.css"

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";

const Home = () => {
  const myRef = useRef(null);

  const clickHandler = (val) => {
    if (val) {
      myRef.current.scrollIntoView();
    }
  };

  return (
    <div className="home">
      <Intro refVal={clickHandler} />
      <JobOpenings refProp={myRef} />
      <Footer />
    </div>
  );
};

export default Home;
