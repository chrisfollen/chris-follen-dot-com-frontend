import React, { useState, useEffect } from 'react'
import MezcalArticleCard from './components/MezcalArticleCard'
import NewArticleModal from './components/NewArticleModal'

export default function Mezcal() {

    const [articles, setArticles] = useState([])

    const baseURL = 'http://localhost:4000/journal'

    useEffect(() => {
        document.title = "Admin - CHRIS FOLLEN"
     }, []);

    useEffect(()=> {
        fetch(baseURL)
            .then(parseJSON)
            .then(data => sortArticles(data))
            .then(sortedArticles => setArticles(sortedArticles))
    }, [])

    const parseJSON = (data) => {
        return data.json()
    }

    const sortArticles = (articlesIn) => {
        const sortedArticles = articlesIn.sort((a, b) => {
            if(a.date < b.date) { return 1; }
            if(a.date > b.date) { return -1; }
            return 0;
        })
        console.log(sortedArticles)
        return sortedArticles
    }

    const displayArticles = () => articles.map(article => {
        return <MezcalArticleCard key={article.id} article={article}/>
    })

    const [newArticleModalClass, setNewArticleModalClass] = useState('new-article-modal')
    // const [currentArticle, setCurrentArticle] = useState('')

    const toggleNewArticleModal = () => {
        if (newArticleModalClass === 'new-article-modal') {
          setNewArticleModalClass('new-article-modal new-article-modal-active')
        } else {
          setNewArticleModalClass('new-article-modal')
        }
    }

    // const handleNewArticleClick = (event) => {
    //     const currentArticle = event.target.src
    //     setCurrentArticle(photoURL)
    //     toggleNewArticleModal()
    // }

    return (
        <div className = 'mezcal'>
            <div className='mezcal-heading'>
                <h3>Whatchu thinkin'?</h3>
            </div>
            <div className='mezcal-article-container'>
                <button className='new-post-button clickable' onClick={toggleNewArticleModal}>Add New Post</button>
                {articles.length > 1 ? displayArticles() : null}
            </div>
            <NewArticleModal newArticleModalClass={newArticleModalClass} toggleNewArticleModal={toggleNewArticleModal} />
        </div>
    )
}
