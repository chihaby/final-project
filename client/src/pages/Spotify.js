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
            // ,

            // CurrentPlayLists: {
            //     name: "Not Checked",
            //     image: ""
            // }
            
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
                if (response) {
                this.setState({
                    nowPlaying: {
                        name: response.item.name,
                        image: response.item.album.images[0].url
                    }
                })
            } else {
                this.setState({
                    nowPlaying: {
                        name: "Nothing is playing",
                        image:""
                    }
                })
            }
            })
    }

    

    // getCurrentPlayLists() {
    //     spotifyWebApi.getMyCurrentPlayLists()
    //         .then((response) => {
    //             if (response) {
    //             this.setState({
    //                 CurrentPlayLists: {
    //                     name: response.item.name,
    //                     image: response.item.album.images[0].url
    //                 }
    //             })
    //         } else {
    //             this.setState({
    //                 CurrentPlayLists: {
    //                     name: "Nothing is playing",
    //                     image:""
    //                 }
    //             })
    //         }
    //         })
    
    // }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Spotify </h1>
                            {/* <h1>
                                <span role="img" aria-label="music">
                                    📻
                            </span>
                            </h1> */}
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <List>
                        <ListItem>
                            <div>
                                <button className="checkNowPlaying" onClick={() => this.getNowPlaying()} >
                                    Check Now Playing
                                </button>
                            </div>
                        </ListItem>
                        {/* <ListItem>
                            <div>
                                <button className="checkMyCurrentPlayLists" onClick={() => this.getCurrentPlayLists()} >
                                    Check Current Playlist
                                </button>
                            </div>
                        </ListItem> */}
                        <ListItem>
                            <div className="nowPlayingTitle">
                                Now Playing: {this.state.nowPlaying.name}
                            </div>
                            <div className="nowPlayingImage">
                                <img src={this.state.nowPlaying.image} style={{ width: 300 }} />
                            </div>
                        </ListItem>

                        {/* <ListItem>
                            <div className="CurrentPlayListsTitle">
                                Now Playing: {this.state.CurrentPlayLists.name}
                            </div>
                            <div className="CurrentPlayListsImage">
                                <img src={this.state.CurrentPlayLists.image} style={{ width: 300 }} />
                            </div>
                        </ListItem> */}
                    </List>
                </Row>
            </Container>
        );
    }
}

export default SpotifyNowPlaying;
