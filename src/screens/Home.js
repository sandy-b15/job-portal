import React, { useState , useRef } from "react";
import Intro from "../components/Intro";
import JobOpenings from "../components/JobOpenings";
import "./home.css"

const Home = () => {

  const myRef = useRef(null)

  const clickHandler = () => {

    if (true) {
      myRef.current.scrollIntoView()
    }
  }

    return (
      <div className="home">
        <Intro refVal = {clickHandler}/>
        <JobOpenings/>
      </div>
    )
}

export default Home;
