import React, { useState, useEffect } from 'react'
import MezcalArticleCard from './components/MezcalArticleCard'
import NewArticleModal from './components/NewArticleModal'
import EditArticleModal from './components/EditArticleModal'

export default function Mezcal() {

    const [articles, setArticles] = useState([])

    const baseURL = 'http://localhost:4000/journal/'

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
        return sortedArticles
    }

    const displayArticles = () => articles.map(article => {
        return <MezcalArticleCard key={article.id} article={article} deletePost={deletePost} toggleEditArticleModal={toggleEditArticleModal}/>
    })

    const [newArticleModalClass, setNewArticleModalClass] = useState('new-article-modal')
    const [editArticleModalClass, setEditArticleModalClass] = useState('edit-article-modal')
    const [editArticle, setEditArticle] = useState('')


    const toggleNewArticleModal = () => {
        if (newArticleModalClass === 'new-article-modal') {
          setNewArticleModalClass('new-article-modal new-article-modal-active')
        } else {
          setNewArticleModalClass('new-article-modal')
        }
    }

    const toggleEditArticleModal = (article) => {
        if (editArticleModalClass === 'edit-article-modal') {
            setEditArticle(article)
          setEditArticleModalClass('edit-article-modal edit-article-modal-active')
        } else {
          setEditArticleModalClass('edit-article-modal')
        }
    }

    const addPost = (newPost) => {

        setArticles(sortArticles([newPost, ...articles]))

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newPost)
        }
        fetch(baseURL, options)
    }

    const updatePost = (updatedPost) => {

         const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(updatedPost)
        }
        fetch((baseURL + editArticle.slug), options)
    }

    const deletePost = (article) => {
        const confirmDelete = window.confirm('Delete This Post?')
    
        if (confirmDelete) {

            const updatedPosts = articles.filter(post => post !== article)
            setArticles(updatedPosts)

            const options = {
                method: 'DELETE'
            }
            fetch((baseURL + article.slug), options)
        }
    }
    


    return (
        <div className = 'mezcal'>
            <div className='mezcal-heading'>
                <h3>Whatchu thinkin'?</h3>
            </div>
            <div className='mezcal-article-container'>
                <button className='new-post-button clickable' onClick={toggleNewArticleModal}>Add New Post</button>
                {articles.length > 1 ? displayArticles() : null}
            </div>
            <NewArticleModal newArticleModalClass={newArticleModalClass} toggleNewArticleModal={toggleNewArticleModal} addPost={addPost} />
            <EditArticleModal editArticleModalClass={editArticleModalClass} toggleEditArticleModal={toggleEditArticleModal} updatePost={updatePost} article={editArticle} />
        </div>
    )
}
