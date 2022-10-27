import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course/Course';
import  './Courses.css'

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div >
            <h2>The Courses are: {courses.length}</h2>
            <div className='creategrid ' >
            {
                courses.map(course =><Course
                    key={course._id}
                    course ={course}
                ></Course>)
            }
            </div>
        </div>
    );
};

export default Courses;