import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';
export const SocketContext = React.createContext();

class SocketProvider extends Component {
    constructor(props) {
        super(props)
        this.channel = '';
        this.clientId = '';
        this.state = {
            // endpoint: "http://192.168.146.52:4000", 
            endpoint: "http://192.168.146.94:4000",
            // endpoint: "http://192.168.1.12:4000",
            socket: '',
            user: 'anonyme',
            discussion: [],
            tickets: [],
            chatActiv: false,
            ticketActiv: -1,
            startCollab: this.startCollab,
            openChat: this.openChat,
            openChannel: this.openChannel,
            closeChat: this.closeChat,
            sendMessage: this.sendMessage
        }
    }

    startCollab = (name) => {
        this.setState({ user: name }, () => {

            axios.post(`${this.state.endpoint}/tickets/`, {
                id: 5,
                token: 111,
                pseudo: this.state.user
            })
                .then(res => {
                    console.log(res.data.channel)
                    this.channel = res.data.channel
                })
                .then(() => {
                    this.state.socket.emit('waiting room', this.channel)
                    this.state.socket.on('waiting room', object => {
                        this.setState({ discussion: [...this.state.discussion, object] })
                        document.getElementById("to_autoscroll").scrollBy(0, 10000)
                    })
                })
        })
    }

    openChat = (i, channel) => {
        this.setState({ chatActiv: true, ticketActiv: i })
        this.channel = channel

    }

    openChannel = () => {
        this.state.socket.emit('waiting room', this.channel)
        this.state.socket.on('waiting room', object => {
            if(typeof(object)==='object'){
                this.setState({ discussion: [...this.state.discussion, object] })
                if (this.state.chatActiv) document.getElementById("to_autoscroll").scrollBy(0, 10000)
            }
            else {
                this.clientId = object
            }
        })
    }

    closeChat = () => {
        this.setState({ chatActiv: false, ticketActiv: -1, discussion : [] })
        this.state.socket.emit('leave room', {channel: this.channel, clientId: this.clientId})
    }

    getTicket = () => {
        axios.get(`${this.state.endpoint}/tickets/all`)
            .then(res => {
                const tickets = res.data;
                this.setState({ tickets });
            })
    }

    sendMessage = (message) => {
        if (message.length > 0) {
            this.state.socket.emit('message', { message: message, user: this.state.user, channel: this.channel })
        }
    }

    componentDidMount = () => {
        this.setState({socket: socketIOClient(this.state.endpoint)})
        this.getTicket()
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
