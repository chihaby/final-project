import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Consumer from "../context/configContext";
import faker from "faker";

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
                                        {this.state.rider.firstName} {' '} {this.state.rider.lastName}
                                    </h1>
                                    {totalLikes && <h2>Total Likes: {totalLikes}</h2>}
                                </Jumbotron>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-10 md-offset-1">
                                <article>
                                    <h1>Rider Profile</h1>
                                    <ListItem>
                                        <img src={faker.image.avatar()} alt={"img"} width="200" height="200" /> <br />
                                        {'Destination: '}{this.state.rider.destination} <br />
                                        {'From:  '}  <br />
                                        {'Time: '}   <br />
                                        {'Phone: '}  <br />
                                    </ListItem>
                                </article>
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
