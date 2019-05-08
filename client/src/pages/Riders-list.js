import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

import Consumer from "../context/configContext";

class Detail extends Component {
    state = {
        rider: {}
    };
    // When this component mounts, grab the book with the _id of this.props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    componentDidMount() {
        API.getRider(this.props.match.params.id)
        .then(res => this.setState({ rider: res.data }))
        .catch(err => console.log(err));
    }

    getLikesForDriver(id, riders) {
        const thisRider = riders.find(rider => rider.id === id);
        return (thisRider && thisRider.likes) || null;
    }

    render() {
        return (
        <Consumer>{context => {
            const totalLikes = this.getLikesForRider(this.state.rider._id, context.library.riders);
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
                <h1>Synopsis</h1>
                <p>
                    {this.state.rider.hobby}
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
        )}
        }
        </Consumer>
        );
    }
}

export default Detail;
