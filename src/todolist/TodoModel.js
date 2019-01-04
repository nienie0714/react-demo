import React from 'react';

/**
 * 监听  持久化  Redux
 */
export default class TodoModel {
    constructor() {
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
      // 属性赋值合并 1todo={id:Date.now(), completed: false, ...1todo}
      todo = Object.assign({}, {id:Date.now(), completed: false}, todo);
      let todos = this.todos;
      todos.push(todo);
      this.saveAndNotify(todos);
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