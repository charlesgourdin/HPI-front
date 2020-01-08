import React, { Component } from 'react'
import ConversWindow from './ConversWindow';
import PostMessage from './PostMessage';
import {
    MDBBtn
} from 'mdbreact';

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='d-flex flex-column justify-content-between align-items-center w-100 h-100 z-depth-2' style={{
                borderRadius: '20px'
            }}>
                <div className='w-100 d-flex justify-content-end' style={{
                    backgroundColor: '#082B2B',
                    height: '60px',
                    // borderRadius: '20px 20px 0 0'
                }}>
                    <MDBBtn size='sm' color="danger"  style={{
                    }}>
                        Terminer la conversation
                    </MDBBtn>
                </div>
                <ConversWindow username={this.state.username} />
                <PostMessage username={this.state.username} />
            </div>
        )
    }
}
export default ChatBox;
