import React from "react";
import Project from "../components/project/Project";
import Layout from "../layout/Layout";

const DashBoardPage = () => (
    <div>
    <Layout home={true} active="work">
            <Project />
       </Layout>
    </div>
)

export default DashBoardPage