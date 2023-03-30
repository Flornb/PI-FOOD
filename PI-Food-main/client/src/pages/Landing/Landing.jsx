import React from "react";
import { Link } from "react-router-dom";
import './Landing.css';

const Landing = () => {
    return (
        <div className="divContainer-landing">
            <h1>Welcome to my food page</h1>
            <Link to ='/home'>
                <button>Start</button>
            </Link>
        </div>
    )
}
export default Landing;