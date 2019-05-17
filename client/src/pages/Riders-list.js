import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Consumer from "../context/configContext";
<<<<<<< Updated upstream
=======
import faker from "faker";
import SimpleMap from "../components/Map/index.js";
>>>>>>> Stashed changes

class RidersList extends Component {
    state = {
        riders: [],
        firstName: "",
        lastName: "",
        hobby: ""
    };

    componentDidMount() {
        this.loadRiders();
    }

    loadRiders = () => {
        API.getRiders()
        .then(res =>
            this.setState({ riders: res.data, firstName: "", lastName: "", hobby: "" })
        )
        .catch(err => console.log(err));
    };

    deleteRider = id => {
        API.deleteRider(id)
        .then(res => this.loadRiders())
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName) {
        API.saveRider({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            hobby: this.state.hobby
        })
            .then(res => this.loadRiders())
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Consumer>
                {(context) => {
<<<<<<< Updated upstream
                const { riders } = context.ridersLibrary || [];
                return (
                <Container fluid>
                    <Row>
                    <Col size="md-6-offset-3 sm-12 lg-12">
                        <Jumbotron>
                            <h1>Riders List</h1>
                            </Jumbotron>
                            {this.state.riders.length ? (
                            <List>
                                {this.state.riders.map(rider => (
                                <ListItem key={rider._id}>
                                    <button className="like" onClick={()=> context.ridersLibrary.incrementLikes(rider._id)}><i className="fas fa-thumbs-up"></i>
                                    <span className="like-count">{(riders.find(search => search.id === rider._id)) ? riders.find(search => search.id === rider._id).likes : 0}</span>
                                    </button>
                                    <Link to={"/ridersList/" + rider._id}>
                                    <strong>
                                        {rider.firstName} - {rider.lastName}
                                    </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => this.deleteRider(rider._id)} />
                                </ListItem>
                                ))}
                            </List>
                            ) : (
                            <h3>No Results to Display</h3>
                            )}
                        </Col>
                    </Row>
                    <Row>
                    <Col size="md-2">
                        <Link to="/">← Home</Link>
                    </Col>
                    </Row>
                </Container>
                )}
=======
                    const { riders } = context.ridersLibrary || [];
                    return (
                        <Container fluid>
                            <Row>
                                <Col size="md-3-offset-3 sm-6 lg-12">
                                    <Jumbotron>
                                        <h1>Riders List</h1>
                                    </Jumbotron>
                                    <Row>
                                        <SimpleMap/>
                                        {this.state.riders.length ? (
                                            <List>
                                                {this.state.riders.map(rider => (
                                                    <ListItem key={rider._id}>
                                                        <button className="like" onClick={() => context.ridersLibrary.incrementLikes(rider._id)}>
                                                            <i className="fas fa-thumbs-up">&nbsp;&nbsp;</i>
                                                            <span className="like-count">{(riders.find(search => search.id === rider._id)) ? riders.find(search => search.id === rider._id).likes : 0}</span>
                                                        </button>
                                                        <Link to={"/ridersList/" + rider._id}>
                                                            <strong>
                                                                {rider.firstName} {' '} {rider.lastName} <br />
                                                            </strong>
                                                        </Link>
                                                        <img src={faker.image.avatar()} alt={"img"} width="50" height="50" /> <br />
                                                        <span className="destination">Destination: </span>{rider.destination} <br />
                                                        <span className="destination">From: </span> <br />
                                                        <span className="destination">Time: </span>
                                                        <DeleteBtn onClick={() => this.deleteRider(rider._id)} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                    ) : (
                                            <h3>No Results to Display</h3>
                                        )}
                                    </Row>
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
>>>>>>> Stashed changes
                }
            </Consumer>
        );
    }
}

export default RidersList;
