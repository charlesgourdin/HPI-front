import React, { useContext, useState } from 'react'
import { SocketContext } from '../providers/SocketContext'
import { MDBBtn } from 'mdbreact'

const PostMessage = () => {

    const { sendMessage } = useContext(SocketContext)
    const [msg, changeMsg] = useState('')



    return (
        <div className='w-100 px-4 pb-2 mt-3' style={{
            height: '25%',
            // border:'1px black solid'
        }}>
            <div className='w-100 h-100 d-flex flex-column justify-content-around align-items-end'>
                <textarea
                    className='h-75 rounded-lg w-100'
                    style={{
                        border: '1px rgb(146, 146, 146) solid',
                        fontFamily: `'Roboto', sans-serif`,
                        padding: '12px'
                    }}
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Ecrivez votre texte ici"
                    onChange={e => changeMsg(e.target.value)}
                    value={msg}
                />
                {/* <MDBBtn
                    className=''
                    color="blue accent-4"
                    style={{ 
                        borderRadius: '10em'
                    }}
                    onClick={() => {
                        sendMessage(msg)
                        changeMsg('')
                    }}>Envoyer</MDBBtn> */}
                    <button className='primary_button'>
                        CONFIRMER
                    </button>
            </div >



        </div >
    )
}

export default PostMessage;