import React from "react";
import ArticleCard from "../../shared/articleCard/ArticleCard";
import Button from "../../shared/button/Button";

const Article = () => {
  const articles = [{
    id: 1,
    tags: 'Nnvemeka',
    url: 'nnvemeka.dev',
    first_publication_date: 'April 30, 2022',
    data: {
      title: 'Coming soon!',
      content: '...'
    }
  }]
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