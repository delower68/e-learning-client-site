import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../../pagese/Footer/Footer";
import Header from "../../pagese/Shared/Header/Header";
import RightSideNav from "../../pagese/Shared/RightSideNav/RightSideNav";


const Mains = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg="9">
            <Outlet />
          </Col>
          <Col lg="3" className="d-none d-lg-block">
            <RightSideNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Mains;
