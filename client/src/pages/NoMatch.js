import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        {/* <p>Temporary Links</p> <br /> */}
        <Col size="md-2">
          <Link to="/">← Home</Link>
        </Col>
        <Col size="md-2">
          <Link to="/drivers">← Drivers-Form</Link>
        </Col>
        <Col size="md-2">
          <Link to="/riders">← Riders-Form</Link>
        </Col>
        <Col size="md-2">
          <Link to="/driversList">← Drivers-List</Link>
        </Col>
        <Col size="md-2">
          <Link to="/ridersList">← Riders-List</Link>
        </Col>
        <Col size="md-2">
          <Link to="/about">← About</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
