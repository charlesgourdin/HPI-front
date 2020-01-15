import React, { useContext, useState } from 'react'
import { SocketContext } from '../providers/SocketContext'
import ConversWindow from './ConversWindow';
import PostMessage from './PostMessage';

const ChatBoxPsy = () => {

    const [inChat, validChat] = useState(false)
    const { openChannel, closeChat } = useContext(SocketContext)


    return (
        <>
            {!inChat ?
                <div className='d-flex flex-column justify-content-center align-items-center h-100 w-100'>
                    <div className='w-50 z-depth-1 d-flex flex-column justify-content-around align-items-center' style={{ height: '150px', borderRadius: '8px' }}>
                        <h2 style={{
                            textAlign: 'center',
                            color: 'black',
                            margin: '12px 0 0 0',
                        }}>
                            Ouvrir ce ticket?
                </h2>
                        <div>
                            <button className='primary_button' onClick={() => { validChat(true) ; openChannel()}}>Oui</button>
                            <button className='danger_button' onClick={() => closeChat()}>Non</button>
                        </div>
                    </div>
                </div>
                :
                <div className='d-flex flex-column justify-content-between align-items-center w-100 h-100 z-depth-2' style={{
                    borderRadius: '10px'
                }}>
                    <button className='danger_button' style={{ width: '200px', alignSelf: 'flex-start', marginBottom: '0' }} onClick={() => closeChat()}>Terminer la discussion</button>
                    <div style={{ width: '100%' }}><hr /></div>
                    <ConversWindow />
                    <PostMessage />
                </div>
            }
        </>
    )

}
export default ChatBoxPsy;
