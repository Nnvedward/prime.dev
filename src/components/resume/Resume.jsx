import React from "react";
import ResumeCard from "../../shared/resumeCard/ResumeCard";
import { Link } from "react-router-dom";
import Button from "../../shared/button/Button";
import "./Resume.css";
import pdf from "../../static/Edward_Ugwu.pdf";

const Resume = () => {
	const experiences = [
		{
			company: "Prexcribe",
			position: "Frontend Engineer",
			started: "Jul 2022",
			ended: null,
			description: null,
			achievements: [
				"Made recommendations for new technology integration based on suitability and alignment to business goals.",
				"Increased web application usage by 35% by implementing unit tests.",
				"Liaised between marketing and IT on web development projects integrating front-end assets to back-end systems.",
				"Teamed on user-centric design strategy in translation of UX and business requirements into coded solutions.",
			],
		},
		{
			company: "BlueTag Technologies Limited",
			position: "Frontend Engineer",
			started: "Jan 2020",
			ended: "Nov 2022",
			description: null,
			achievements: [
				"Updated old code bases to modern development standards, improving functionality by 20%.",
				"Collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development.",
				"Integrated constructive programs into cohesive product.",
				"Designed intuitive graphical user interfaces to improve user experience.",
				"Integrated software components into fully functional software system.",
			],
		},
		{
			company: "Kellispay",
			position: "Frontend Developer (Contract)",
			started: "Jan 2022",
			ended: "Jun 2022",
			description: null,
			achievements: [
				"Planned and developed interfaces that simplified overall management and ease usage.",
				"Optimized website and increased speed by 15%.",
				"Built and deployed scalable mobile responsive User Interfaces for maximized User experience.",
				"Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs and enhancements",
			],
		},
		{
			company: "Davayte",
			position: "Frontend Engineer (Contract)",
			started: "Jan 2019",
			ended: "Dec 2019",
			description: null,
			achievements: [
				"Worked cooperatively with client services, sales and design team in deadline-driven environment.",
				"Designed and updated layouts to meet usability and performance requirements, increasing app speed by 10%.",
				"Coded using HTML, CSS and JavaScript to develop features for both mobile and desktop platforms.",
				"Improved tools to boost user interaction and deliver design versatility.",
			],
		},
		{
			company: "Nigerian Breweries PLC",
			position: "Software Developer (IT)",
			started: "Apr 2018",
			ended: "Sept 2018",
			description: null,
			achievements: [
				"Built and deployed scalable mobile responsive User Interfaces for maximized User experience.",
				"Assisted with search engine optimization (SEO) strategies and techniques.",
				"Worked with version control systems such as Git and SVN.",
				"Wrote well designed, testable and efficient code.",
				"Participated in code reviews to ensure best practices.",
			],
		},
	];

	return (
		<div className="resume">
			<div className="resume_container">
				<div className="top_row">
					<h1>Edward Ugwu</h1>
					<div className="buttons">
						<a href="https://www.linkedin.com/in/nnvemeka/">
							<small>
								<i className="fab fa-linkedin"></i> <span>LinkedIn</span>
							</small>
						</a>
						<a href={pdf} download>
							<small>
								<i className="fas fa-download"></i> <span>Download </span>
							</small>
						</a>
					</div>
				</div>
				<p>Software Engineer</p>
				<div className="summary">
					<p>
						An experienced front-end engineer with demonstrated expertise in
						React, Angular, HTML, CSS, JavaScript and Typescript, I specialize
						in developing responsive websites and web applications that provide
						a beautiful, intuitive user experience and drive maximum engagement
						and conversions. I have a keen eye for detail and have successfully
						applied my skills to the financial, e-commerce, and health care
						industries. With a passion for creating top-notch user experiences,
						I take pride in my work and always strive to create the best user
						experience possible.
					</p>
				</div>
				<div className="divider">
					<p>Tools & Technologies</p>
					<span></span>
				</div>
				<div className="skills">
					<p>
						React, Angular, JavaScript, Typescript, HTML/CSS/SASS/SCSS,
						Bootstrap, Chakra UI, MongoDB, MySQL, Git, Node.JS, Express,
						Firebase, REST API, C#, ASP.Net
					</p>
				</div>
				<div className="divider">
					<p>Experiences</p>
					<span></span>
				</div>
				<div>
					{experiences.map((experience, index) => (
						<ResumeCard {...experience} key={index} id={index} />
					))}
				</div>
				<div className="divider">
					<p>Projects</p>
					<span></span>
				</div>
				<div className="exp_container">
					<section className="experience">
						<article className="description">
							<p className="nospan">
								Links to my works can be found on{" "}
								<Link to="/project"> Projects</Link>
							</p>
						</article>
					</section>
				</div>
			</div>
			<Button
				previous={{ url: "/article", text: "Article" }}
				next={{ url: "/", text: "Home" }}
			/>
		</div>
	);
};

export default Resume;
