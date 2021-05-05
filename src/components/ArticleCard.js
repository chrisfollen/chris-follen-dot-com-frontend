import React from 'react'

export default function ArticleCard({ article }) {
    return (
        <div className = 'article-card clickable'>
            <a href='http://www.chrisfollen.com'><img className= 'article-card-image' src={article.image_1_url} alt='blog post hero'/></a>
            <a href='http://www.chrisfollen.com' ><h5>{article.title}</h5></a>
            <h6>{article.date}</h6>
        </div>
    )
}
