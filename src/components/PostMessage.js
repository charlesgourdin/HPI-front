import React, { useContext, useState } from 'react'
import { SocketContext } from '../providers/SocketContext'

const PostMessage = () => {

    const { sendMessage } = useContext(SocketContext)
    const [msg, changeMsg] = useState('')



    return (
        <div className='w-100 px-4 pb-2 mt-3' style={{
            height: '25%',
            // border:'1px black solid'
        }}>
            <div className='w-100 h-100 d-flex flex-column justify-content-around align-items-end'>
                <form>

                    <input
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
                    <button
                        className='primary_button'
                        type="submit"
                        onClick={(event) => {
                            event.preventDefault()
                            sendMessage(msg)
                            changeMsg('')
                        }}>
                        CONFIRMER
                    </button>
                </form>

            </div >



        </div >
    )
}

export default PostMessage;