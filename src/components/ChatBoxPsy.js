import React, { useContext, useState } from 'react'
import { SocketContext } from '../providers/SocketContext'
import ConversWindow from './ConversWindow';
import PostMessage from './PostMessage';

const ChatBoxPsy = () => {

    const [inChat, validInChat] = useState(false)
    const [outChat, validOutChat] = useState(false)
    const { openChannel, closeChat } = useContext(SocketContext)


    return (
        <>
            {!inChat ?
                <div className='d-flex flex-column justify-content-center align-items-center h-100 w-100'>
                    <div className='w-50 z-depth-1 d-flex flex-column justify-content-around align-items-center' style={{ height: '150px', borderRadius: '8px', minWidth: '350px' }}>
                        <h2 style={{
                            textAlign: 'center',
                            color: 'black',
                            margin: '12px 0 0 0',
                        }}>
                            Ouvrir ce ticket?
                </h2>
                        <div>
                            <button className='primary_button' onClick={() => { validInChat(true); openChannel() }}>Oui</button>
                            <button className='danger_button' onClick={() => closeChat()}>Non</button>
                        </div>
                    </div>
                </div>
                :
                <div className='d-flex flex-column justify-content-between align-items-center w-100 h-100 z-depth-2' style={{
                    borderRadius: '10px',
                    position: 'relative'
                }}>
                    <button className='danger_button' style={{ width: '200px', alignSelf: 'flex-start', marginBottom: '0' }} onClick={() => validOutChat(true)}>Terminer la discussion</button>
                    <div style={{ width: '100%' }}><hr /></div>
                    <ConversWindow/>
                    <PostMessage />
                    {
                        outChat &&
                        // <div className='d-flex flex-column justify-content-center align-items-center h-100 w-100'>
                        <div className='d-flex flex-column justify-content-center align-items-center h-100 w-100'
                            style={{
                                position: 'absolute'
                            }}
                        >
                            <div className='w-50 z-depth-1 d-flex flex-column justify-content-around align-items-center' style={{ height: '150px', borderRadius: '8px', minWidth: '350px', background:'white', opacity:'0.9' }}>
                                <h2 style={{
                                    textAlign: 'center',
                                    color: 'black',
                                    margin: '12px 0 0 0',
                                }}>
                                    Clôturer ce ticket?
                                </h2>
                                <div>
                                    <button className='primary_button' onClick={() => {closeChat()}}>Oui</button>
                                    <button className='danger_button' onClick={() => validOutChat(false)}>Non</button>
                                </div>
                            </div>
                        </div>

                    }
                </div>
            }
        </>
    )

}
export default ChatBoxPsy;
