import React from "react";

const ProjectCard = ({
    id,
    title,
    description,
    github,
    live,
    stack,
    isPrivate,
    fullWidth,
    isPackage,
}) => (
    <div className={`box_container ${id % 2 !== 0 && !fullWidth ? "box_container_pad" : ""
        } ${fullWidth && "box_container_full"}`}>
        <div>
            <div>
                <h3>{title}</h3>
                <small>{stack}</small>
                <p>{description}</p>
            </div>
            <div>
                <small>
                    <a href={live}>
                        {
                            isPackage ? (
                                <div>
                                    <i></i> {" "} pkg Repo
                                </div>
                            ) : (
                                <div>
                                    <i></i> {" "} live
                                </div>
                            )
                        }
                    </a>
                </small>
                <small>
                    <a href={github}>
                        {
                            isPrivate ? (
                                " "
                            ) : (
                                <div>
                                    <i></i> {" "} Code
                                </div>
                            )
                        }
                    </a>
                </small>
            </div>
        </div>
    </div>
)

export default ProjectCard