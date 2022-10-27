import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Courses/Course/Course";

const Home = () => {
  const courses = useLoaderData();
  return (
    // <div>
    //     <h2>The Courses are: {courses.length}</h2>
    //     {
    //         courses.map(course =><Course
    //             key={course._id}
    //             course ={course}
    //         ></Course>)
    //     }
    // </div>
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
      <div className="">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          What is the e-learning ?
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Image result for e-laerning eLearning, or electronic learning, is the
          delivery of learning and training through digital resources. Although
          eLearning is based on formalized learning, it is provided through
          electronic devices such as computers, tablets and <br /> even cellular
          phones that are connected to the internet.
        </p>
        <Link to='/courses'>
          <Button className="mb-3" variant="secondary">Visit site</Button>
        </Link>
      </div>
      <div>
        <Image className="w-100" src="https://elearningindustry.com/wp-content/uploads/2021/08/Top-5-Benefits-Of-eLearning-Education.png"></Image>
      </div>
    </div>
  );
};

export default Home;
