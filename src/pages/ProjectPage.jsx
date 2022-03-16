import React from "react";
import Project from "../components/project/Project";
import Layout from "../layout/Layout";

const ProjectPage = () => (
    <div>
        <Layout active="project" title="Project">
            <Project />
        </Layout>
    </div>
)

export default ProjectPage