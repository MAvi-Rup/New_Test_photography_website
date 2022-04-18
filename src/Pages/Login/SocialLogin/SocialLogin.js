import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            <div className='text-center'>
                
                <button className='btn btn-primary btn-lg mb-2 w-50'>Google SignIn</button>
                <br />
                <button className='btn btn-primary btn-lg mb-2 w-50'>GitHub SignIn</button>
            </div>
        </div>
    );
};

export default SocialLogin;