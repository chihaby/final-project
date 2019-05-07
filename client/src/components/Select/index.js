import React from "react";
import "./style.css";
import { Link } from 'react-router-dom'; 

function Select(props) {
    return (
        <div className="wrapper">
            <div className="driver">
                <Link to="/drivers">
                    <button className="driver-btn">
                    Driver
                    </button>
                </Link>
            </div>
            <div className="rider">
                <Link to="/riders">
                    <button className="rider-btn">
                    Rider.
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Select;
