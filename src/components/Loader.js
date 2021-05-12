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
            <img src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/CF_white.png?alt=media&token=a5a491f8-042a-477b-879c-a8701d625082" alt="chris logo" />
        </div>
    )
}