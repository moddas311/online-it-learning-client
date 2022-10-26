import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';

const Topic = ({ topic }) => {
    const { img, name, description } = topic
    return (
        <div class="col">
            <div class="card h-100">
                <img src={img} class="w-100 h-100 card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-primary">{name}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div>
                    <Button variant="outline-secondary">Secondary</Button>{' '}
                </div>
            </div>
        </div>
    );
};

export default Topic;