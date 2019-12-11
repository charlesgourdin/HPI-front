import React, { Component } from 'react'
import ConversWindow from './ConversWindow';
import PostMessage from './PostMessage';

class ChatBox extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            username: null,
        }
    }

    setUserName = (e) =>
    {
        this.setState({
            username: e.target.value,
        });
        //console.log(JSON.stringify(this.state));
    }

    render()
    {
        return (
            <div className='container'>
                <form>
                    <input type="text" name="username" placeholder="User name" onChange={this.setUserName} />
                </form>
                <ConversWindow username={this.state.username} />
                <PostMessage username={this.state.username} />

            </div>
        )
    }
}
export default ChatBox;