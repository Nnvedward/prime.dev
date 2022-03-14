import React from "react";
import ProjectCard from "../../shared/projectCard/ProjectCard";

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
            isPrivate: false
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
        <div>
            <div>
              <h3>FEATURED</h3>
              {
                  featuredProjects.map((project, index) => (
                      <ProjectCard {...project} key={index} id={index} />
                  ))
              }
            </div>
            <div>
            <h3>OTHERS</h3>
            {
                projects.map((project, index) => (
                    <ProjectCard {...project} key={index} id={index} />
                ))
            }
            </div>
        </div>
    )
}

export default Project