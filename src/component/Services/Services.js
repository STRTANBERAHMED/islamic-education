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
        <div>
            <div className="row w-50">
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