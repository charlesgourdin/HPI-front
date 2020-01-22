import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';
export const PsychologueContext = React.createContext();

class PsychologueProvider extends Component {
    constructor(props) {
        super(props)
        this.channel = '';
        this.clientId = '';
        this.token = localStorage.getItem("token") || null;
        this.state = {
            endpoint: this.props.endpoint,
            socket: socketIOClient(`${this.props.endpoint}`),
            user: localStorage.getItem("username") || 'anonyme',
            isLogged: false,
            discussion: [],
            tickets: [],
            chatActiv: false,
            formActiv: false,
            ticketActiv: -1,
            getTicket: this.getTicket,
            openChat: this.openChat,
            openChannel: this.openChannel,
            closeChat: this.closeChat,
            closeTicket: this.closeTicket,
            sendForm: this.sendForm,
            sendMessage: this.sendMessage,
            setToken: this.setToken
        }
    }

    setToken = (data) => {
        this.setState({ user: data.username })
        this.token = data.token
    }

    openChat = (i, channel) => {
        this.setState({ chatActiv: true, ticketActiv: i })
        this.channel = channel
    }

    openChannel = () => {
        this.state.socket.emit('waiting room', this.channel)
    }

    closeChat = () => {
        this.setState({ chatActiv: false, ticketActiv: -1, discussion: [] })
        this.state.socket.emit('leave room', { channel: this.channel, clientId: this.clientId })
    }

    closeTicket = () => {
        this.setState({chatActiv: !this.state.chatActiv, formActiv: !this.state.formActiv})
    }

    sendForm = () =>{
        this.setState({formActiv: false, ticketActiv: -1, discussion: [] })
        this.state.socket.emit('leave room', { channel: this.channel, clientId: this.clientId })
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
            this.state.socket.emit('message', { message: message, user: this.state.user, channel: this.channel })
        }
    }

    componentDidMount = () => {
        this.state.socket.on('waiting room', object => {
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
