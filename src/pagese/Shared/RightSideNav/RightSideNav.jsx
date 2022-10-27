import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

const RightSideNav = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://e-learning-coral.vercel.app/courses/")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="mt-5">
      <h3>All Courses: {courses.length} </h3>
      <div>
        {courses.map((course) => (
          
            <ListGroup key={course._id}>
              <Link to={`/courses/${course._id}`}><Button variant="light" className="mb-2 list-unstyled">{course.title}</Button></Link>
            </ListGroup>
          
        ))}
      </div>
    </div>
  );
};

export default RightSideNav;
