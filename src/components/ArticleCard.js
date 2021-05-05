import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {
    return (
        <div className = 'article-card clickable'>
            <Link to={`/journal/${article.slug}`}>
                <img className= 'article-card-image' src={article.image_1_url} alt='blog post hero'/>
                <h5>{article.title}</h5>
                <h6>{article.date}</h6>
            </Link>
        </div>
    )
}
