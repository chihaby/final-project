import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
      <div>
      <a className="navbar-brand" href="/" >
        Carpool Pal, Where pals commute
      </a>
      </div>
      <div className="navbar-nav mr-auto">
        <span><a href="/"> Home</a></span>
        <span><a href="/about"> About</a></span>
        <span><a href="/drivers">Drivers Form</a></span>
        <span><a href="/riders">Riders Form</a></span>
        <span><a href="/driversList">Drivers List</a></span>
        <span><a href="/ridersList">Riders List</a></span>
      </div>
    </nav>
  );
}

export default Nav;
