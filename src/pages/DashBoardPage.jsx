import React from "react";
import Project from "../components/project/Project";
import Layout from "../layout/Layout";
import Biography from "../shared/biography/Biography";

const DashBoardPage = () => (
    <div>
    <Layout home={true} active="work">
            <Project />
       </Layout>
    </div>
)

export default DashBoardPage