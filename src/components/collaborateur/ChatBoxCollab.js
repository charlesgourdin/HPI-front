import React from 'react'
import ConversWindow from '../ConversWindow';
import PostMessage from '../PostMessage';

const ChatBoxCollab = () => {


    return (
        <>
            <div className='d-flex flex-column justify-content-between align-items-center w-100 h-100 z-depth-2' style={{
                borderRadius: '10px'
            }}>
                <button className='danger_button z-depth-1' style={{ width: '200px', alignSelf: 'flex-start', marginBottom: '0' }}>Terminer la discussion</button>
                <div style={{ width: '100%' }}><hr /></div>
                <ConversWindow />
                <PostMessage />
            </div>
        </>
    )

}
export default ChatBoxCollab;
