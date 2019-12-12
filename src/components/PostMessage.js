import React, { useContext, useState } from 'react'
import { SocketContext } from '../providers/SocketContext'
import './PostMessage.css';

const PostMessage = () => {

    const { sendMessage } = useContext(SocketContext)
    const [msg, changeMsg] = useState('')



    return (
        <div className='postMessageContainer'>
            <div className='postMessageForm'>
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                        onChange={e => changeMsg(e.target.value)}
                        value={msg}
                    />
                    <button color="primary" size="sm" onClick={() => {
                        sendMessage(msg)
                        changeMsg('')
                    }}>Envoyer</button>
            </div >



        </div >
    )
}

export default PostMessage;