import React from "react";
import Footer from "../Footer/Footer";
import "./LoadingScreen.css";

const LoadingScreen = (props) => {

  return (
    <>
      <div style={{ position: "relative" }}>
        {props.loading && (
          <div className="load-div">
            <div className={props.loading ? "loader" : ""}></div>
          </div>
        )}
        {props.children}
      </div>
    </>
  );
};

export default LoadingScreen;
