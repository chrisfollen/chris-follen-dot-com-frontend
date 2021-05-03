import React from 'react'

export default function Preload(props) {


    const checkClass = () => {
        if(props.loadState){
            return 'loader'
        } else {
            return 'loader loader-animation loader-hidden'
        }
    }


    return (
        <div className={checkClass()}>
            <img src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/CF_white.png?alt=media&token=94e8a773-6470-4532-89ac-f734df36228a" alt="chris logo" />
        </div>
    )
}