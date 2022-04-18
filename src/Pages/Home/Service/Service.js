import React from 'react';

import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, id, desc, ratings, price, name } = service
    const navigate = useNavigate()
    const navigateCheckout =()=>{
        navigate('/checkout')
        
    }

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card h-100" style={{ width: "18rem", height: '300px' }}>
                <img src={img} className="card-img-top" alt="Service Image" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}</p>
                    <p className="card-text">{desc}</p>
                    <small className="text-muted">Ratings: {ratings}</small>

                </div>
                <div className="card-footer">
                    <button onClick={navigateCheckout} className="btn btn-primary">Chcekout</button>
                </div>
            </div>
        </div>

    );
};

export default Service;