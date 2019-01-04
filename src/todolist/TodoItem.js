import React, { Component } from 'react';

/**
 * item
 */
export default class TodoItem extends Component{
    constructor() {
      super();
      this.state = {}
    }

    render() {
      let todo = this.props.todo;
        return (
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-1">
                  {/*非受控组件不需要onChange state*/}
                  <input type="checkbox" checked={todo.completed} onChange={()=>this.props.toggle(todo.id)}/>
                </div>
                <div className="col-md-10" style={{textDecoration: todo.completed?'line-through':''}}>
                  {todo.title}
                </div>
                <div className="col-md-1">
                  <button className="btn btn-danger btn-s" onClick={()=>this.props.remove(todo.id)}>X</button>
                </div>
              </div>
            </li>
        )
    }
}