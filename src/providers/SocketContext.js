import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
export const SocketContext = React.createContext();

class SocketProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            endpoint: "http://192.168.146.52:4001",
            discussion: [],
            sendMessage: this.sendMessage
        }
    }

    sendMessage = (message) => {
        console.log(message)
        const socket = socketIOClient(this.state.endpoint)
        socket.emit('message', message)
    }

    componentDidMount = () => {
        const socket = socketIOClient(this.state.endpoint)
        socket.on('message', (message) => {
            this.setState({ discussion: [...this.state.discussion, message] })
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