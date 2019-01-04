import React from 'react';
import $ from 'jquery';

/**
 * 监听  接口  Redux
 */
export default class TodoApiModel {
    constructor() {
      // this 指代TodoModel实例，model
      this.STORE_KEY = 'todos';
      this.todos = localStorage.getItem(this.STORE_KEY)?JSON.parse(localStorage.getItem(this.STORE_KEY)):[]; // 存放所有的todos
      // 注册监听器，当模型数据发生变化会调用这些监听函数
      this.listeners = [];
    }

    // 订阅 on(type, listener)； emit
    subscribe = (listener)=>{
      this.listeners.push(listener);
    };
    emit = ()=>{
      // 循环每个监听函数并监听他们
      this.listeners.forEach((listener)=>listener());
    };

    saveAndNotify(todos) {
      localStorage.setItem(this.STORE_KEY, JSON.stringify(todos));
      this.todos = todos;
      this.emit();
    }

    addTodo = (todo)=>{
      $.ajax({
        url: 'http://localhost:3000/todos',
        type: 'POST',
        data: todo,
        success(todos) { // 返回最新todo数组
          this.saveAndNotify(todos);
        }
      });
    };

    toggle = (id)=>{
      let todos = this.todos;
      todos = todos.map(todo=>{
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      this.saveAndNotify(todos);
    };

    toggleAll= (event)=>{
      let checked = event.target.checked;
      let todos = this.todos;
      todos = todos.map(todo=>{
        todo.completed = checked;
        return todo;
      });
      this.saveAndNotify(todos);
    };

    remove = (id)=>{
      let todos = this.todos;
      let index = todos.findIndex(todo=>todo.id === id);
      todos.splice(index, 1);
      this.saveAndNotify(todos);
    };

    clearCompleted = ()=> {
      let todos = this.todos;
      todos = todos.filter(todo=>!todo.completed);
      this.saveAndNotify(todos);
    };
}