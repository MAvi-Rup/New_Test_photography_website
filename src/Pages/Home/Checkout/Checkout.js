import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Checkout = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event =>{
        setName(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event =>{
        setPhone(event.target.value);
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }

    return (
        <div className='container'>
            {console.log(user)}
            <div className='w-50 m-auto'>
                <h2 className='form-title text-center'>Your Shipping Info</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="mb-3 ">
                        <label className='form-label' htmlFor="name">Your Name</label>
                        <input className='form-control m-2' value={user?.displayName} onBlur={handleNameBlur} type="text" name="name" id="" required/>
                    </div>
                    <div className="mb-3 ">
                        <label className='form-label' htmlFor="email">Your Email</label>
                        <input className='form-control m-2' value={user?.email} readOnly type="email" name="email" id="" required/>
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="password" className='form-label'>Address</label>
                        <input className='form-control m-2' onBlur={handleAddressBlur} type="text" name="address" id=""  required/>
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="phone" className='form-label'>Phone Number</label>
                        <input className='form-control m-2' onBlur={handlePhoneBlur} type="text" name="phone" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='btn btn-info' type="submit" value="Add Shipping"  required/>
                </form>
                
            </div>
        </div>
    );
};

export default Checkout;