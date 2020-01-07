import React, { Component } from 'react'
import ConversWindow from './ConversWindow';
import PostMessage from './PostMessage';
import {
    MDBCol,
    MDBRow
} from 'mdbreact';

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='d-flex h-100 z-depth-2' style={{
                borderRadius: '20px'
            }}>
                <MDBRow className='w-100'>
                    <MDBCol >
                        <ConversWindow username={this.state.username} />
                        <PostMessage username={this.state.username} />
                    </MDBCol>
                </MDBRow>
            </div>
        )
    }
}
export default ChatBox;
