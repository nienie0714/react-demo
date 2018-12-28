import React, { Component } from 'react';
import Message from './Message';

/**
 * 留言板列表
 */
export default class MessageList extends Component{
    render() {
        return (
            <ul className="list-group">
                {
                    this.props.messages.map((message, index)=>(
                      <Message key={index} message={message} index={index} removeMessage={this.props.removeMessage}/>
                    ))
                }
            </ul>
        )
    }
}