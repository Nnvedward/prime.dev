import React from "react";
import { Link } from "react-router-dom";
import './Error.css'

const Error = () => (
    <div id="error">
        <div className="error_container">
            <h3>oops! this page can't be found!</h3>
            <div className="go_button_container">
                <Link to="/">
                    <button>
                        Go to... DashBoard
                    </button>
                </Link>
            </div>
        </div>
    </div>
)

export default Error