import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Consumer from "../context/configContext";

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
                const { riders } = context.ridersLibrary || [];
                return (
                <Container fluid>
                    <Row>
                    <Col size="md-6 sm-12">
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
                                    <Link to={"/riders/" + rider._id}>
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
                </Container>
                )}
                }
            </Consumer>
        );
    }
}

export default RidersList;
