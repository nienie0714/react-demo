import React from 'react';
import ReactDOM from 'react-dom';
import Suggest from "./leavemessage-baidusearch/Suggest";
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css';
import MessageBox from './leavemessage-baidusearch/MessageBox';
import Slider from './sliderpic/Slider';

let IMAGE_DATA = [
  {src: require('./sliderpic/1.jpg')},   // 打包后路径
  {src: require('./sliderpic/2.jpg')},
  {src: require('./sliderpic/3.jpg')}
]

/**
 * speed 图片的轮播速度
 * delay 延迟时间，多长时间轮播一次
 * pause 暂停，为true鼠标滑过暂停
 * auto  自动播放
 * dots  小点
 * arrows左右箭头导航
 */
ReactDOM.render(<Slider items={IMAGE_DATA} speed={1.2} delay={2.1} pause={true} auto={true} dots={true} arrows={true}/>, document.getElementById('root'));
