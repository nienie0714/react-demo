import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 计时器
// 函数方式声明的组件是静态的，是不动的
let Clock = () => {
  return <h1>{new Date().toLocaleString()}</h1>; // msg  / id
};

// 通过类声明组件,类需要继承Component
class ClockD extends Component {
  constructor() {
    super();
    // 状态可以用来存放组件内部一些变化的值。状态只能由内部初始化，内部改变
    this.state = { time: new Date().toLocaleString() };
  }

  // 声明周期函数, 组件挂载完成
  componentDidMount() {
    window.setInterval(() => {
      // 状态更新，还会再次调用render方法进行重新渲染
      this.setState({ time: new Date().toLocaleString() });
    }, 1000);
  }

  // 该组件将要如何渲染，一定要返回一个React元素，而且只能返回一个React元素
  render() {
    return <h1>{this.state.time}</h1>;
  }
}

// 组件的渲染过程：1.封装props对象 2.调用组件函数，得到返回的React元素 3.ReactDOM把React元素转成真实的DOM元素并且插入到目标容器内部
ReactDOM.render(<ClockD />, document.getElementById('root'));
