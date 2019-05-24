import React, { Component } from "react";
import Message from "../components/Message";
// import SendMessageForm from "../components/SendMessageForm";
// import MessageList from "../components/MessageList";

class Chat extends Component {
    render() {
        return (
            <div>
                <Message />
                {/* <SendMessageForm />
                <MessageList /> */}
            </div>
        );
    }
}

export default Chat;