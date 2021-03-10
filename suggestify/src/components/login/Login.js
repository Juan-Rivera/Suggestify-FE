import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { initialLogin, initialError, formSchema } from './InitialLogin'

const Login = () => {
    const [login, setLogin] = useState(initialLogin)
    const [errors, setErrors] = useState(initialError)
    const [disabled, setDisabled] = useState(true);

    // disabled button
    useEffect(() => {
        formSchema.isValid(login)
            .then(valid => {
                if(valid){
                    setDisabled(false)
                }
            })
            .catch(err => {
                setDisabled(true)
            })
    })

    const changeHandler = (e) => {
        
        // name & value breakdown
        const { name, value } = e.target;

        // yup form validation
        yup
            .reach(formSchema, name)
            .validate(value)
            // no errors
            .then(valid => {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            })
            // errors
            .catch(err => {
                setErrors({
                    ...errors,
                    [name]: err.errors[0]
                })
            })
        // sets changes after validation
        setLogin({
            ...login,
            [name]: value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const newLogin = {
            username: login.username,
            password: login.password
        }
        console.log(newLogin)
        axios
            .post('https://suggestify-backend.herokuapp.com/api/auth/login', newLogin)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log({err})
            })

    }
    return (
        <div className='login'>
            <form className='log-form'>
                <h2>Log In to Your Account</h2>

                <div className='error'>
                    <p>{errors.username}</p>
                </div>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={login.username}
                    onChange={changeHandler}
                />
                <div className='error'>
                    <p>{errors.password}</p>
                </div>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={login.password}
                    onChange={changeHandler}
                />
                <br />
                <button onClick={submitHandler} disabled={disabled}>LOG IN</button>
            </form>
        </div>
    )
}

  export default Login;
  