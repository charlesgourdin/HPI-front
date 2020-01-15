import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';
// import conf from '../constants/conf.json';
export const SocketContext = React.createContext();

class SocketProvider extends Component {
    constructor(props) {
        super(props)
        this.channel = '';
        this.state = {
            endpoint: "http://localhost:4000",
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

            axios.post(`${this.state.endpoint}/tickets`, {
                id: 5,
                token: 111,
                pseudo: this.state.user
            })
                .then(res => {
                    console.log(res.data.channel)
                    this.channel = res.data.channel
                })
            // .then(() => {
            //     const socket = socketIOClient(this.state.endpoint)
            //     socket.on(this.channel, object => {
            //         this.setState({ discussion: [...this.state.discussion, object] })
            //         document.getElementById("to_autoscroll").scrollBy(0, 10000)
            //     })
            // })
        })
    }

    openChat = (i, channel) => {
        this.setState({ chatActiv: true, ticketActiv: i })
        this.channel = channel

    }

    openChannel = () => {
        const socket = socketIOClient(this.state.endpoint)
        socket.on(this.channel, object => {
            this.setState({ discussion: [...this.state.discussion, object] })
            document.getElementById("to_autoscroll").scrollBy(0, 10000)
        })
    }

    closeChat = () => {
        this.setState({ chatActiv: false, ticketActiv: -1 })
    }

    getTicket = () => {
        axios.get(`${this.state.endpoint}/tickets/all`)
            .then(res => {
                const tickets = res.data;
                this.setState({ tickets });
            })
    }

    sendMessage = (message) => {
        const socket = socketIOClient(this.state.endpoint)
        if (message.length > 0) socket.emit(this.channel, { message: message, user: this.state.user })
    }

    componentDidMount = () => {
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
