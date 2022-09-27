import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = (props) => {
  console.log(props.loading);

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
