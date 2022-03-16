import React from "react";
import ArticleCard from "../../shared/articleCard/ArticleCard";
import Button from "../../shared/button/Button";

const Article = ({ articles }) => {
    return (
        <div className="article">
      <div className="article_posts">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} id={index} />
        ))}
      </div>
            <Button
                previous={{ url: "/project", text: "Projects" }}
                next={{ url: "/resume", text: "Resume" }}
            />
        </div>
    )
}
export default Article