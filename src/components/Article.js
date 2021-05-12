import React, { useState, useEffect } from 'react'


export default function Article({ match }) {

    const [article, setArticle] = useState({})

    const baseURL='https://chrisfollendotcom.herokuapp.com/journal/'

    useEffect(() => {
        document.title = "Article - CHRIS FOLLEN"
     }, []);

    useEffect(() => {
        fetch(baseURL + match.params.slug)
            .then(parseJSON)
            .then(data => setArticle(data))
    }, [match.params.slug])

    const parseJSON = (data) => {
        return data.json()
    }

    const cleanDate = () => {
        const dateArray = article.date.split('-')
        return `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
    }

    return (
        <div className='article'>
            <div className='article-container'>
                {article.title ? <h3>{article.title}</h3> : null}
                {article.date ? <h6>{cleanDate()}</h6> : null}
                {article.image_1_url ? <img src={article.image_1_url} alt='hero'></img> : null}
                {article.body1 ? <p>{article.body1}</p> : null}
                {article.image_2_url ? <img src={article.image_2_url} alt='2'></img> : null}
                {article.body2 ? <p>{article.body2}</p> : null}
                {article.image_3_url ? <img src={article.image_3_url} alt='3'></img> : null}
                {article.body3 ? <p>{article.body3}</p> : null}
                {article.image_4_url ? <img src={article.image_4_url} alt='4'></img> : null}
                {article.body4 ? <p>{article.body4}</p> : null}
                {article.image_5_url ? <img src={article.image_5_url} alt='5'></img> : null}
                {article.body5 ? <p>{article.body5}</p> : null}
                {article.image_6_url ? <img src={article.image_6_url} alt='6'></img> : null}
                {article.body6 ? <p>{article.body6}</p> : null}
                {article.image_7_url ? <img src={article.image_7_url} alt='7'></img> : null}
                {article.body7 ? <p>{article.body7}</p> : null}
                {article.image_8_url ? <img src={article.image_8_url} alt='8'></img> : null}
                {article.body8 ? <p>{article.body8}</p> : null}
                {article.image_9_url ? <img src={article.image_9_url} alt='9'></img> : null}
                {article.body9 ? <p>{article.body9}</p> : null}
                {article.image_10_url ? <img src={article.image_10_url} alt='10'></img> : null}
                {article.body10 ? <p>{article.body10}</p> : null}
                {article.image_11_url ? <img src={article.image_10_url} alt='10'></img> : null}
                {article.image_12_url ? <img src={article.image_10_url} alt='10'></img> : null}
                {article.image_13_url ? <img src={article.image_10_url} alt='10'></img> : null}
                {article.image_14_url ? <img src={article.image_10_url} alt='10'></img> : null}
                {article.image_15_url ? <img src={article.image_10_url} alt='10'></img> : null}
                {article.image_16_url ? <img src={article.image_10_url} alt='10'></img> : null}
                {article.image_17_url ? <img src={article.image_10_url} alt='10'></img> : null}
                {article.image_18_url ? <img src={article.image_10_url} alt='10'></img> : null}
                {article.image_19_url ? <img src={article.image_10_url} alt='10'></img> : null}
                {article.image_20_url ? <img src={article.image_10_url} alt='10'></img> : null}
            </div>
        </div>
    )
}
