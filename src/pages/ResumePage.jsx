import React from "react";
import Resume from "../components/resume/Resume";
import Layout from "../layout/Layout";

const ResumePage = () => (
    <div>
        <Layout active="resume" title="Resume">
            <Resume />
        </Layout>
    </div>
)

export default ResumePage