import React from "react";
import ProjectCard from "../../shared/projectCard/ProjectCard";
import Button from "../../shared/button/Button";
import "./Project.css";

const Project = () => {
	const featuredProjects = [
		{
			title: "Task Manager Api",
			description: "Rest Api for managing your task",
			github: "",
			live: "",
			stack: "MongoDB + Express + React + Node JS",
			isPrivate: false,
		},
		{
			title: "Indecision",
			description:
				"What do you want to do? Let this application help you decide!",
			github: "https://github.com/Nnvemeka/Indecision-app",
			live: "https://nnv-indecision.netlify.app",
			stack: null,
			isPrivate: false,
		},
		{
			title: "Chat App",
			description: "Create a chat room and enjoy your conversation.",
			github: "https://github.com/Nnvemeka/chat-app",
			live: "https://nnv-chat.herokuapp.com",
			stack: "NodeJS + SocketIO + Express",
			isPrivate: false,
		},
		{
			title: "Weather App",
			description: "Weather forcast application.",
			github: "https://github.com/Nnvemeka/weather-app",
			live: "https://nnv-weather-application.herokuapp.com",
			stack: "NodeJs + Express",
			isPrivate: false,
		},
	];
	const projects = [
		{
			title: "Prexcribe",
			description:
				"Prexcibe is a healthcare Saas platform which aims at strengthening care coordination and informed clinical decision-making in patient management.",
			github: "",
			live: "https://app.prexcribe.io",
			stack: null,
			isPrivate: true,
		},
		{
			title: "Kellispay",
			description:
				"Kellispay is a one-stop-shop payment ecosystem aimed at providing everyday financial access and solutions to it's customers.",
			github: null,
			live: "https://kellispay.com",
			stack: null,
			isPrivate: true,
		},
		{
			title: "Gezawa Commodity Exchange",
			description: "GCMX Trading platform.",
			github: null,
			live: "http://gcmx.bluetag.tech/auth/market",
			stack: null,
			isPrivate: true,
		},
		{
			title: "Butiq",
			description: "An E-commerce store for Fashion & Style.",
			github: "https://github.com/Nnvemeka/butiq",
			live: "https://shop-butiq.vercel.app",
			stack: null,
			isPrivate: false,
		},
		{
			title: "Krypto World",
			description: "A cryptocurrency application.",
			github: "https://github.com/Nnvemeka/krptoworld",
			live: "https://kryptoworld.vercel.app",
			stack: null,
			isPrivate: false,
		},
		{
			title: "Expensify",
			description: "Keep track of your expenses!",
			github: "https://github.com/Nnvemeka/expensify-app",
			live: "https://nnv-expensify-app.herokuapp.com",
			stack: null,
			isPrivate: false,
		},
	];

	return (
		<div className="project">
			<div className="portfolio_showcase">
				<h3 className="title">PROJECTS</h3>
				{projects.map((project, index) => (
					<ProjectCard {...project} key={index} id={index} />
				))}
			</div>
			<div>
				<Button
					previous={{ url: "/", text: "Home" }}
					next={{ url: "/article", text: "Article" }}
				/>
			</div>
		</div>
	);
};

export default Project;
