import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Topic = ({ topic }) => {
    const { id, img, name, price } = topic;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="w-100 h-100 card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-primary">{name}</h5>
                    <p className="card-info"><small>Course Price: {price}</small></p>
                </div>
                <div className='text-center pb-3'>
                    <Button variant="outline-secondary">
                        <Link className='text-decoration-none' to={`category/${id}`}>Details</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Topic;