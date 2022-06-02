import React from "react";
import ResumeCard from "../../shared/resumeCard/ResumeCard";
import { Link } from 'react-router-dom'
import Button from "../../shared/button/Button";
import './Resume.css'
import pdf from '../../static/Edward-ugwu.pdf'

const Resume = () => {
    const experiences = [
        {
            company: "BlueTag Technologies",
            position: "Software Developer",
            started: "Feb 2021",
            ended: null,
            description: null,
            achievements: [
                "Designed an application using a REST API architecture developing a robust database.",
                "Managed fast-paced software delivery model from within a complex development ecosystem.",
                "Enhanced applications and improved performance using testing and validation against requirements.",
                "Coordinated concepts, libraries and style guides for the development team."
            ],
        },
        {
            company: "BlueTag Technologies",
            position: "Software Developer Intern",
            started: "Sept 2020",
            ended: "Jan 2021",
            description: null,
            achievements: [
                "Refactored the backend codebase to use the MVC (model, views and controllers) file structure.",
                "Built React components and fetched the backend REST API endpoints using Axios.",
                "Used chrome developer tool for debugging."
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
                    I have a grounded knowledge and experience for building a functional, scalable and efficient web application
                    that satisfies the need of the end-user with the core web development stacks.
                    </p>
                </div>
                <div className="divider">
                    <p>Tools & Technologies</p>
                    <span></span>
                </div>
                <div className="skills">
                    <p>
                        Node.JS, Express, React, JavaScript, MongoDB, MySQL, Git, Typescript, 
                         Firebase, REST API, GraphQL, Prisma, Docker, Bootstrap, HTML/CSS/SASS
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