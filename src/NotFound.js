import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function NotFound({updateLink}) {

    useEffect(() => {
        document.title = "Not Found - CHRIS FOLLEN"
     }, []);

    return (
        <div className='not-found'>
            <div className='not-found-container'>
                <h2>4L04A</h2>
                <h6>It looks like you’ve arrived in the middle of nowhere. 
                    It’s usually a good place to be, but in this case, it isn’t. 
                    Best head back <Link to="/" onClick={()=> updateLink('/')}><span className='red-text clickable'>home.</span></Link></h6>
            </div>
        </div>
    )
}