import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { initialRegister, initialError, formSchema } from './InitialRegister'

const Register = () => {
    const { push } = useHistory();
    const [register, setRegister] = useState(initialRegister)
    const [errors, setErrors] = useState(initialError)
    const [disabled, setDisabled] = useState(true);

    // disabled button
    useEffect(() => {
        formSchema.isValid(register)
            .then(valid => {
                if(valid){
                    setDisabled(false)
                }
            })
            .catch(err => {
                console.log(err)
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
        setRegister({
            ...register,
            [name]: value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const newRegister = {
            name: `${register.first_name} ${register.last_name}`,
            username: register.username,
            password: register.password
        }
        axios
            .post('https://suggestify-backend.herokuapp.com/api/auth/register', newRegister)
            .then(res => {
                console.log(res)
                push('/login')
            })
            .catch(err => {
                console.log({err})
            })
    }
    return (
        <div className='register'>
            <form className='reg-form'>
                <h2>Create an Account</h2>

                <div className="reg-name">
                    <div className='error'>
                        <p>{errors.first_name}</p>
                    </div>
                    <div className='error'>
                        <p>{errors.last_name}</p>
                    </div>
                    <input
                        type='text'
                        name='first_name'
                        placeholder='First Name'
                        value={register.first_name}
                        onChange={changeHandler}
                    />
                    <input
                        type='text'
                        name='last_name'
                        placeholder='Last Name'
                        value={register.last_name}
                        onChange={changeHandler}
                    />
                </div>

                <div className='error'>
                    <p>{errors.username}</p>
                </div>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={register.username}
                    onChange={changeHandler}
                />
                <div className='error'>
                    <p>{errors.password}</p>
                </div>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={register.password}
                    onChange={changeHandler}
                />
                {/* <div className='error'>
                    <p>{errors.confirmPassword}</p>
                </div>
                <input
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    value={register.confirmPassword}
                    onChange={changeHandler}
                /> */}
                <br />
                <button onClick={submitHandler} disabled={disabled}>SIGN UP</button>
            </form>
        </div>
    )
}

  export default Register;
  