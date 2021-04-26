import React from 'react'
import LargeHeader from './LargeHeader'

export default function HeaderContainer(props) {
    return (
        <div className = 'header-container'>
            <LargeHeader toggleMenu={props.toggleMenu}/>
        </div>
    )
}
