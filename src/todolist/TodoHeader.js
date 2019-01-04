import React, { Component } from 'react';

/**
 * 头部：搜索框
 */
const ENTER_KEY = 13;
export default class TodoHeader extends Component{
  constructor() {
      super();
      this.state = {}
  }

  handleKeyDown= (event)=>{
    // event.preventDefault();
    if(event.keyCode === ENTER_KEY && event.target.value !== '') {
      let title = event.target.value;
      this.props.addTodo({title});
      event.target.value = '';
    }
  };

  render() {
    return (
      <div className="form-group">
        <input type="text" className="form-control" autoFocus={true} onKeyDown={this.handleKeyDown}/>
      </div>
    )
  }
}