import React, { Component } from "react";
import { Input } from "antd";


/**
 * 留言板 Form组件
 * 同级  状态提升, 共同数据提升到MessageBox里
 */
export default class MessageForm extends Component{
  handleSubmit = (event)=>{
      event.preventDefault();
      let username = this.username.value;
      let content = this.content.value;
      this.props.addMessage({username, content, createAt: new Date()})
  }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/*<Input placeholder="Basic usage"/>*/}
              <div className="form-group">
                <label htmlFor="username" className="control-babel">用户名</label>
                {/*this  当前组件实例   xxx 当input框有新dom元素或react元素转变为真正的dom元素之后会调用的方法  username作为this的自定义属性*/}
                <input ref={xxx=>this.username=xxx} type="text" className="form-control"/>
              </div>
              <div className="form-group">
                <label htmlFor="content" className="control-babel">留言</label>
                <input ref={xxx=>this.content=xxx} type="text" className="form-control"/>
              </div>
              <div className="form-group">
                <button className="btn btn-primary">发表</button>
              </div>
            </form>
        )
    }
}