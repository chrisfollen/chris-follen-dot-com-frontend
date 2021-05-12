import { useForm } from 'react-hook-form'
import React from 'react'

export default function LoginModal(props) {

    const { register, handleSubmit } = useForm()

    const onSubmit = (data, event) => {
        props.login(data)
        event.target.reset()
    }

    return (
        <div className = {props.loginModalClass}>
            <div className='login-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='username' className='login-form-label'>Username</label>
                    <input type='text' className='login-form-input' name='username' autoComplete='off' {...register('username', {required: true})} /> 
                    <label htmlFor='hashed_password' className='login-form-label'>Password</label>
                    <input type='password' className='login-form-input' name='password' autoComplete='off'  {...register('password', {required: true})}/> 
                    <input type='submit' className='login-submit-button' value='Login' />
                </form>
            </div>
        </div>
    )
}
