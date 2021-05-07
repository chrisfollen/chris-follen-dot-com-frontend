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
                <a href="mailto:chris@chrisfollen.com" target="_blank" rel="noreferrer"><img className= 'menu-social-link-image clickable' src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/email_black.png?alt=media&token=84b4ae02-6e8a-4aa7-9fec-a74a6e050f05" alt='Email icon'/></a>
                <a href="https://github.com/chrisfollen" target="_blank" rel="noreferrer"><img className= 'menu-social-link-image clickable' src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/github_black.png?alt=media&token=84fa4563-76d3-4991-9817-65774298f297" alt='GitHub logo' /></a>
                <a href="https://www.linkedin.com/in/chrisfollen/" target="_blank" rel="noreferrer"><img className= 'menu-social-link-image clickable' src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/linkedin_black.png?alt=media&token=b1192f1c-c3d7-451c-b297-ed0d5e10393f" alt='LinkedIn logo'/></a>
                <a href="https://www.instagram.com/chris.follen/" target="_blank" rel="noreferrer"><img className= 'menu-social-link-image clickable' src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/instagram_black.png?alt=media&token=df4325e2-60b4-413c-a9b5-47ee0ae9cd41" alt='Instagram logo'/></a>
            </div>
        </div>
    )
}
