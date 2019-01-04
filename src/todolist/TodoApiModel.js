import React from 'react';
import $ from 'jquery';

/**
 * 监听  接口  Redux
 */
export default class TodoApiModel {
  constructor() {
    this.todos = []; // 存放所有的todos
    // 注册监听器，当模型数据发生变化会调用这些监听函数
    this.listeners = [];
    this.init();
  }

  init() {
    $.ajax({
      url: 'http://localhost:3000/todos',
      type: 'GET',
      success(todos) { // 返回最新todo数组
        this.saveAndNotify(todos);
      }
    });
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
    $.ajax({
      url: 'http://localhost:3000/todos/toggle',
      type: 'GET',
      data: {id},
      success(todos) { // 返回最新todo数组
        this.saveAndNotify(todos);
      }
    });
  };

  toggleAll= (event)=>{
    let checked = event.target.checked;
    $.ajax({
      url: 'http://localhost:3000/todos/toggleAll',
      type: 'GET',
      data: {checked},
      success(todos) { // 返回最新todo数组
        this.saveAndNotify(todos);
      }
    });
  };

  remove = (id)=>{
    $.ajax({
      url: 'http://localhost:3000/todos',
      type: 'DELETE',
      data: {id},
      success(todos) { // 返回最新todo数组
        this.saveAndNotify(todos);
      }
    });
  };

  clearCompleted = ()=> {
    $.ajax({
      url: 'http://localhost:3000/todos/clearCompleted',
      type: 'GET',
      success(todos) { // 返回最新todo数组
        this.saveAndNotify(todos);
      }
    });
  };
}