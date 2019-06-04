import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

class Riders extends Component {
    state = {
        riders: [],
        firstName: "",
        lastName: "",
        destination: ""
    };

    componentDidMount() {
        this.loadRiders();
    }

    loadRiders = () => {
        API.getRiders()
            .then(res =>
                this.setState({ riders: res.data, firstName: "", lastName: "", destination: "" })
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
                destination: this.state.destination
            })
                .then(res => this.loadRiders(),
                    this.props.history.push('/driversList')
                    //add loading giffy here
                )
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6-offset-3 sm-12 lg-12" >
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
                                value={this.state.destination}
                                onChange={this.handleInputChange}
                                name="destination"
                                placeholder="enter a destination"
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
