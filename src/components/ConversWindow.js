import React, { useContext } from 'react';
import { SocketContext } from '../providers/SocketContext'
import './ConversWindow.css';

const ConversWindow = () => {

    const { user, discussion } = useContext(SocketContext)

    return (
        <div className="discFill">
            {discussion.map((item, i) => {
                return (<div className="messageBloc" key={i}
                    style={{ float: user === item.user ? "right" : "left" }}
                >
                    <p className="apiusername">{item.user}</p>
                    <p className="apiMessage">{item.message}</p>
                </div>)
            })}
        </div>
    )
}

export default ConversWindow;