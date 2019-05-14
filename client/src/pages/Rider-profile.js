import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

import Consumer from "../context/configContext";

class RiderProfile extends Component {
    state = {
        rider: {}
    };

    componentDidMount() {
        API.getRider(this.props.match.params.id)
            .then(res => this.setState({ rider: res.data }))
            .catch(err => console.log(err));
    }

    getLikesForRider(id, riders) {
        const thisRider = riders.find(rider => rider.id === id);
        return (thisRider && thisRider.likes) || null;
    }

    render() {
        return (
            <Consumer>{context => {
                const totalLikes = this.getLikesForRider(this.state.rider._id, context.ridersLibrary.riders);
                return (
                    <Container fluid>
                        <Row>
                            <Col size="md-12">
                                <Jumbotron>
                                    <h1>
                                        {this.state.rider.firstName} - {this.state.rider.lastName}
                                    </h1>
                                    {totalLikes && <h2>Total Likes: {totalLikes}</h2>}
                                </Jumbotron>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-10 md-offset-1">
                                <article>
                                    <h1>Info</h1>
                                    <p>
                                        {this.state.rider.destination}
                                    </p>
                                </article>
                            </Col>
                        </Row>
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
                )
            }
            }
            </Consumer>
        );
    }
}

export default RiderProfile;
