import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List"
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();

class SpotifyNowPlaying extends Component {

    constructor() {
        super();
        const params = this.getHashParams();
        this.state = {
            loggedIn: params.access_token ? true : false,
            nowPlaying: {
                name: "Not Checked",
                image: ""
            }
        }
        if (params.access_token) {
            spotifyWebApi.setAccessToken(params.access_token)
        }
    }

    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while (e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }

    getNowPlaying() {
        spotifyWebApi.getMyCurrentPlaybackState()
            .then((response) => {
                this.setState({
                    nowPlaying: {
                        name: response.item.name,
                        image: response.item.album.images[0].url
                    }
                })
            })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Spotify </h1>
                            <h1>
                                <span role="img" aria-label="music">
                                    📻
                            </span>
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <List>
                        <ListItem>
                            <div className="logIn w Spotify">
                                <a href='http://localhost:8888'>
                                    <button className="spotifyLogin">
                                        Login With Spotify
                                    </button>
                                </a>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div>
                                <button className="checkNowPlaying" onClick={() => this.getNowPlaying()} >
                                    Check Now Playing
                                </button>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div className="nowPlayingTitle">
                                Now Playing: {this.state.nowPlaying.name}
                            </div>
                            <div className="nowPlayingImage">
                                <img src={this.state.nowPlaying.image} style={{ width: 300 }} />
                            </div>
                        </ListItem>
                    </List>
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
        );
    }
}

export default SpotifyNowPlaying;
