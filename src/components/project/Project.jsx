import React from "react";
import ProjectCard from "../../shared/projectCard/ProjectCard";
import Button from "../../shared/button/Button";
import { projects } from "../../utils/projectLists";
import "./Project.css";

const Project = () => {
  return (
    <div className="project">
      <div className="portfolio_showcase">
        <h3 className="title">PROJECTS</h3>
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} index={index} />
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
