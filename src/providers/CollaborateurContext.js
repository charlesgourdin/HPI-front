import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';
export const CollaborateurContext = React.createContext();

class CollaborateurProvider extends Component {
    constructor(props) {
        super(props)
        this.channel = '';
        this.clientId = '';
        this.state = {
            socket: socketIOClient(`${this.props.endpoint}`),
            user:'anonyme',
            discussion: [],
            chatActiv: false,
            ticketActiv: -1,
            startCollab: this.startCollab,
            closeChat: this.closeChat,
            sendMessage: this.sendMessage,
        }
    }

    startCollab = (name) => {
        this.setState({ user: name }, () => {

            axios.post(`${this.props.endpoint}/tickets/`, {
                id: 5,
                token: 111,
                pseudo: this.state.user
            })
                .then(res => {
                    this.channel = res.data.channel
                })
                .then(() => {
                    this.state.socket.emit('waiting room', this.channel)
                    this.state.socket.on('waiting room', object => {
                        if (typeof (object) === 'object') {
                            this.setState({ discussion: [...this.state.discussion, object] })
                            if (this.state.chatActiv) document.getElementById("to_autoscroll").scrollBy(0, 10000)
                        }
                        else {
                            this.clientId = object
                        }
                        // document.getElementById("to_autoscroll").scrollBy(0, 10000)
                    })
                })
        })
    }

    closeChat = () => {
        this.setState({ chatActiv: false, ticketActiv: -1, discussion: [] })
        this.state.socket.emit('leave room', { channel: this.channel, clientId: this.clientId })
    }

    sendMessage = (message) => {
        if (message.length > 0) {
            this.state.socket.emit('message', { message: message, user: this.state.user, channel: this.channel })
        }
    }

    componentDidMount = () => {
    }

    render() {
        return (
            <CollaborateurContext.Provider value={this.state}>
                {this.props.children}
            </CollaborateurContext.Provider>
        )
    }
}

export default CollaborateurProvider;
