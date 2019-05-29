import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import './style.css'

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
                        Rider
                    </button>
                </Link>
            </div>
            <div className="logIn w Spotify">
                <a href='http://localhost:3001/login'>
                    <button className="rider-btn">
                        Spotify
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Select;
// <a href='http://localhost:3001/api/login'>