import React, { Component } from 'react';
import axios from 'axios';
export const PsychologueContext = React.createContext();

class PsychologueProvider extends Component {
    constructor(props) {
        super(props)
        this.channel = '';
        this.clientId = '';
        this.token = localStorage.getItem("token") || null;
        this.socket = this.props.socket;
        this.state = {
            user: localStorage.getItem("username") || 'anonyme',
            isLogged: false,
            discussion: [],
            tickets: [],
            chatActiv: false,
            ticketActiv: -1,
            getTicket: this.getTicket,
            openChat: this.openChat,
            openChannel: this.openChannel,
            closeChat: this.closeChat,
            sendMessage: this.sendMessage,
            setToken: this.setToken,
            ticketId: '',
            userId: localStorage.getItem("userId") || null,
        }
    }

    setToken = (data) => {
        this.setState({ user: data.username })
        this.token = data.token
    }

    openChat = (i, channel, ticketId) => {
        this.setState({ chatActiv: true, ticketActiv: i, ticketId: ticketId })
        this.channel = channel
    }

    openChannel = () => {
        this.socket.emit('waiting room', this.channel)
    }

    closeChat = () => {
        this.setState({ chatActiv: false, ticketActiv: -1, discussion: [] })
        this.socket.emit('leave room', { channel: this.channel, clientId: this.clientId })
    }

    getTicket = () => {
        axios.get(`${this.props.endpoint}/tickets/all`, { headers: { "Authorization": `Bearer ${this.token}` } })
            .then(res => {
                const tickets = res.data;
                this.setState({ tickets });
            })
    }

    sendMessage = (message) => {
        if (message.length > 0) {
            this.socket.emit('message', { 
                message: message, 
                user: this.state.user, 
                channel: this.channel,
                timestamp: Date.now(),
                sender_id: this.state.userId,
                tickets_id: this.state.ticketId
            })
        }
    }

    componentDidMount = () => {
        this.socket.on('waiting room', object => {
            if (typeof (object) === 'object') {
                this.setState({ discussion: [...this.state.discussion, object] })
                if (this.state.chatActiv) document.getElementById("to_autoscroll").scrollBy(0, 10000)
            }
            else {
                this.clientId = object
            }
        })
    }

    render() {
        return (
            <PsychologueContext.Provider value={this.state}>
                {this.props.children}
            </PsychologueContext.Provider>
        )
    }
}

export default PsychologueProvider;
