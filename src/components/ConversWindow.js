import React, { useContext } from 'react';
import { SocketContext } from '../providers/SocketContext'
import './ConversWindow.css';

const ConversWindow = () => {

    const { user, discussion } = useContext(SocketContext)

    return (
        <div className="discFill">
            {discussion.map((item, i) => {
                return (<div className="messageContainer" key={i}
                    style={{ float: user === item.user ? "right" : "left" }}
                >
                    <p className="apiUsername"
                        style={{ alignSelf: user === item.user ? "flex-end" : "flex-start" }}
                    >{item.user}</p>
                    <div className="messageBloc"
                    style={{ backgroundColor: user === item.user ? "#6e6e6e" : "#236FFF" }}
                    >
                        <p className="apiMessage">{item.message}</p>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default ConversWindow;