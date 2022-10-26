import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import {  useLoaderData } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'

const SingleCourse = () => {
    const singleCourse = useLoaderData();
    const { author, title,  rating, description, image_url} = singleCourse;

    
    const exportPDF =()=>{
      const input = document.getElementById('App');
      html2canvas(input , {logging: true , letterRendering: 1 , useCORS: true})
      .then(canvas =>{
        const imgWidth = 208 ;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const imgData = canvas.toDataURL('img/png'); 
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0 , 0, imgWidth, imgHeight); 
        pdf.save('Download.pdf')
      })
    }

    
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
              <div className='mt-2 mb-3'>
              <Button onClick={()=>{exportPDF()}} >Download PDF</Button>
              </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between"></Card.Footer>
          </Card>
        </div>
    );
};

export default SingleCourse;