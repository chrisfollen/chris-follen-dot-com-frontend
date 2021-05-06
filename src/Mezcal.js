import React, { useState, useEffect } from 'react'
import MezcalArticleCard from './components/MezcalArticleCard'

export default function Mezcal() {

    const [articles, setArticles] = useState([])

    const baseURL = 'http://localhost:4000/journal'

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

    return (
        <div className = 'mezcal'>
            <div className='mezcal-heading'>
                <h3>Whatchu thinkin'?</h3>
            </div>
            <div className='mezcal-article-container'>
                {articles.length > 1 ? displayArticles() : null}
            </div>
            
        </div>
    )
}
