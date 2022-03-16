import React from "react";
import ProjectCard from "../../shared/projectCard/ProjectCard";
import Button from '../../shared/button/Button'
import './Project.css'

const Project = () => {
    const featuredProjects = [
        {
            title: "Task Manager Api",
            description: "Rest Api for managing your task",
            github: "",
            live: "",
            stack: "MongoDB + Express + React + Node JS",
            isPackage: true
        },
        {
            title: "Task Manager Api",
            description: "Rest Api for managing your task",
            github: "",
            live: "",
            stack: "MongoDB + Express + React + Node JS",
            isPrivate: false
        }
    ]
    const projects = [
        {
            title: "Task Manager Api",
            description: "Rest Api for managing your task",
            github: "",
            live: "",
            stack: "MongoDB + Express + React + Node JS",
            isPrivate: true
        },
        {
            title: "Task Manager Api",
            description: "Rest Api for managing your task",
            github: "",
            live: "",
            stack: "MongoDB + Express + React + Node JS",
            isPrivate: false
        },
        {
            title: "Task Manager Api",
            description: "Rest Api for managing your task",
            github: "",
            live: "",
            stack: "MongoDB + Express + React + Node JS",
            isPrivate: false
        }
    ]

    return (
        <div className="project">
            <div className="portfolio_showcase portfolio_showcase_full">
                <h3 className="title">FEATURED</h3>
                {
                    featuredProjects.map((project, index) => (
                        <ProjectCard {...project} key={index} id={index} />
                    ))
                }
            </div>
            <div className="portfolio_showcase">
                <h3 className="title">OTHERS</h3>
                {
                    projects.map((project, index) => (
                        <ProjectCard {...project} key={index} id={index} />
                    ))
                }
            </div>
            <div>
                <Button
                    previous={{ url: '/', text: 'Home' }}
                    next={{ url: '/article', text: 'Article' }}
                />
            </div>
        </div>
    )
}

export default Project