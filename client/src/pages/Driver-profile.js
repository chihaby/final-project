import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Consumer from "../context/configContext";
import Faker from 'faker';

class DriverProfile extends Component {
    state = {
        driver: {},
    };

    componentDidMount() {
        API.getDriver(this.props.match.params.id)
            .then(res => this.setState({ driver: res.data }))
            .catch(err => console.log(err));
    }

    getLikesForDriver(id, drivers) {
        const thisDriver = drivers.find(driver => driver.id === id);
        return (thisDriver && thisDriver.likes) || null;
    }

    render() {
        return (
            <Consumer>{context => {
                const totalLikes = this.getLikesForDriver(this.state.driver._id, context.library.drivers);
                return (
                    <Container fluid>
                        <Row>
                            <Col size="md-12">
                                <Jumbotron>
                                    <h1>
                                        {this.state.driver.firstName} - {this.state.driver.lastName}
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
                                        {this.state.driver.destination}
                                    </p>
                                </article>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-2">
                                <Link to="/">← Home</Link>
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

export default DriverProfile;
