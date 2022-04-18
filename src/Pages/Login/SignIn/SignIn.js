import React, { useRef } from 'react';
import {Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignIn = () => {
    const emailRef = useRef('')
    const passRef = useRef('')
    const location = useLocation()
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (loading) {
        return <Loading></Loading>
    }
    const handleSubmit = e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    let from = location.state?.from?.pathname || '/';
    
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div className='container w-50 mx-auto mt-2'>
            <h1 className='text-center text-info'>Please Login !!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <button className='text-center btn btn-primary btn-lg fw-bold' type="submit">
                    Submit
                </button>
            </Form>
            <p>New to Moments  <Link to='/signup' className='text-info pe-auto text-decoration-none'>Please Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignIn;