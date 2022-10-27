import React from "react";
import { Button, Card} from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Course.css'

const Course = ({ course }) => {
  const { title, image_url, author, rating, _id  } = course;

  return (
    <div>
          <Card className=" mb-5 mt-5 card-body">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Img variant="top" className="corse-img" src={image_url} />
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
              <div className="d-flex justify-content-between">
                
              <Link to={`/courses/${_id}`}><Button variant="info">Read more</Button></Link>
              </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between"></Card.Footer>
          </Card>
        
    </div>
  );
};

export default Course;
