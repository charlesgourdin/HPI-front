import React, { Component } from 'react';
import './ConversWindow.css';
import axios from 'axios';

class ConversWindow extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount()
    {
        setInterval(() =>
            // Send the request
            axios.get('http://192.168.146.94:4000/api/tickets')
                // Extract the DATA from the received response
                .then(response => response.data)
                // Use this data to update the state
                .then(data =>
                {
                    //console.log(data.data)
                    this.setState({
                        data: data.data
                    });
                }), 500)
    }

    render()
    {
        const { data } = this.state
        return (
            <div className="discFill">
                {data.map((item, i) =>
                {
                    return (<div className="messageBloc" key={i} style={{ float: this.props.username === item.username ? "right" : "left" }}>
                        <p className="apiusername">{item.username}</p>
                        <p className="apiMessage">{item.message}</p>
                    </div>)
                })}
            </div>
        )
    }
}

export default ConversWindow;