import React from 'react'

export default function MezcalArticleCard({ article }) {

    const cleanDate = () => {
        const dateArray = article.date.split('-')
        return `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
    }

    return (
        <div className = 'mezcal-article-card'>
                <img className= 'mezcal-article-card-image' src={article.image_1_url} alt='blog post hero'/>
                <div className= 'mezcal-article-card-text'>
                    <h5>{article.title}</h5>
                    <h6>{cleanDate()}</h6>
                    <div className='mezcal-card-button-container'>
                        <button className='edit-button clickable'>Edit Post</button>
                        <button className='clickable delete-button'>Delete Post</button>
                    </div>
                </div>
        </div>
    )
}
