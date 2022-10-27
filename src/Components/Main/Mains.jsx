import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../../pagese/Shared/Header/Header";
import RightSideNav from "../../pagese/Shared/RightSideNav/RightSideNav";
import PrivateRoute from "../../PriveteRoute/PrivateRoute";

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
            {/* <PrivateRoute> */}
              <RightSideNav />
            {/* </PrivateRoute> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mains;
