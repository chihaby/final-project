import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

function About() {
    return (
        <Container fluid>
        <Row>
            <Col size="md-12">
            <Jumbotron>
                <h1>About CarPool Pal</h1>
            </Jumbotron>
            </Col>
        </Row>
     
            <h3>UNDER CONSTRUCTION</h3><br/>
            <h4>TARGET</h4>
            <p>This application will target current casual carpool users in the Bay Area. Currently the casual carpool community utilizes predetermined pick-up spots where both drivers and riders meet and without previous knowledge of each other. 
                We have identified an opportunity to provide both drivers and riders of the casual carpool a chance to determine who they ride with prior to their pick-up times.</p>
            <h4>HOW</h4>
            <p>By creating an app that has user profiles that define musical taste, film choices, and different types of interest and hobbies, we believe that the carpooling experience can be more enjoyable. People of similar interest can gravitate towards one another with the certainty that their interest and their musical choices are going to be pleasant subject matter.<br/>
                Once users of the casual carpool start to seek each other out motivated by their musical taste and hobbies we believe that the app can provide a platform so that the casual carpool is not rooted in a predetermined physical location, but that users themselves will begin to communicate with members of their carpooling community to plan rides before hand and to define their own unique pickup locations. </p>           
            <h4>WHY</h4>
            <p>There are current apps in the market that cater to the car pooling community but they are not free and don’t really address the ideal of creating community within interest groups. The integration of social media such as Facebook and location services such as Google Maps offers an opportunity to make the carpooling experience an enjoyable and social experience where people of like mind commune while traveling together. Furthermore the capacity of users to create music playlist via Spotify offers a great means to match people of similar musical taste.<br/>
                We can attract a larger demographic of people with this app because it will remain free for users and because we are tapping into an existing community. The opportunity to create a profitable outcome with this application will come from the data that users are providing in regard to their musical preferences and more. This data can give providers an exeptional opportunity to target users for goods and services that are certain to make an impact. After all users themselves will be telling us what they like. The opportunities generated for advertising concerts, musicals, theater, and cultural venues are very real. Providers could offer goods and services to our particular demographic groups and give them incentives for participating together. These perks could be reflected in special group pricing or discounts for events<br/>
                On the other hand we could offer a no advertising version of our app for anyone who is willing to pay a small monthly fee.<br/>
                Another aspect that is often overlooked while utilizing the casual carpool is the fact that people don’t know who they are riding with. Anonymity can be a factor for creating a bit of anxiety and a rather aloof and cold environment. Negative aspects of riding in an anonymous environment can be tolerated when rides are short and when the presence of multiple riders can help neutralize an unpleasant input. On the other hand, when rides are long and when a particular person is inconsiderate or rude, this can be a troublesome predicament.<br/>
                Our app will provide a rating system that keeps riders polite and considerate with each other and promotes accountability within the pooling community. People have demonstrated that status and a positive perception of themselves to others in a community is the best way to mantain integrity and a healthy environment. Anyone who is negative or disruptive can in essence cancel themselves out of the community because their ratings will reflect it so. </p>
            <h4>TECHNOLOGIES</h4>
            <p>Spotify, Google Maps, Axios, React, Node.Js<br/>
                Still in the works</p>        
      
        </Container>
    );
}

export default About;
