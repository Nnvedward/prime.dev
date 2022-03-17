import React from "react";
import { Link } from "react-router-dom";
import './Button.css'

const Button = ({ previous, next }) => (
    <div className="go_button_container">
            <Link to={previous.url}>
                <button>
                <span className="material-icons"></span>{previous.text}
                </button>
            </Link>
            <Link to={next.url}>
                <button>
                    {next.text}<span className="material-icons"></span>
                </button>
            </Link>
    </div>
)

export default Button