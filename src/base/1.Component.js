import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// 使用 JSX 描述 UI 信息
// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <h1>React 小书</h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Header />, document.getElementById('root'));

class LikeButton extends Component {
  // 默认值
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  };

  constructor() {
    super();
    this.state = { isLiked: false };
  }

  handleClickOnLikeButton() {
    // setState 方法由父类 Component 所提供。当我们调用这个函数的时候，React.js 会更新组件的状态 state ，并且重新调用 render 方法，然后再把 render 方法所渲染的最新的内容显示到页面上。
    //setState 它接受一个对象或者函数作为参数。
    this.setState({
      isLiked: !this.state.isLiked
    });
  }

  render() {
    // const likedText = this.props.likedText || '取消';
    // const unlikedText = this.props.unlikedText || '点赞';

    ////////////////////// props 一旦传入进来就不能改变
    const wordings = this.props.wordings || {
      likedText: '取消',
      unlikedText: '点赞'
    };
    return <button onClick={this.handleClickOnLikeButton.bind(this)}>{this.state.isLiked ? wordings.likedText : wordings.unlikedText}✌✌✌✌</button>;
  }
}

class Index extends Component {
  render() {
    return (
      <div>
        {/* 所有的属性都会作为 props 对象的键值 */}
        <LikeButton wordings={{ likedText: '已赞', unlikedText: '赞' }} />
      </div>
    );
  }
}

let Message = props => {
  // ({msg, id}) => { 解构
  console.log(props); // {msg: "h3llo", id: "5"}
  return <h1 style={props.style}>{props.msg}</h1>; // msg  / id
};
// 组件的渲染过程：1.封装props对象 2.调用组件函数，得到返回的React元素 3.ReactDOM把React元素转成真实的DOM元素并且插入到目标容器内部
ReactDOM.render(<Message msg="h3llo" id="5" style={{ color: 'red' }} />, document.getElementById('root'));
