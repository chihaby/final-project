import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

function Spotify() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Spotify </h1>
                        <h1>
                            <span role="img" aria-label="music">
                                📻
                            </span>
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
            <p>Playlist</p>
            <p>Now Playing</p>
            <Row>
                <p>Temporary Links</p> <br />
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
            </Row>
        </Container>
    );
}

export default Spotify;
