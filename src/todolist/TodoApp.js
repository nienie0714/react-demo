import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import './panel.css'
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import * as filterTypes from './filter-types'

/**
 * TodoList
 */
export default class TodoApp extends Component{
    constructor(props) {
        super(props);
        this.state = {
          // todos: [],  //- 初始默认状态
          // todos: [{id:Math.random(), title:'dsdf', completed:false}, {id:Math.random(), title:'aaaa', completed:true}],  // 初始默认状态
          filterType: filterTypes.ALL
        }
    }

    changeFilterType = (filterType)=>{
      this.setState({filterType})
    };

    render() {
      let todos = this.props.model.todos;
      // reduce 把数组变成一个唯一的值  count初始值0
      let activeTodoCount = todos.reduce((count, todo)=>count+(todo.completed?0:1), 0);
      let completedTodoCount = todos.length - activeTodoCount;
      let showTodos = todos.filter((todo)=>{
        switch (this.state.filterType) {
          case filterTypes.ACTIVE:
            return !todo.completed;
          case filterTypes.COMPLETED:
            return todo.completed;
          default:
            return true;
        }
      });
      let main = (
        <ul className="list-group">
          {
            todos.length>0?
              <li className="list-group-item">
              <input type="checkbox" checked={activeTodoCount===0} onChange={this.props.model.toggleAll}/>&nbsp;&nbsp;&nbsp;&nbsp;{activeTodoCount===0?'全部取消':'全部选中'}
            </li> : null
          }
          {
            showTodos.map((todo, index)=>(
              <TodoItem key={index} todo={todo} toggle={this.props.model.toggle} remove={this.props.model.remove}/>
            ))
          }
        </ul>
      );

      return (
        <div className="container" style={{marginTop:'20px'}}>
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <TodoHeader addTodo={this.props.model.addTodo}/>
                </div>
                <div className="panel-body">
                  {main}
                </div>
                <div className="panel-footer">
                  <TodoFooter activeTodoCount={activeTodoCount} filterType={this.state.filterType} changeFilterType={this.changeFilterType} clearCompleted={this.props.model.clearCompleted} completedTodoCount={completedTodoCount}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}


// addTodo = (todo)=>{
// // 属性赋值合并 1todo={id:Date.now(), completed: false, ...1todo}
//   todo = Object.assign({}, {id:Date.now(), completed: false}, todo);
//   let todos = this.state.todos;
//   todos.push(todo);
//   this.setState({
//     todos
//   })
// };

// toggle = (id)=>{
//   let todos = this.state.todos;
//   todos = todos.map(todo=>{
//     if(todo.id === id) {
//       todo.completed = !todo.completed;
//     }
//     return todo;
//   });
//   this.setState({
//     todos
//   })
// };

// remove = (id)=>{
//   console.log('remove');
//   let todos = this.state.todos;
//   let index = todos.findIndex(todo=>todo.id === id);
//   todos.splice(index, 1);
//   this.setState({
//     todos
//   })
// };

// toggleAll= (event)=>{
//   let checked = event.target.checked;
//   let todos = this.state.todos;
//   todos = todos.map(todo=>{
//     todo.completed = checked;
//     return todo;
//   });
//   this.setState({
//     todos
//   })
// };

// clearCompleted = ()=> {
//   console.log('clearCompleted');
//   let todos = this.state.todos;
//   todos = todos.filter(todo=>!todo.completed);
//   this.setState({todos})
// };