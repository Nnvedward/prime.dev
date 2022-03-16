import React from "react";
import { Link } from "react-router-dom";
import './Error.css'

const Error = () => (
    <div id="error404">
        <div className="error_container">
            <h1>404</h1>
            <span></span>
            <p>oops! this page cant be found</p>
            <div className="go_button_container">
                Go to <span></span>
                <Link to="/">
                    DashBoard
                </Link>
            </div>
        </div>
    </div>
)

export default Error