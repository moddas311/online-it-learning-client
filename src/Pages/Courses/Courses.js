import React from 'react';
import { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Topic from './Topic/Topic';

const Courses = () => {

    const allTopics = useLoaderData()
    const { loading } = createContext(AuthContext);

    if (loading) {
        return <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }

    return (
        <div>
            <div>
                <h2 className='text-center mt-5 mb-3 text-warning'>This Courses Page</h2>
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