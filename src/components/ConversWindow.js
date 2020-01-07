import React, { useContext } from 'react';
import { SocketContext } from '../providers/SocketContext'
import './ConversWindow.css';

const ConversWindow = () => {

    const { user, discussion } = useContext(SocketContext)

    return (
        <div className="w-100 h-75 mt-2 mx-2" id="to_autoscroll"
        style={{
            // border:'1px black solid',
            overflowY:'scroll'
        }}>
            {discussion.map((item, i) => {
                return (<div className="w-75 d-flex flex-column m-2" key={i}
                    style={{ float: user === item.user ? "right" : "left" }}
                >
                    <p className="apiUsername"
                        style={{ alignSelf: user === item.user ? "flex-end" : "flex-start" }}
                    >{item.user}</p>
                    <div className={user === item.user ? "messageBlocA" : "messageBlocB"}>
                        <p className="apiMessage">{item.message}</p>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default ConversWindow;
