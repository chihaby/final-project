import React, { Component } from "react";
// import MessageList from "../MessageList";
// import SendMessageForm from "../SendMessageForm";
// import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import Chatkit from "@pusher/chatkit-client";

const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/9e14975c-602d-4718-8bad-ca97925e559a/token";
const instanceLocator = "v1:us1:9e14975c-602d-4718-8bad-ca97925e559a";
const roomId = '19414065';
const username = 'Rad';


class Message extends Component {
    constructor() {
        super()
        this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
        console.log(this.state.messages);
    }



    componentDidMount() {
        console.log(testToken);
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: instanceLocator,
            userId: username,
            tokenProvider: new Chatkit.TokenProvider({
                url: testToken
            })
        })

        chatManager.connect()
            .then(currentUser => {
                this.currentUser = currentUser
                console.log("current", currentUser)
                this.currentUser.subscribeToRoom({
                    roomId: roomId,
                    hooks: {
                        onNewMessage: message => {

                            this.setState({
                                messages: [...this.state.messages, message]
                            })
                        }
                    }
                })
            })
    }

    sendMessage(text) {
        console.log("from sendMessage", text);
        this.currentUser.sendMessage({
            text,
            roomId: roomId
        })
        console.log("roomId", roomId)
    }

    render() {
        return (
            <div className="app">
                <Title />
                <MessageList
                    roomId={this.state.roomId}
                    messages={this.state.messages} />
                <SendMessageForm
                    sendMessage={this.sendMessage} />
            </div>
        );
    }
}

class MessageList extends Component {
    render() {
        return (
            <ul className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                        <li key={message.id} className="message">
                            <div>{message.senderId}</div>
                            <div>{message.text}</div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

class SendMessageForm extends Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <input
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}


function Title() {
    return <p className="title">chat room</p>
}

export default Message;

