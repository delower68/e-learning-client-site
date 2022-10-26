import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Courses/Course/Course';

const Home = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h2>The Courses are: {courses.length}</h2>
            {
                courses.map(course =><Course
                    key={course._id}
                    course ={course}
                ></Course>)
            }
        </div>
    );
};

export default Home;