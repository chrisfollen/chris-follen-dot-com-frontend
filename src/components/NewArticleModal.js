import { useForm } from 'react-hook-form'
import React, { useEffect } from 'react'
// import RichTextEditor from './RichTextEditor'

export default function NewArticleModal(props) {


    const {register, handleSubmit, reset, formState: { isSubmitSuccessful }} = useForm()

    const onSubmit = (data, event) => {
        console.log(data)
        props.addPost(data)
        event.target.reset()
        props.toggleNewArticleModal()
    }

    const handleClose = () => {
        props.toggleNewArticleModal()
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                title: '',
                date: '',
                slug: '',
                body1: '',
                body2: '',
                body3: '',
                body4: '',
                body5: '',
                body6: '',
                body7: '',
                body8: '',
                body9: '',
                body10: '',
                image_1_url: '',
                image_2_url: '',
                image_3_url: '',
                image_4_url: '',
                image_5_url: '',
                image_6_url: '',
                image_7_url: '',
                image_8_url: '',
                image_9_url: '',
                image_10_url: '',
                image_11_url: '',
                image_12_url: '',
                image_13_url: '',
                image_14_url: '',
                image_15_url: '',
                image_16_url: '',
                image_17_url: '',
                image_18_url: '',
                image_19_url: '',
                image_20_url: ''
            })
        }
    }, [isSubmitSuccessful, reset])


    return (
        <div className = {props.newArticleModalClass}>
            <div className='new-article-modal-container'>
                <div className='new-article-modal-close clickable-close' onClick={handleClose}>
                    <h3>&times;</h3>
                </div>
                <div className='new-article-form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor='title' className='form-label'>Article Title</label>
                        <input type='text' className='form-input' name='title' placeholder='Post Title Is...' autoComplete='off' {...register('title', {required: true})} /> 
                        <label htmlFor='date' className='form-label'>Date</label>
                        <input type='text' className='form-input' name='date' placeholder='YYYY-MM-DD' autoComplete='off'  {...register('date', {required: true})}/> 
                        <label htmlFor='slug' className='form-label'>Slug</label>
                        <input type='text' className='form-input' name='slug' placeholder='whatever-you-want' autoComplete='off'  {...register('slug', {required: true})}/> 
                        <label htmlFor='image_1_url' className='form-label'>Image 1 URL</label>
                        <input type='text' className='form-input' name='image_1_url' placeholder='http://dismyphoto' autoComplete='off'  {...register('image_1_url', {required: true})}/> 
                        <label htmlFor='body1' className='form-label'>Text Part 1</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body1' placeholder='Share some thoughts, friend...' autoComplete='off'  {...register('body1')}/>
                        {/* <RichTextEditor type='text' className='form-input new-article-form-body-input' name='body1' placeholder='Share some thoughts, friend...' autoComplete='off'  {...register('body1')}/>   */}
                        <label htmlFor='image_2_url' className='form-label'>Image 2 URL</label>
                        <input type='text' className='form-input' name='image_2_url' autoComplete='off'  {...register('image_2_url')}/> 
                        <label htmlFor='body2' className='form-label'>Text Part 2</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body2' autoComplete='off'  {...register('body2')}/> 
                        <label htmlFor='image_3_url' className='form-label'>Image 3 URL</label>
                        <input type='text' className='form-input' name='image_3_url' autoComplete='off'  {...register('image_3_url')}/> 
                        <label htmlFor='body3' className='form-label'>Text Part 3</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body3' autoComplete='off'  {...register('body3')}/> 
                        <label htmlFor='image_4_url' className='form-label'>Image 4 URL</label>
                        <input type='text' className='form-input' name='image_4_url' autoComplete='off'  {...register('image_4_url')}/> 
                        <label htmlFor='body4' className='form-label'>Text Part 4</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body4' autoComplete='off'  {...register('body4')}/> 
                        <label htmlFor='image_5_url' className='form-label'>Image 5 URL</label>
                        <input type='text' className='form-input' name='image_5_url' autoComplete='off'  {...register('image_5_url')}/> 
                        <label htmlFor='body5' className='form-label'>Text Part 5</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body5' autoComplete='off'  {...register('body5')}/> 
                        <label htmlFor='image_6_url' className='form-label'>Image 6 URL</label>
                        <input type='text' className='form-input' name='image_6_url' autoComplete='off'  {...register('image_6_url')}/> 
                        <label htmlFor='body6' className='form-label'>Text Part 6</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body6' autoComplete='off'  {...register('body6')}/> 
                        <label htmlFor='image_7_url' className='form-label'>Image 7 URL</label>
                        <input type='text' className='form-input' name='image_7_url' autoComplete='off'  {...register('image_7_url')}/> 
                        <label htmlFor='body7' className='form-label'>Text Part 7</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body7' autoComplete='off'  {...register('body7')}/> 
                        <label htmlFor='image_8_url' className='form-label'>Image 8 URL</label>
                        <input type='text' className='form-input' name='image_8_url' autoComplete='off'  {...register('image_8_url')}/> 
                        <label htmlFor='body8' className='form-label'>Text Part 8</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body8' autoComplete='off'  {...register('body8')}/> 
                        <label htmlFor='image_9_url' className='form-label'>Image 9 URL</label>
                        <input type='text' className='form-input' name='image_9_url' autoComplete='off'  {...register('image_9_url')}/> 
                        <label htmlFor='body9' className='form-label'>Text Part 9</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body9' autoComplete='off'  {...register('body9')}/> 
                        <label htmlFor='image_10_url' className='form-label'>Image 10 URL</label>
                        <input type='text' className='form-input' name='image_10_url' autoComplete='off'  {...register('image_10_url')}/> 
                        <label htmlFor='body10' className='form-label'>Text Part 10</label>
                        <textarea type='text' className='form-input new-article-form-body-input' name='body10' autoComplete='off'  {...register('body10')}/> 
                        <label htmlFor='image_11_url' className='form-label'>Image 11 URL</label>
                        <input type='text' className='form-input' name='image_11_url' autoComplete='off'  {...register('image_11_url')}/> 
                        <label htmlFor='image_12_url' className='form-label'>Image 12 URL</label>
                        <input type='text' className='form-input' name='image_12_url' autoComplete='off'  {...register('image_12_url')}/> 
                        <label htmlFor='image_13_url' className='form-label'>Image 13 URL</label>
                        <input type='text' className='form-input' name='image_13_url' autoComplete='off'  {...register('image_13_url')}/> 
                        <label htmlFor='image_14_url' className='form-label'>Image 14 URL</label>
                        <input type='text' className='form-input' name='image_14_url' autoComplete='off'  {...register('image_14_url')}/> 
                        <label htmlFor='image_15_url' className='form-label'>Image 15 URL</label>
                        <input type='text' className='form-input' name='image_15_url' autoComplete='off'  {...register('image_15_url')}/> 
                        <label htmlFor='image_16_url' className='form-label'>Image 16 URL</label>
                        <input type='text' className='form-input' name='image_16_url' autoComplete='off'  {...register('image_16_url')}/> 
                        <label htmlFor='image_17_url' className='form-label'>Image 17 URL</label>
                        <input type='text' className='form-input' name='image_17_url' autoComplete='off'  {...register('image_17_url')}/> 
                        <label htmlFor='image_18_url' className='form-label'>Image 18 URL</label>
                        <input type='text' className='form-input' name='image_18_url' autoComplete='off'  {...register('image_18_url')}/> 
                        <label htmlFor='image_19_url' className='form-label'>Image 19 URL</label>
                        <input type='text' className='form-input' name='image_19_url' autoComplete='off'  {...register('image_19_url')}/> 
                        <label htmlFor='image_20_url' className='form-label'>Image 20 URL</label>
                        <input type='text' className='form-input' name='image_20_url' autoComplete='off'  {...register('image_20_url')}/> 
                        <input type='submit' className='submit-button' value='Add Post' />
                    </form>
                </div>
            </div>

        </div>
    )
}
