import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import {  useLoaderData } from 'react-router-dom';

const SingleCourse = () => {
    const singleCourse = useLoaderData();
    const { author, title,  rating, description, image_url} = singleCourse;
    console.log(singleCourse);
    return (
        <div>
            <Card className=" mb-5">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Img variant="top" className="fluid" src={image_url} />
            </Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">Author: {author?.name}</p>
                

                <div>
                  <FaStar className="text-warning me-2" />
                  <span>{rating?.number}</span>
                </div>
              </div>
              <div className='mt-3'>
                {description}
              </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between"></Card.Footer>
          </Card>
        </div>
    );
};

export default SingleCourse;