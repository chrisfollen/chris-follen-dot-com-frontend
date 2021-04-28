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
            <img src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/CF-03.png?alt=media&token=f9b5ca1b-b640-41ba-a045-d28340bb641a" alt="chris logo" />
        </div>
    )
}