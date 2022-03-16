import React from "react";
import Article from "../components/article/Article";
import Layout from "../layout/Layout";

const ArticlePage = () => (
    <div>
        <Layout active="article" title="Article">
            <Article />
        </Layout>
    </div>
)

export default ArticlePage