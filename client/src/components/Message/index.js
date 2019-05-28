import React, { Component } from "react"
import Jumbotron from "../Jumbotron"
import { Col, Row, Container } from "../Grid"
import MessageList from "../MessageList"
import MessageFormSend from "../MessageFormSend"
import MessageRoomList from "../MessageRoomList"
import MessageNewRoomForm from "../MessageNewRoomForm"
import Chatkit from "@pusher/chatkit-client"
import { testToken, instanceLocator } from "../../context/configContext"
import "./style.css";

//const username = userId;
//const roomId = '19414065';

function Title() {
    return <p className="title">chat room</p>
}

class Message extends Component {
    constructor() {
        super()
        this.state = {
            roomId: "19414065",
            messages: [],
            joinableRooms: [],
            joinedRooms: []
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.getRooms = this.getRooms.bind(this)
        this.createRoom = this.createRoom.bind(this)
    }

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: instanceLocator,
            userId: 'Rad',
            tokenProvider: new Chatkit.TokenProvider({
                url: testToken
            })
        })

        chatManager.connect()
            .then(currentUser => {
                this.currentUser = currentUser
                this.getRooms()
            })
            .catch(err => console.log('error on connecting: ', err))
    }
    getRooms() {
        this.currentUser.getJoinableRooms()
            .then(joinableRooms => {
                this.setState({
                    joinableRooms,
                    joinedRooms: this.currentUser.rooms
                })
            })
            .catch(err => console.log('error on joinableRooms: ', err))
    }

    subscribeToRoom(roomId) {
        this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId,
            hooks: {
                onNewMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
            .then(room => {
                this.setState({
                    roomId: room.id
                })
                this.getRooms()
            })
            .catch(err => console.log('error on subscribing to room: ', err))
    }

    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: this.state.roomId
        })
    }

    createRoom(name) {
        this.currentUser.createRoom({
            name
        })
            .then(room => this.subscribeToRoom(room.id))
            .catch(err => console.log('error with createRoom: ', err))
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-8-offset-1 sm-12 lg-12">
                        <Jumbotron>
                            <h1>Chat Chat</h1>
                        </Jumbotron>
                        <Row>
                            <div className="chatContainer">
                                <MessageRoomList
                                    subscribeToRoom={this.subscribeToRoom}
                                    rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                                    roomId={this.state.roomId} />
                                <Title />
                                <MessageList
                                    roomId={this.state.roomId}
                                    messages={this.state.messages} />
                                <MessageFormSend
                                    sendMessage={this.sendMessage} />
                                <MessageNewRoomForm createRoom={this.createRoom} />
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Message;

