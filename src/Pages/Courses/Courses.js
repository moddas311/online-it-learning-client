import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic/Topic';

const Courses = () => {

    const allTopics = useLoaderData()

    return (
        <div>
            <div>
                <h2 className='text-center text-warning m-2'>This Courses Page</h2>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4 mb-5'>
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

export default Courses;