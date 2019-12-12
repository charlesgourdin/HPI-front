import React, { Component } from 'react'
import ConversWindow from './ConversWindow';
import PostMessage from './PostMessage';

class ChatBox extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
        }
    }

    render()
    {
        return (
            <div className='container'>
                <ConversWindow username={this.state.username} />
                <PostMessage username={this.state.username} />
            </div>
        )
    }
}
export default ChatBox;