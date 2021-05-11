import React, { useState, useEffect } from 'react'
import ArticleCard from './components/ArticleCard'

export default function Journal({ addEventListeners, removeEventListeners }) {

    const [articles, setArticles] = useState([])

    const baseURL = 'http://localhost:4000/journal'

    useEffect(() => {
        document.title = "Journal - CHRIS FOLLEN"
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
        return sortedArticles
    }

    const displayArticles = () => articles.map(article => {
        return <ArticleCard key={article.id} article={article}/>
    })

    removeEventListeners()
    addEventListeners()

    return (
        <div className = 'journal'>
            <div className='journal-heading'>
                <h3>Some thoughts.</h3>
            </div>
            <div className='journal-article-container'>
                {articles.length > 1 ? displayArticles() : null}
            </div>
            
        </div>
    )
}
