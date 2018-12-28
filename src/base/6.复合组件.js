import React, { Component } from 'react'; // 解构
import ReactDOM from 'react-dom';

/**
 * 复合组件
 */
class Panel extends Component {
  constructor() {
    super();
    this.state = { color: 'black' };
  }
  render() {
    return (
      <div className="panel panel-default">
        <button
          onClick={() => {
            this.setState({ color: 'red' });
          }}
        >
          红
        </button>
        <button
          onClick={() => {
            this.setState({ color: 'green' });
          }}
        >
          绿
        </button>
        <PanelHead color={this.state.color} head={this.props.head} />
        <PanelBody color={this.state.color} body={this.props.body} />
        <PanelFooter color={this.state.color} footer={this.props.footer} />
      </div>
    );
  }
}
class PanelHead extends Component {
  render() {
    return (
      <div className="panel-heading" style={{ color: this.props.color }}>
        {this.props.head}
      </div>
    );
  }
}
class PanelBody extends Component {
  render() {
    return (
      <div className="panel-body" style={{ color: this.props.color }}>
        {this.props.body}
      </div>
    );
  }
}
class PanelFooter extends Component {
  render() {
    return (
      <div className="panel-footer" style={{ color: this.props.color }}>
        {this.props.footer}
      </div>
    );
  }
}
// 单向数据绑定  head只传给了Panel  没有传给PanelHead
ReactDOM.render(<Panel head="头" body="体" footer="尾" />, document.getElementById('root'));
