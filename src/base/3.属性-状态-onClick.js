import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// noneed? npm install prop-types -S
import PropTypes from 'prop-types';

class Person extends Component {
  // 默认属性对象
  static defaultProps = {
    name: '无名'
  };
  // 组件的属性有类型和是否必填
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  };

  constructor() {
    super();
    this.state = { happy: true };
  }

  handleClick = () => {
    this.setState({ happy: !this.state.happy });
  };

  render() {
    let heart = this.state.happy ? '开心' : '难过';
    return (
      <div>
        <p>姓名：{this.props.name}</p>
        <p>心情：{heart}</p>
        {/* this.handleClick.bind(this)  非箭头函数 */}
        <button onClick={this.handleClick}>改变</button>
      </div>
    );
  }
}

ReactDOM.render(<Person name="sdfsdf" age={100} />, document.getElementById('root'));
