import React, { Component } from 'react';

/**
 * MessageList message
 */
export default class Message extends Component{
    constructor() {
        super();
        this.state = {}
    }

    render() {
      let {message, index} = this.props; // 解构出来
        return (
          <li key={index} className="list-group-item">{message.username}: {message.content}
            <button className="btn btn-danger btn-xs" onClick={()=>this.props.removeMessage(index)}>删除</button>
            <span style={{float: 'right'}}>{message.createAt.toLocaleString()}</span>
          </li>
        )
    }
}