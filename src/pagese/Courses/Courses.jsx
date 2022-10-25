import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <h2>The Courses are: {courses.length}</h2>
            {
                courses.map(course =><Course
                    key={course.id}
                    course ={course}
                ></Course>)
            }
        </div>
    );
};

export default Courses;