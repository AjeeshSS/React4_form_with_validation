import React, { useState } from 'react';
import './Style.css'

function Form() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: ''
    })

    const [focus, setFocus] = useState({
        errName: false,
        errEmail: false,
        errPassword: false,
        errCpassword: false
    })

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs({ ...inputs, [name]: value });
    }


    return (
        <div className="container col-5 p-4 mt-5">
            <h1 style={{ textAlign: "center" }}>Form Validation</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="username">Username</label>
                    <input type="type" pattern='^[A-Za-z0-9].{3,16}' className='form-control' id='name' placeholder='Username' name='username' value={inputs.username} onChange={handleChange} onBlur={() => setFocus({ ...focus, errName: true })} focus={focus.errName.toString()} required />
                    <span>Username must have 4 chars.</span>
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' id='email' placeholder='Email' name='email' value={inputs.email} onChange={handleChange} onBlur={() => setFocus({ ...focus, errEmail: true })} focus={focus.errEmail.toString()} required />
                    <span>Enter a valid e-mail id.</span>
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="text" pattern='(?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$' className='form-control' id='password' placeholder='Password' name='password' value={inputs.password} onChange={handleChange} onBlur={() => setFocus({ ...focus, errPassword: true })} focus={focus.errPassword.toString()} required />
                    <span>password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters.</span>
                </div>
                <div className='form-group'>
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="text" pattern={inputs.password} className='form-control' id='cpassword' placeholder='Confirm Password' name='cpassword' value={inputs.cpassword} onChange={handleChange} onBlur={() => setFocus({ ...focus, errCpassword: true })} focus={focus.errCpassword.toString()} required />
                    <span>Password is not matching.</span>
                </div>
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
