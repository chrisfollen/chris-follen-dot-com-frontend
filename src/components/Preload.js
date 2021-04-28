import React from 'react'

export default function Preload(props) {


    const checkClass = () => {
        if(props.loadState){
            return 'preload'
        } else {
            return 'preload preload-hidden'
        }
    }


    return (
        <div className={checkClass()}>
            <h1><span className='l1'>C</span><span className='l2'>H</span><span className='l3'>R</span><span className='l4'>I</span><span className='l5'>S</span><span> </span>
            <span className='l6'>F</span><span className='l7'>O</span><span className='l8'>L</span><span className='l9'>L</span><span className='l10'>E</span><span className='l11'>N</span></h1>
        </div>
    )
}
