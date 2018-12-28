import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// noneed? npm install prop-types -S
import PropTypes from 'prop-types';

/** 双向数据绑定
 * 受控组件(输入类组件)：受状态控制   input  textarea checkbox
 * 非受控组件：
 */

class Input extends Component {
  constructor() {
    super();
    this.state = { val: '' };
  }

  handleChange = event => {
    let val = event.target.value;
    this.setState({ val });
  };

  render() {
    return (
      <div>
        <p>{this.state.val}</p>
        <input type="text" onChange={this.handleChange} value={this.state.val} />
      </div>
    );
  }
}

ReactDOM.render(<Input />, document.getElementById('root'));
