import React from "react";
import { Link } from 'react-router-dom'

const Biography = () => (
    <div>
        <div>
            <h1>Fidelis Ekwunife</h1>
            <h3>Software Enginner</h3>
        </div>

        <div>
            <p>
                <span>
                    I build open <span>front-end</span>and <span>backend</span> libraries
                </span>
            </p>
        </div>

        <div>
            <Link to="/project">
                <button>
                    Explore
                </button>
            </Link>
        </div>
    </div>
)

export default Biography