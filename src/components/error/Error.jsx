import React from "react";
import { Link } from "react-router-dom";

const Error = () => (
    <div>
        <h1>404</h1>
        <span></span>
        <p>oops! this page cant be found</p>
        <p>
            Go to <span></span>
            <Link to="/">
                DashBoard
            </Link>
        </p>
    </div>
)

export default Error