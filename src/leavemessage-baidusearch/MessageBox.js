import React, { Component } from 'react';
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import './MessageBox.css'

/**
 * 留言板
 * MessageBox > MessageList(message) + MessageForm
 */
export default class MessageBox extends Component{
    constructor() {
        super();
        this.state = {
            messages: [] // 消息的数组
        }
    }

    addMessage = (message)=>{
      // 状态对象每次都要生成一个新对象，老对象解构生成新数组
      let messages = [...this.state.messages, message];
      this.setState({
        messages
      })
    };
    removeMessage = (index)=>{
      this.state.messages.splice(index, 1);
      this.setState({
        messages:[...this.state.messages]
      })
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                              <h2 className="text-center">留言板</h2>
                            </div>
                            <div className="panel-body">
                              <MessageForm addMessage={this.addMessage}/>
                        </div>
                            <div className="panel-footer">
                              <MessageList messages={this.state.messages} removeMessage={this.removeMessage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}