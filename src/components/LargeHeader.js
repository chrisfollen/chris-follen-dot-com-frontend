import React from 'react'
import { Link } from 'react-router-dom'

export default function LargeHeader(props) {

    const openMenu = () => {
        props.toggleMenu()
    }


    return (
        <div className={props.headerClass}>
            <Link to="/">
                <h1>CHRIS FOLLEN</h1>
            </Link>
            <div className='large-header-menu clickable' onClick={openMenu}>
                <h6>MENU</h6>
                <h6>☰</h6>
            </div>
        </div>
    )
}
