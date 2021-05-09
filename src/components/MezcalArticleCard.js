import React from 'react'

export default function MezcalArticleCard({ article, deletePost, toggleEditArticleModal }) {

    const cleanDate = () => {
        const dateArray = article.date.split('-')
        return `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
    }

    const handleDeleteClick =() => {
        deletePost(article)
    }

    const handleEditClick =() => {
        toggleEditArticleModal(article)
    }

    return (
        <div className = 'mezcal-article-card'>
                <img className= 'mezcal-article-card-image' src={article.image_1_url} alt='blog post hero'/>
                <div className= 'mezcal-article-card-text'>
                    <h5>{article.title}</h5>
                    <h6>{cleanDate()}</h6>
                    <div className='mezcal-card-button-container'>
                        <button className='edit-button clickable' onClick={handleEditClick}>Edit Post</button>
                        <button className='clickable delete-button' onClick={handleDeleteClick}>Delete Post</button>
                    </div>
                </div>
        </div>
    )
}
