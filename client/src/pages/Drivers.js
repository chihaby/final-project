import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";


class Drivers extends Component {
    state = {
        drivers: [],
        firstName: "",
        lastName: "",
        destination: "",
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
                .then(res => this.loadDrivers(),
                    this.props.history.push('/ridersList')
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
                            <h1>Driver Info</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                                name="firstName"
                                placeholder="First Name"
                            />
                            <Input
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                                name="lastName"
                                placeholder="Last Name"
                            />
                            <TextArea
                                value={this.state.destination}
                                onChange={this.handleInputChange}
                                name="destination"
                                placeholder="Destination"
                            />
                            
                            <FormBtn
                                disabled={!(this.state.firstName && this.state.lastName)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Driver Form
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Drivers;
