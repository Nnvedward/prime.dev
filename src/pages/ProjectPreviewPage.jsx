import React from "react";
import Layout from "../layout/Layout";
import Preview from "../components/preview/Preview";

const ProjectPreviewPage = () => (
  <div>
    <Layout active="project" title="Project">
      <Preview />
    </Layout>
  </div>
);

export default ProjectPreviewPage;
