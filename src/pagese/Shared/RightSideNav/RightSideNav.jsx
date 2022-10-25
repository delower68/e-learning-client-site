import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

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
          
            <ListGroup key={course.id}>
              <ListGroup.Item className="mb-2"><Link to={`/courses/${course._id}`}>{course.title}</Link></ListGroup.Item>
            </ListGroup>
          
        ))}
      </div>
    </div>
  );
};

export default RightSideNav;
