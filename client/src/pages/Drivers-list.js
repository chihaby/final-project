import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Consumer from "../context/configContext";
import faker from "faker";
import Home from "../components/Map/map";

class DriversList extends Component {
    state = {
        drivers: [],
        firstName: "",
        lastName: "",
        destination: ""
    };

    componentDidMount() {
        this.loadDrivers();
    }

    loadDrivers = () => {
        API.getDrivers()
            .then(res =>
                this.setState({ drivers: res.data, firstName: "", lastName: "", destination: "" })
            )
            .catch(err => console.log(err));
    };

    deleteDriver = id => {
        API.deleteDriver(id)
            .then(res => this.loadDrivers())
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
            API.saveDriver({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                destination: this.state.destination
            })
                .then(res => this.loadDrivers())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Consumer>
                {(context) => {
                    const { drivers } = context.library || [];
                    return (
                        <Container fluid>
                            <Row>
                                <Col size="md-8-offset-1 sm-12 lg-12">
                                    <Jumbotron>
                                        <h1>Drivers List</h1>
                                    </Jumbotron>
                                    <Row>
                                        <Home />
                                        {this.state.drivers.length ? (
                                            <List>
                                                {this.state.drivers.map(driver => (
                                                    <ListItem key={driver._id}>
                                                        <button className="like" onClick={() => context.library.incrementLikes(driver._id)}>
                                                            <i className="fas fa-thumbs-up">&nbsp;&nbsp;</i>
                                                            <span className="like-count">{(drivers.find(search => search.id === driver._id)) ? drivers.find(search => search.id === driver._id).likes : 0}</span>
                                                        </button>
                                                        <Link to={"/driversList/" + driver._id}>
                                                            <strong>
                                                                {driver.firstName} {' '} {driver.lastName} <br />
                                                            </strong>
                                                        </Link>
                                                        <img src={faker.image.avatar()} alt={"img"} width="50" height="50" /> <br />
                                                        <span className="destination">Destination: </span>{driver.destination} <br />
                                                        <span className="destination">From: </span> <br />
                                                        <span className="destination">Time: </span>
                                                        <DeleteBtn onClick={() => this.deleteDriver(driver._id)} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        ) : (
                                                <h3>No Results to Display</h3>
                                            )}
                                    </Row>
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

export default DriversList;
