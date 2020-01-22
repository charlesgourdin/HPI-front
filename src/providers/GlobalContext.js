import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
export const GlobalContext = React.createContext();

class GlobalProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            endpoint: "http://192.168.146.52:4000",
            // endpoint: "http://192.168.146.94:4000",
            socket: socketIOClient("http://192.168.146.52:4000"),
            // socket: socketIOClient("http://192.168.146.94:4000"),
        }
    }

    componentDidMount = () => {
    }

    render() {
        return (
            <GlobalContext.Provider value={this.state}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}

export default GlobalProvider;
