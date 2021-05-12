import React from 'react'

export default function PhotoModal(props) {

    const handleClick = () => {
        props.togglePhotoModal()
    }

    return (
        <div className = {props.photoModalClass}>
            <div className='photo-modal-close clickable-close' onClick={handleClick}>
                <h3>&times;</h3>
            </div>
            <div className = 'photo-modal-photo'>
                <img src={props.photoURL} alt="rad" />
            </div>
        </div>
    )
}
