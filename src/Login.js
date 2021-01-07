import React, { useState } from 'react'
import './Login.css'

//firebase imports
import { auth } from './firebase';


//logo picture
import logo from '../src/photos/crop logo.png'
import { NavLink, useHistory } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const signIn = e => {
        e.preventDefault();

        // some firebase login
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    
    }

    const register = e => {
        e.preventDefault();

        // some firebase registration
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=> {
                // it successfully created a user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

    }


    return (
        <div className="login">
            
            <div className=" login_logo_details login__logo">
                    <NavLink style={{textDecoration: 'none'}} exact to="/"><div className="d-flex"><img className="login__image" src={logo} /><span className="login__desc">Slacks Fit</span></div></NavLink>
            </div>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <div className="input__field">
                        <input type="text" required value={email} onChange=
                        {e => setEmail(e.target.value)} />
                        <span>Email Address</span>
                    </div>

                    <div className="input__field">
                        <input type="password" required onChange=
                        {e => setPassword(e.target.value)} />
                        <span>Password</span>
                    </div>
                    
                    <button type="submit" onClick={signIn} className="login__signinBtn btn-danger">Sign In</button>

                    <button onClick={register} className="createAccount__btn btn-danger">Create an account</button>

                </form>
            </div> 
        </div>
    )
}

export default Login
