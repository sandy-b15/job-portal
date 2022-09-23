import React, { PureComponent } from "react";
import Intro from "../components/Intro";
import JobOpenings from "../components/JobOpenings";

class home extends React.Component {
  render() {
    return (
      <div>
        <Intro />
        <JobOpenings/>
      </div>
    );
  }
}

export default home;
