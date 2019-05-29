import React from "react";
import './style.css'

function Jumbotron({ children }) {
  return (
    <div className="wrapper"
      style={{ height: 100, clear: "both", paddingTop: 20, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
