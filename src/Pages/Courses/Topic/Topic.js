import React from 'react';
import { Button } from 'react-bootstrap';

const Topic = ({ topic }) => {
    const { img, name, price } = topic
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="bg-info w-100 h-100 card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-primary">{name}</h5>
                    <p className="card-info"><small>Course Price: {price}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Topic;