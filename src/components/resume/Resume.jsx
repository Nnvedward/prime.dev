import React from "react";
import ResumeCard from "../../shared/resumeCard/ResumeCard";
import { Link } from 'react-router-dom'
import Button from "../../shared/button/Button";
import './Resume.css'

const Resume = () => {
    const experiences = [
        {
            company: "BlueTag Technologies",
            position: "Software Developer",
            started: "September 2020",
            ended: null,
            description:
                " Developing software applications (coding, programming) in compliance with acceptable industry ethics, protocols and standards.",
            achievements: [
                "Managing and maintaining of the company's code.",
                "Adhering to the company policies and Standard Operating Procedure manuals.",
                "Documenting and testing new software applications.",
                "Collaborating with teammates and management for best software results.",
                "Approaching problems analytically and creating solutions.",
                "Active engagement in the achievement of Goals and Objectives in line with the Company’s vision relevant to responsibilities granted to you, which may be amended from time to time."
            ],
        },
        {
            company: "Freelance",
            position: "Backend Developer",
            started: "March 2020",
            ended: "September 2020",
            description:
                "I built and contributed in developing projects for six months while learning new skills",
            achievements: [
                "Built RESTFUL application programming interface.",
                "Enhanced Web sites and applications by developing robust databases.",
                "Analyzed software requirements and worked with team members to develop solutions.",
                "Debugging and testing codes."
            ],
        },
    ]

    return (
        <div className="resume">
            <div className="resume_container">
                <div className="top_row">
                    <h1>Edward Ugwu</h1>
                    <div className="buttons">
                        <a
                            href="https://www.linkedin.com/in/edward-ugwu-6027831b5/"
                        >
                            <small>
                                <i className="fab fa-linkedin"></i> <span>Linked In</span>
                            </small>
                        </a>
                        <a
                            href=""
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
                        I bring ideas to Software, i build high-quality and scalable applications with good
                        users interaction and experience.
                    </p>
                </div>
                <div className="divider">
                    <p>Stacks</p>
                    <span></span>
                </div>
                <div className="skills">
                    <p>
                        Javascript [ES6+], MongoDB, Express, React JS, Node JS,
                        Redux, Firebase, HTML/CSS/SASS, MySQL
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
                                <Link to="/project"> -Projects</Link>
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