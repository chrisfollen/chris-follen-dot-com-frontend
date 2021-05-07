import React from 'react'
import LargeHeader from './LargeHeader'

export default function HeaderContainer(props) {

    const checkClass = () => {
        if(props.headerClass === 'large-header')
            return 'header-container'
        else {
            return 'header-container-home'
        }
    }

    return (
        <div className = {checkClass()}>
            <LargeHeader toggleMenu={props.toggleMenu} headerClass={props.headerClass} updateLink={props.updateLink} />
        </div>
    )
}
