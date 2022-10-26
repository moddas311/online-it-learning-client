import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic/Topic';

const Home = () => {

    const allTopics = useLoaderData()

    return (
        <div>
            <div>
                <h2>This is Home: {allTopics.length}</h2>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    allTopics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;