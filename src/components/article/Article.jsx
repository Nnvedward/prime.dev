import React from "react";
import ArticleCard from "../../shared/articleCard/ArticleCard";
import Button from "../../shared/button/Button";

const Article = () => {
    return (
        <div>
            <div>

            </div>
            <Button
                previous={{ url: "/project", text: "Projects" }}
                next={{ url: "/resume", text: "Resume" }}
            />
        </div>
    )
}
export default Article