import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu(props) {

    const handleClick = (path) => {
        props.toggleMenu()
        props.updateLink(path)
    }

    return (
        <div className={props.currentClass}>
            <div className='menu-close clickable' onClick={props.toggleMenu}>
                <h3>&times;</h3>
            </div>
            <div className = 'menu-links'>
                <Link to='/dev' onClick={() => handleClick('/dev')}><h3 className='clickable'>dev</h3></Link>
                <Link to='/photo' onClick={() => handleClick('/photo')}><h3 className='clickable'>photo</h3></Link>
                <Link to='/journal' onClick={() => handleClick('/journal')}><h3 className='clickable'>journal</h3></Link>
                <Link to='/about' onClick={() => handleClick('/about')}><h3 className='clickable'>about</h3></Link>
            </div>

            <div className='menu-social-links'>
                <a href="https://www.linkedin.com/in/chrisfollen/" target="_blank" rel="noreferrer"><img className= 'menu-social-link-image' src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/linkedin.png?alt=media&token=b5d67c7d-bab7-4277-91c8-afb6bb1e5b76" alt='LinkedIn logo'/></a>
                <a href="https://github.com/chrisfollen" target="_blank" rel="noreferrer"><img className= 'menu-social-link-image' src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/github.png?alt=media&token=ba5da338-ceea-4348-82ac-abb8a22e376f" alt='GitHub logo' /></a>
            </div>
        </div>
    )
}
