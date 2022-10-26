import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import jsPDF from 'jspdf';
const Course = ({ course }) => {
  
  const { title, image_url, author, rating, _id  } = course;

  // pdf generate here
  const pdfGenerate = ()=>{
    const doc = new jsPDF('landscape', 'px', 'a4', 'false');
    doc.setFont('Helvertica', 'bold')
    doc.text(60, 80, (title))
    doc.save('a.pdf')
  }
  
  return (
    <div >
      <Row>
        <Col >
          <Card className=" mb-5 mt-5">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Img variant="top" className="fluid" src={image_url} />
            </Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">Author: {author?.name}</p>
                <p>Published Date: {author.published_date}</p>

                <div>
                  <FaStar className="text-warning me-2" />
                  <span>{rating?.number}</span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <Button onClick={pdfGenerate}>Download PDF</Button> 
                <Button variant="info"><Link to={`/courses/${_id}`}>Get Premium</Link></Button>
              </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between"></Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Course;
