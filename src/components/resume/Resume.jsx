import React from "react";
import ResumeCard from "../../shared/resumeCard/ResumeCard";
import { Link } from 'react-router-dom'
import Button from "../../shared/button/Button";
import './Resume.css'
import pdf from '../../static/Edward.pdf'

const Resume = () => {
    const experiences = [
        {
            company: "Prexcribe",
            position: "Frontend Engineer",
            started: "Jul 2022",
            ended: null,
            description: null,
            achievements: [
                "Designed and updated layouts to meet usability and performance requirements.",
                "Collaborated with the UI/UX team to improve the application, increasing it's usage by 25%.",
                "Responsible for consuming REST API endpoints and business logic for the web application."
            ],
        },
        {
            company: "Kellispay (Contract)",
            position: "Frontend Engineer",
            started: "Jan 2022",
            ended: "Mar 2022",
            description: null,
            achievements: [
                "Built the website landing page using standard HTML and CSS practices.",
            ],
        },
        {
            company: "BlueTag Technologies",
            position: "Frontend Engineer",
            started: "Sept 2020",
            ended: null,
            description: null,
            achievements: [
                "Managed full cycle design tasks and consulted customers to gather requirements and discuss design choices.",
                "Worked on management solutions eg: school portals, E-library, Etc.",
                "Coordinated concepts, libraries and style guides for the development team."
            ],
        }
    ]

    return (
        <div className="resume">
            <div className="resume_container">
                <div className="top_row">
                    <h1>Edward Ugwu</h1>
                    <div className="buttons">
                        <a
                            href="https://www.linkedin.com/in/nnvemeka/"
                        >
                            <small>
                                <i className="fab fa-linkedin"></i> <span>LinkedIn</span>
                            </small>
                        </a>
                        <a
                            href={pdf}
                        >
                            <small>
                                <i className="fas fa-download"></i> <span>Download </span>
                            </small>
                        </a>
                    </div>
                </div>
                <p>Software Developer</p>
                <div className="summary">
                    <p>
                    I build functional, scalable and efficient web application
                    that satisfies the need of the end-user with modern web development technologies.
                    </p>
                </div>
                <div className="divider">
                    <p>Tools & Technologies</p>
                    <span></span>
                </div>
                <div className="skills">
                    <p>
                         React, Angular, JavaScript, MongoDB, MySQL, Git, Typescript, 
                         Node.JS, Express, Firebase, REST API, Bootstrap, Chakra UI, HTML/CSS/SASS
                    </p>
                </div>
                <div className="divider">
                    <p>Experiences</p>
                    <span></span>
                </div>
                <div>
                    {
                        experiences.map((experience, index) => (
                            <ResumeCard {...experience} key={index} id={index} />))
                    }
                </div>
                <div className="divider">
                    <p>Projects</p>
                    <span></span>
                </div>
                <div className="exp_container">
                    <section className="experience">
                        <article className="description">
                            <p className="nospan">
                                Links to my works can be found on {" "}
                                <Link to="/project"> Projects</Link>
                            </p>
                        </article>
                    </section>
                </div>
            </div>
            <Button
                previous={{ url: '/article', text: 'Article' }}
                next={{ url: '/', text: 'Home' }}
            />
        </div>
    )
}

export default Resume