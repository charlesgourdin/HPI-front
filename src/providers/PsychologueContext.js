import React, { Component } from 'react';
import axios from 'axios';
export const PsychologueContext = React.createContext();

class PsychologueProvider extends Component {
    constructor(props) {
        super(props)
        this.channel = '';
        this.clientId = '';
        this.userId = localStorage.getItem('userId') || null;
        this.token = localStorage.getItem("token") || null;
        this.socket = this.props.socket;
        this.state = {
            endpoint: this.props.endpoint,
            user: localStorage.getItem("username") || 'anonyme',
            status: 'psy_online',
            isLogged: false,
            discussion: [],
            tickets: [],
            menuActiv: 'profil',
            chatActiv: false,
            formActiv: false,
            ticketActiv: -1,
            changeMenu: this.changeMenu,
            putStatus: this.putStatus,
            getTicket: this.getTicket,
            openChat: this.openChat,
            openChannel: this.openChannel,
            closeChat: this.closeChat,
            closeTicket: this.closeTicket,
            sendForm: this.sendForm,
            sendMessage: this.sendMessage,
            setToken: this.setToken,
            ticketId: ''
        }
    }

    setToken = (data) => {
        this.setState({ user: data.username })
        this.token = data.token
        this.userId = data.id
        //Mise à jour du status du psychologue à la connexion (psy_online)
        this.putStatus('psy_online')

    }

    putStatus = (status) => {
        //Mise à jour du status du psy
        this.setState({ status: status })
        axios.put(`${this.props.endpoint}/api/users/auth/admin/${this.userId}`, { role: status }, { headers: { "Authorization": `Bearer ${this.token}` } })
            .then(res => {
                // console.log(res)
            })
    }

    changeMenu = (page) => {
        this.setState({ menuActiv: page })
    }

    openChat = (i, channel, ticketId) => {
        this.setState({ chatActiv: true, ticketActiv: i, ticketId: ticketId })
        this.channel = channel
    }

    openChannel = () => {
        this.socket.emit('waiting room', this.channel)
        this.putStatus('psy_busy')
    }

    closeChat = () => {
        this.setState({ chatActiv: false, ticketActiv: -1, discussion: [] })
        this.socket.emit('leave room', { channel: this.channel, clientId: this.clientId })
        this.putStatus('psy_online')
    }

    closeTicket = () => {
        this.setState({ chatActiv: !this.state.chatActiv, formActiv: !this.state.formActiv })
    }

    sendForm = () => {
        this.setState({ formActiv: false, ticketActiv: -1, discussion: [] })
        this.socket.emit('leave room', { channel: this.channel, clientId: this.clientId })
        this.putStatus('psy_online')
    }

    getTicket = () => {
        axios.get(`${this.props.endpoint}/api/tickets/all`, { headers: { "Authorization": `Bearer ${this.token}` } })
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
                sender_id: this.userId,
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
