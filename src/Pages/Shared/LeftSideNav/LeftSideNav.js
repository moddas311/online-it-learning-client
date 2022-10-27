import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/learning-categories')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className='mt-5'>
            <h4>All Courses: {courses.length}</h4>
            {
                courses.map(course => <p
                    key={course.id}
                >
                    <Link to={`category/${course.id}`}>{course.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;