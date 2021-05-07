import React from 'react'
import { useForm } from 'react-hook-form'

export default function NewArticleModal(props) {


    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
        props.toggleNewArticleModal()
    }

    const handleClose = () => {
        props.toggleNewArticleModal()
    }

    return (
        <div className = {props.newArticleModalClass}>
            <div className='new-article-modal-container'>
                <div className='new-article-modal-close clickable-close' onClick={handleClose}>
                    <h3>&times;</h3>
                </div>
                <div className='new-article-form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor='title' className='form-label'>Article Title</label>
                        <input type='text' className='form-input' name='title' placeholder='Post Title Is...' autoComplete='off' {...register('title')} /> 
                        <label htmlFor='date' className='form-label'>Date</label>
                        <input type='text' className='form-input' name='date' placeholder='MM-DD-YYYY' autoComplete='off'  {...register('date')}/> 
                        <input type='submit' className='submit-button' />
                    </form>
                </div>
            </div>

        </div>
    )
}
