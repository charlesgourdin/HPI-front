import React, { Component } from 'react'
import ConversWindow from '../components/ConversWindow';
import PostMessage from '../components/PostMessage';
import './ChatBox.css'

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='chatBoxcontainer'>
                <div className='chatWindow'>
                    <ConversWindow username={this.state.username} />
                    <PostMessage username={this.state.username} />
                </div>
            </div>
        )
    }
}
export default ChatBox;