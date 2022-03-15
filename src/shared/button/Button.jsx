import React from "react";
import { Link } from "react-router-dom";

const Button = ({ previous, next }) => (
    <div>
        <div>
            <Link to={previous.url}>
                <button>
                    {previous.text}
                </button>
            </Link>
            <Link to={next.url}>
                <button>
                    {next.text}
                </button>
            </Link>
        </div>
    </div>
)

export default Button