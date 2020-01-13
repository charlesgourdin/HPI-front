import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
// import conf from '../constants/conf.json';
export const SocketContext = React.createContext();

class SocketProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            endpoint: "http://localhost:4001",
            user: 'anonyme',
            discussion: [],
            chatActiv: false,
            ticketActiv: -1,
            changeUsername: this.changeUsername,
            openChat: this.openChat,
            closeChat: this.closeChat,
            sendMessage: this.sendMessage
        }
    }

    changeUsername = (name) => {
        this.setState({ user: name })
    }

    openChat = (i) => {
        this.setState({chatActiv : true, ticketActiv: i})
    }

    closeChat = () => {
        this.setState({chatActiv: false , ticketActiv: -1})
    }

    sendAlert = (e) => {
        console.log(e);
    }

    sendMessage = (message) => {
        const socket = socketIOClient(this.state.endpoint)
        if (message.length > 0) socket.emit('message', {message: message, user: this.state.user})
    }   

    componentDidMount = () => {
        const socket = socketIOClient(this.state.endpoint)
        socket.on('message', object => {
            this.setState({ discussion: [...this.state.discussion, object] })
                document.getElementById("to_autoscroll").scrollBy(0,10000)
        })
    }

    render() {
        return (
            <SocketContext.Provider value={this.state}>
                {this.props.children}
            </SocketContext.Provider>
        )
    }
}

export default SocketProvider;
