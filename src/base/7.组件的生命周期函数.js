import React, { Component } from 'react'; // 解构
import ReactDOM from 'react-dom';

/**
 * 生命周期
 * 代码的编写顺序
 * -> constructor()
 * -> componentWillMount()
 * -> render()
 * // 然后构造 DOM 元素插入页面
 * -> componentDidMount()
 * // ...
 * // 即将从页面中删除
 * -> componentWillUnmount()
 * // 从页面中删除
 */
class Counter extends Component {
  constructor() {
    super();
    this.state = { num: 0 };
  }

  // 组件将要被挂载
  componentWillMount() {
    console.log('1. componentWillMount组件将要被挂载');
  }

  handleClick = () => {
    // setState方法是异步的，所以不能在赋值之后立即获取最新的state值。可以在回调里拿到最新的值
    this.setState(
      {
        num: this.state.num + 1
      },
      () => {
        console.log(this.state.num);
      }
    );
    // console.log(this.state.num); // 上方为异步代码 所以先执行0
  };

  // newProos 新的属性对象
  // newState 新的状态对象
  // 组件是否更新
  shouldComponentUpdate(newProps, newState) {
    console.log('4. shouldComponentUpdate组件是否要进行更新');
    if (newState.num % 5 === 0) {
      return true;
    } else {
      return false;
    }
  }
  // 组件将要更新，更新之前
  componentWillUpdate() {
    console.log('5. componentWillUpdate组件将要更新');
  }
  componentDidUpdate() {
    console.log('6. componentDidUpdate组件更新完成');
  }

  render() {
    console.log('2. render组件挂载过程，把render元素渲染成真正的dom元素');
    return (
      <div style={{ border: '1px solid red', padding: 5 }}>
        <p>{this.state.num}</p>
        <button onClick={this.handleClick}>+</button>
        <SubCounter num={this.state.num} />
      </div>
    );
  }

  componentDidMount() {
    console.log('3. componentDidMount组件挂载完成');
  }
}

// 子计数器
class SubCounter extends Component {
  // 组件将要接收新的组件
  componentWillReceiveProps(newProps) {
    console.log('SubCounter omponentWillReceiveProps组件挂载完成');
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('SubCounter shouldComponentUpdate组件是否要进行更新');
    if (newProps.num % 3 === 0) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return (
      <div style={{ border: '1px solid blue', padding: 5 }}>
        <p>{this.props.num}</p>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));

// 我们一般会把组件的 state 的初始化工作放在 constructor 里面去做；
// 在 componentWillMount 进行组件的启动工作，例如 Ajax 数据拉取、定时器的启动；
// 组件从页面上销毁的时候，有时候需要一些数据的清理，例如定时器的清理，就会放在 componentWillUnmount 里面去做。
// 说一下本节没有提到的 componentDidMount 。一般来说，有些组件的启动工作是依赖 DOM 的，例如动画的启动，而 componentWillMount 的时候组件还没挂载完成，所以没法进行这些启动工作，这时候就可以把这些操作放在 componentDidMount 当中。
// shouldComponentUpdate(nextProps, nextState)：你可以通过这个方法控制组件是否重新渲染。如果返回 false 组件就不会重新渲染。这个生命周期在 React.js 性能优化上非常有用。
// componentWillReceiveProps(nextProps)：组件从父组件接收到新的 props 之前调用。
// componentWillUpdate()：组件开始重新渲染之前调用。
// componentDidUpdate()：组件重新渲染并且把更改变更到真实的 DOM 以后调用