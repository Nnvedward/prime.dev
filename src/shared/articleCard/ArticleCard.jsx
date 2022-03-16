import React from "react"
import { Link } from 'react-router-dom'
import minutes from "../../utils/worldCount"
import './ArticleCard.css'

const ArticleCard = ({ id, tags, url, first_publication_date, data }) => {
    const { title, content } = data;
    const { mins } = minutes(content.text);

    return (
        <article
            className={`article_container ${id % 2 !== 0 ? "box_container_pad" : ""} `}
            itemScope
            itemType="http://schema.org/Article"
        >
            <Link
                to={url}
                itemProp="url"
                className="article"
            >
                <div className="article_meta">
                    <small className="article_tags">
                        {tags.map((tag, index) =>
                            index === tags.length - 1 ? tag : `${tag}, `
                        )}
                    </small>
                    <small className="article_date"> {first_publication_date} </small>
                </div>

                <div className="article_title">
                    <h3>{title.text}</h3>
                    <small className="article_length">
                        <i className="far fa-clock"></i>{" "}
                        {mins === 0 ? `1 min` : `${mins} mins`} read
                    </small>
                </div>
            </Link>
        </article>
    );
};

export default ArticleCard