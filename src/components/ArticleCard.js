import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {

    const cleanDate = () => {
        const dateArray = article.date.split('-')
        return `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
    }

    return (
        <div className = 'article-card clickable'>
            <Link to={`/journal/${article.slug}`}>
                <img className= 'article-card-image' src={article.image_1_url} alt='blog post hero'/>
                <h5>{article.title}</h5>
                <h6>{cleanDate()}</h6>
            </Link>
        </div>
    )
}
