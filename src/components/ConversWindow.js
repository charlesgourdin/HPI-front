import React, {useContext} from 'react';
import { SocketContext } from '../providers/SocketContext'
import './ConversWindow.css';

const ConversWindow = () => {

    const {discussion} = useContext(SocketContext)

    return (
        <div className="discFill">
            {discussion.map((item, i) => {
                return (<div className="messageBloc" key={i}
                // style={{ float: this.props.username === item.username ? "right" : "left" }}
                >
                    {/* <p className="apiusername">{item.username}</p> */}
                    <p className="apiMessage">{item}</p>
                </div>)
            })}
        </div>
    )
}

export default ConversWindow;