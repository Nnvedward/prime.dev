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
            isPrivate: false
        }
    ]
    const projects = [
        {
            title: "Butiq",
            description: "An E-commerce store for Fashion & Style.",
            github: "https://github.com/Nnvemeka/butiq",
            live: "https://butiq.netlify.com",
            stack: "MongoDB + Express + ReactJS + NodeJS",
            isPrivate: false
        },
        {
            title: "Task Manager Api",
            description: "Rest API for managing your task.",
            github: "",
            live: "https://github.com/Nnvemeka/task-manager-api",
            stack: "MongoDB + Express + NodeJS",
            isPackage: true,
            isPrivate: true
        },
        {
            title: "Krypto World",
            description: "A cryptocurrency application.",
            github: "https://github.com/Nnvemeka/krptoworld",
            live: "https://kryptoworld.vercel.app",
            stack: "React + Redux-toolkit + Coinranking API",
            isPrivate: false
        },
        {
            title: "Expensify",
            description: "Keep track of your expenses!",
            github: "https://github.com/Nnvemeka/expensify-app",
            live: "https://nnv-expensify-app.herokuapp.com",
            stack: "ReactJS + Firebase + Redux",
            isPrivate: false
        },
        {
            title: "Chat App",
            description: "Create a chat room and enjoy your conversation.",
            github: "https://github.com/Nnvemeka/chat-app",
            live: "https://nnv-chat.herokuapp.com",
            stack: "NodeJS + SocketIO + Express",
            isPrivate: false
        },
        {
            title: "Indecision",
            description: "What do you want to do? Let this application help you decide!",
            github: "https://github.com/Nnvemeka/Indecision-app",
            live: "https://nnv-indecision.netlify.app",
            stack: "ReactJS",
            isPrivate: false
        },
        {
            title: "Weather App",
            description: "Weather forcast application.",
            github: "https://github.com/Nnvemeka/weather-app",
            live: "https://nnv-weather-application.herokuapp.com",
            stack: "NodeJs + Express",
            isPrivate: false
        }
    ]

    return (
        <div className="project">
            <div className="portfolio_showcase">
                <h3 className="title">PROJECTS</h3>
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