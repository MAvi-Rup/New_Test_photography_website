import React from 'react';

import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, id, desc, ratings, price, name } = service
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card h-100" style={{ width: "18rem", height:'300px' }}>
                <img src={img} className="card-img-top" alt="Service Image" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}</p>
                    <p className="card-text">{desc}</p>
                    <small class="text-muted">Ratings: {ratings}</small>
                    
                </div>
                <div class="card-footer">
                <Link to='/checkout' className="btn btn-primary">Chcekout</Link>
                </div>
            </div>
        </div>

    );
};

export default Service;