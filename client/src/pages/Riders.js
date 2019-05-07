import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Riders extends Component {
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
        API.saveRiders({
            title: this.state.firstName,
            author: this.state.lastName,
            synopsis: this.state.hobby
        })
            .then(res => this.loadRiders())
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
        <Container fluid>
            <Row>
            <Col size="md-6" center>
                <Jumbotron>
                <h1>Rider Info</h1>
                </Jumbotron>
                <form>
                <Input
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    name="firstName"
                    placeholder="first name"
                />
                <Input
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    name="lastName"
                    placeholder="last name"
                />
                <TextArea
                    value={this.state.hobby}
                    onChange={this.handleInputChange}
                    name="hobby"
                    placeholder="enter a hobby"
                />
                <FormBtn
                    disabled={!(this.state.firstName && this.state.lastName)}
                    onClick={this.handleFormSubmit}
                >
                    Submit Rider Form
                </FormBtn>
                </form>
            </Col>
            </Row>
        </Container>
        );
    }
}

export default Riders;
