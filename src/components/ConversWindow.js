import React, { useContext } from 'react';
import { SocketContext } from '../providers/SocketContext'
import './ConversWindow.css';
import Moment from 'react-moment'

const ConversWindow = () => {

    const { user, discussion } = useContext(SocketContext)

    

    return (
        <div className="mt-2 h-100" id="to_autoscroll"
        style={{
            overflowY:'scroll',
            width: '98%'
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
                        <Moment format="HH:mm" style={{float:'right', fontSize:'12px'}}>à récupérer de message</Moment>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default ConversWindow;
