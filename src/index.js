import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import Suggest from './leavemessage-baidusearch/Suggest';
import MessageBox from './leavemessage-baidusearch/MessageBox';
import Slider from './sliderpic/Slider';

import TodoModel from './todolist/TodoModel'
// import TodoApiModel from './todolist/TodoApiModel'
import TodoApp from './todolist/TodoApp';




// ReactDOM.render(<Suggest />, document.getElementById('root'));
/**
 * speed 图片的轮播速度
 * delay 延迟时间，多长时间轮播一次
 * pause 暂停，为true鼠标滑过暂停
 * auto  自动播放
 * dots  小点
 * arrows左右箭头导航
 */
// let IMAGE_DATA = [
//   {src: require('./sliderpic/1.jpg')},   // 打包后路径
//   {src: require('./sliderpic/2.jpg')},
//   {src: require('./sliderpic/3.jpg')}
// ]
// ReactDOM.render(<Slider items={IMAGE_DATA} speed={1.2} delay={2.1} pause={true} auto={true} dots={true} arrows={true}/>, document.getElementById('root'));

let model = new TodoModel();        // 持久化
// let model = new TodoApiModel();  // 接口
function render() {
  ReactDOM.render(<TodoApp model={model} />, document.getElementById('root'));
}
// 订阅
model.subscribe(render);
render();

