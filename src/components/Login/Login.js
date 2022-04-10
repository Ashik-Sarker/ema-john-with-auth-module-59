import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    
    if (user) {
        // navigate('/shop');
        navigate(from, {replace: true});
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>
                    <p>
                        {error?.message}
                    </p>
                    {loading && <p>Loading....</p> }
                    <input className='btn-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to ema-john ? <Link className='new-acc' to='/signup' >Create an account</Link>
                </p>

                <div className='under-style'>
                    <div className='line'></div>
                    <div><p>or</p></div>
                    <div className='line'></div>
                </div>
                <div>
                    <button className='btn-submit'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;