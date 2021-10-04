import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Courses from '../Courses/Courses';

const Services = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="m-5">
            <div className="text-center">
                <h1>COURSES</h1>
            </div>
            <div className="row w-100 p-5 text-center">
                {
                    courses.map(course => <Courses
                        key={course._id}
                        course={course}
                    ></Courses>)
                }
            </div>
        </div>
    );
};

export default Services;