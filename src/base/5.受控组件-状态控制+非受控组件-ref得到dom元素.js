import React, { Component } from 'react'; // 解构
import ReactDOM from 'react-dom';

/**
 * 1. 受控组件
 */
class Sum extends Component {
  constructor() {
    super();
    this.state = { a: 0, b: 0, res: 0 };
  }

  handleChangeA = event => {
    this.setState({ a: parseInt(event.target.value), res: parseInt(event.target.value) + this.state.b });
  };
  handleChangeB = event => {
    this.setState({ b: parseInt(event.target.value), res: parseInt(event.target.value) + this.state.a });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChangeA} value={this.state.a} /> +
        <input type="text" onChange={this.handleChangeB} value={this.state.b} /> =
        <input type="text" value={this.state.res} />
      </div>
    );
  }
}
/**
 * 2. 非受控组件
 */
class Sum2 extends Component {
  // handleChange = event => {
  //   let a = parseInt(this.refs.a.value) || 0;
  //   let b = parseInt(this.refs.b.value) || 0;
  //   this.refs.c.value = a + b;
  // };

  // render() {
  //   // 不需要定义状态
  //   return (
  //     <div onChange={this.handleChange}>
  //       <input type="text" ref="a" /> +
  //       <input type="text" ref="b" /> =
  //       <input type="text" ref="c" />
  //     </div>
  //   );
  // }

  handleChange = event => {
    let a = parseInt(this.a.value || 0);
    let b = parseInt(this.b.value || 0);
    this.c.value = a + b;
  };
  render() {
    // ref等于一个函数，表示当元素被挂载到页面中之后会立即调用此函数，并传入渲染后的DOM元素
    return (
      <div onChange={this.handleChange}>
        {/* //ref得到真正的dom元素    this指 当前实例：Sum2   给当前实例上挂载一个a,值就是ref */}
        <input type="text" ref={ref => (this.a = ref)} /> +
        <input type="text" ref={ref => (this.b = ref)} /> =
        <input type="text" ref={ref => (this.c = ref)} />
      </div>
    );
  }
}

ReactDOM.render(<Sum2 />, document.getElementById('root'));
