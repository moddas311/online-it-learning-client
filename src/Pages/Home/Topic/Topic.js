import React from 'react';
import { Button } from 'react-bootstrap';

const Topic = ({ topic }) => {
    const { img, name, description } = topic
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="w-100 h-100 card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-primary">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div>
                    <Button variant="outline-secondary">Secondary</Button>
                </div>
            </div>
        </div>
    );
};

export default Topic;