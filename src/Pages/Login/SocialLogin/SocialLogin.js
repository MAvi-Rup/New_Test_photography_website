import React from 'react';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    
    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            <div className='text-center'>
                
                <button onClick={() => signInWithGoogle()} className='btn btn-primary btn-lg mb-2 w-50'>     <img style={{ width: '30px' }} src='./images/social/google.png' alt="" />
                    <span className='px-2'>Google Sign In</span></button>
                <br />
                <button onClick={() => signInWithGithub()} className='btn btn-primary btn-lg mb-2 w-50'><img style={{ width: '30px' }} src='./images/social/github.png' alt="" />
                    <span className='px-2'>Github Sign In</span></button>
                    {errorElement}
            </div>
        </div>
    );
};

export default SocialLogin;