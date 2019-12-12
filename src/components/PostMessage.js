import React, { useContext, useState } from 'react'
import { SocketContext } from '../providers/SocketContext'
import { Button } from 'reactstrap';
import { InputGroup, Input } from 'reactstrap';

const PostMessage = () => {

    const { sendMessage } = useContext(SocketContext)
    const [msg, changeMsg] = useState('')



    return (
        <div>
            <div>
                <InputGroup >
                    <Input
                        type="text"
                        id="message"
                        name="message"
                        onChange={e => changeMsg(e.target.value)}
                        value={msg}
                    />
                    <Button color="primary" size="sm" onClick={() => {
                        sendMessage(msg)
                        changeMsg('')
                    }}>Envoyer</Button>
                </InputGroup>
            </div >



        </div >
    )
}

export default PostMessage;