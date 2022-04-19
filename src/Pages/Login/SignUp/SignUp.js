import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const emailRef = useRef('')
    const nameRef = useRef('')
    const passRef = useRef('')
    const location = useLocation()
    const navigate = useNavigate()
    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending,Eerror] = useSendEmailVerification(auth);
    // const verufyEmail = async (email) => {
       
    //     if (email) {
    //         await sendEmailVerification(email);
    //         toast('Sent email');
    //     }
    //     else{
    //         toast('please enter your email address');
    //     }
    // }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await sendEmailVerification()
        createUserWithEmailAndPassword(email, password)
        
        
    }
    let from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true })
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error || Eerror) {
        errorElement = <p className='text-danger'>Error: {error?.message}{Eerror?.message}</p>
    }
    return (
        <div className='container w-50 mx-auto mt-2'>
            <h1 className='text-center text-info'>Please Register !!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Enter Your Name" required />
                </Form.Group>
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
                {errorElement}
            </Form>
            <p>Already have an account? <Link to='/signin' className='text-info pe-auto text-decoration-none'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
            
        </div>
    );
};

export default SignUp;