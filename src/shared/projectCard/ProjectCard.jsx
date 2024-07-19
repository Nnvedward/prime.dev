import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({
  id,
  index,
  title,
  description,
  github,
  live,
  stack,
  isPrivate,
  fullWidth,
  isPackage,
}) => (
  <div
    className={`box_container ${
      index % 2 !== 0 && !fullWidth ? "box_container_pad" : ""
    } ${fullWidth && "box_container_full"}`}
  >
    <div className="box">
      <div className="project_details">
        <h3>{title}</h3>
        <small>{stack}</small>
        <p style={{ marginBottom: "4em" }}>{description}</p>
      </div>
      <div className="project_links_container">
        <div className="project_links">
          <small className="hover-effect">
            {/* <a href={live} target="_blank" rel="noopener noreferrer"> */}
            <Link to={`/preview/${id}`}>
              {isPackage ? (
                <div>
                  <i className="fas fa-cube"></i> Pkg Repo
                </div>
              ) : (
                <div>
                  <i className="fas fa-eye"></i> Preview
                </div>
              )}
            </Link>
          </small>
          {isPrivate ? (
            ""
          ) : (
            <small className="hover-effect">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github"></i> Code{" "}
              </a>
            </small>
          )}
        </div>
        <small className="hover-effect">
          <a
            href={live}
            className="project_preview_container"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small className="project_preview">
              <i className="fas fa-arrow-right"></i>
            </small>
          </a>
        </small>
      </div>
    </div>
  </div>
);

export default ProjectCard;
