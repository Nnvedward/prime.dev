import React from "react";
import ResumeCard from "../../shared/resumeCard/ResumeCard";
import { Link } from 'react-router-dom'
import Button from "../../shared/button/Button";
import './Resume.css'
import pdf from '../../static/Ugwu-Edward-Nnaemeka.pdf'

const Resume = () => {
    const experiences = [
        {
            company: "BlueTag Technologies",
            position: "Software Developer",
            started: "Sept 2021",
            ended: null,
            description:
                " Developing software applications (coding, programming) in compliance with acceptable industry ethics, protocols and standards.",
            achievements: [
                "Created highly responsive and scalable web applications for use in different industries and client environments.",
                "Enhanced applications and improved performance using testing and validations against requirements and performance standards.",
                "Developed, designed, tested, and debugged applications from foundation to full production.",
                "Coordinated concepts, libraries, and style guides for development team.",
                "Helped manage fast-paced software delivery model from within complex development ecosystem.",
                "Tracked changes and seamlessly merged codes from different features and updates to manage versions.",
                "Met application goals with expert use of optimal development tools and frameworks.",
                "Enhanced Web sites and applications by developing robust databases."
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
                            href="https://www.linkedin.com/in/edward-ugwu-6027831b5/"
                        >
                            <small>
                                <i className="fab fa-linkedin"></i> <span>Linked In</span>
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
                    <p>Stacks</p>
                    <span></span>
                </div>
                <div className="skills">
                    <p>
                        Javascript [ES6+], MongoDB, Express, React JS, Node JS,
                         Firebase, HTML/CSS/SASS, MySQL, C#
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