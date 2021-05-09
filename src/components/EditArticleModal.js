import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function EditArticleModal({ updatePost, toggleEditArticleModal, editArticleModalClass, article}) {

    const [updatedArticle, setUpdatedArticle] = useState(article)

    useEffect(() => {
        setUpdatedArticle(article)
     }, [article]);
    
    const {register, handleSubmit} = useForm()

    const onSubmit = (data, event) => {
        updatePost(data)
        console.log(data)
        event.target.reset()
        toggleEditArticleModal()
    }

    const handleClose = (event) => {
        console.log(event)
        toggleEditArticleModal()
    }

    const handleFieldChange = (event) => {
        setUpdatedArticle.title = event.target.value
    }

    return (
        <div className = {editArticleModalClass}>
            <div className='edit-article-modal-container'>
                <div className='edit-article-modal-close clickable-close' onClick={handleClose}>
                    <h3>&times;</h3>
                </div>
                {article ? <div className='edit-article-form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor='title' className='form-label'>Article Title</label>
                        <input type='text' className='form-input' name='title' defaultValue={updatedArticle.title} onChange={handleFieldChange} autoComplete='off' {...register('title')} /> 
                        <label htmlFor='date' className='form-label'>Date</label>
                        <input type='text' className='form-input' name='date' defaultValue={updatedArticle.date} autoComplete='off'  {...register('date')}/> 
                        <label htmlFor='slug' className='form-label'>Slug</label>
                        <input type='text' className='form-input' name='slug' defaultValue={updatedArticle.slug} autoComplete='off'  {...register('slug')}/> 
                        <label htmlFor='image_1_url' className='form-label'>Image 1 URL</label>
                        <input type='text' className='form-input' name='image_1_url' defaultValue={updatedArticle.image_1_url} autoComplete='off'  {...register('image_1_url')}/> 
                        <label htmlFor='body1' className='form-label'>Text Part 1</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body1' defaultValue={updatedArticle.body1} autoComplete='off'  {...register('body1')}/> 
                        <label htmlFor='image_2_url' className='form-label'>Image 2 URL</label>
                        <input type='text' className='form-input' name='image_2_url' defaultValue={updatedArticle.image_2_url} autoComplete='off'  {...register('image_2_url')}/> 
                        <label htmlFor='body2' className='form-label'>Text Part 2</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body2' defaultValue={updatedArticle.body2} autoComplete='off'  {...register('body2')}/> 
                        <label htmlFor='image_3_url' className='form-label'>Image 3 URL</label>
                        <input type='text' className='form-input' name='image_3_url' defaultValue={updatedArticle.image_3_url} autoComplete='off'  {...register('image_3_url')}/> 
                        <label htmlFor='body3' className='form-label'>Text Part 3</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body3' defaultValue={updatedArticle.body3} autoComplete='off'  {...register('body3')}/> 
                        <label htmlFor='image_4_url' className='form-label'>Image 4 URL</label>
                        <input type='text' className='form-input' name='image_4_url' defaultValue={updatedArticle.image_4_url} autoComplete='off'  {...register('image_4_url')}/> 
                        <label htmlFor='body4' className='form-label'>Text Part 4</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body4' defaultValue={updatedArticle.body4} autoComplete='off'  {...register('body4')}/> 
                        <label htmlFor='image_5_url' className='form-label'>Image 5 URL</label>
                        <input type='text' className='form-input' name='image_5_url' defaultValue={updatedArticle.image_5_url} autoComplete='off'  {...register('image_5_url')}/> 
                        <label htmlFor='body5' className='form-label'>Text Part 5</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body5' defaultValue={updatedArticle.body5} autoComplete='off'  {...register('body5')}/> 
                        <label htmlFor='image_6_url' className='form-label'>Image 6 URL</label>
                        <input type='text' className='form-input' name='image_6_url' defaultValue={updatedArticle.image_6_url} autoComplete='off'  {...register('image_6_url')}/> 
                        <label htmlFor='body6' className='form-label'>Text Part 6</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body6' defaultValue={updatedArticle.body6} autoComplete='off'  {...register('body6')}/> 
                        <label htmlFor='image_7_url' className='form-label'>Image 7 URL</label>
                        <input type='text' className='form-input' name='image_7_url' defaultValue={updatedArticle.image_7_url} autoComplete='off'  {...register('image_7_url')}/> 
                        <label htmlFor='body7' className='form-label'>Text Part 7</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body7' defaultValue={updatedArticle.body7} autoComplete='off'  {...register('body7')}/> 
                        <label htmlFor='image_8_url' className='form-label'>Image 8 URL</label>
                        <input type='text' className='form-input' name='image_8_url' defaultValue={updatedArticle.image_8_url} autoComplete='off'  {...register('image_8_url')}/> 
                        <label htmlFor='body8' className='form-label'>Text Part 8</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body8' defaultValue={updatedArticle.body8} autoComplete='off'  {...register('body8')}/> 
                        <label htmlFor='image_9_url' className='form-label'>Image 9 URL</label>
                        <input type='text' className='form-input' name='image_9_url' defaultValue={updatedArticle.image_9_url} autoComplete='off'  {...register('image_9_url')}/> 
                        <label htmlFor='body9' className='form-label'>Text Part 9</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body9' defaultValue={updatedArticle.body9} autoComplete='off'  {...register('body9')}/> 
                        <label htmlFor='image_10_url' className='form-label'>Image 10 URL</label>
                        <input type='text' className='form-input' name='image_10_url' defaultValue={updatedArticle.image_10_url} autoComplete='off'  {...register('image_10_url')}/> 
                        <label htmlFor='body10' className='form-label'>Text Part 10</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body10' defaultValue={updatedArticle.body10} autoComplete='off'  {...register('body10')}/> 
                        <label htmlFor='image_11_url' className='form-label'>Image 11 URL</label>
                        <input type='text' className='form-input' name='image_11_url' defaultValue={updatedArticle.image_11_url} autoComplete='off'  {...register('image_11_url')}/> 
                        <label htmlFor='image_12_url' className='form-label'>Image 12 URL</label>
                        <input type='text' className='form-input' name='image_12_url' defaultValue={updatedArticle.image_12_url} autoComplete='off'  {...register('image_12_url')}/> 
                        <label htmlFor='image_13_url' className='form-label'>Image 13 URL</label>
                        <input type='text' className='form-input' name='image_13_url' defaultValue={updatedArticle.image_13_url} autoComplete='off'  {...register('image_13_url')}/> 
                        <label htmlFor='image_14_url' className='form-label'>Image 14 URL</label>
                        <input type='text' className='form-input' name='image_14_url' defaultValue={updatedArticle.image_14_url} autoComplete='off'  {...register('image_14_url')}/> 
                        <label htmlFor='image_15_url' className='form-label'>Image 15 URL</label>
                        <input type='text' className='form-input' name='image_15_url' defaultValue={updatedArticle.image_15_url} autoComplete='off'  {...register('image_15_url')}/> 
                        <label htmlFor='image_16_url' className='form-label'>Image 16 URL</label>
                        <input type='text' className='form-input' name='image_16_url' defaultValue={updatedArticle.image_16_url} autoComplete='off'  {...register('image_16_url')}/> 
                        <label htmlFor='image_17_url' className='form-label'>Image 17 URL</label>
                        <input type='text' className='form-input' name='image_17_url' defaultValue={updatedArticle.image_17_url} autoComplete='off'  {...register('image_17_url')}/> 
                        <label htmlFor='image_18_url' className='form-label'>Image 18 URL</label>
                        <input type='text' className='form-input' name='image_18_url' defaultValue={updatedArticle.image_18_url} autoComplete='off'  {...register('image_18_url')}/> 
                        <label htmlFor='image_19_url' className='form-label'>Image 19 URL</label>
                        <input type='text' className='form-input' name='image_19_url' defaultValue={updatedArticle.image_19_url} autoComplete='off'  {...register('image_19_url')}/> 
                        <label htmlFor='image_20_url' className='form-label'>Image 20 URL</label>
                        <input type='text' className='form-input' name='image_20_url' defaultValue={updatedArticle.image_20_url} autoComplete='off'  {...register('image_20_url')}/> 
                        <input type='submit' className='submit-button' value='Update Post' />
                    </form>
                </div> : null }
            </div>

        </div>
    )
}
