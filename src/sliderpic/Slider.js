import React, { Component } from 'react';
import './slider.css'
import SliderItems from './SliderItems';
import SliderArrow from './SliderArrow';
import SliderDots from './SliderDots';

/**
 * 轮播图
 */
export default class Slider extends Component{
  constructor() {
    super();
    this.state = {
      index: 0  // 通过修改此index就可以改ul
    }
  }

  // 传入步长，得到新index
  turn = (step)=>{
    let index = this.state.index + step;
    if(index < 0) {
      this.$slider.style.transitionDuration = '0s';
      this.$slider.style.left = -810*this.props.items.length+'px';

      setTimeout(()=>{
        index = this.props.items.length-1;
        this.$slider.style.transitionDuration = this.props.speed+'s';
        this.setState({index});
      },0);
      return;
    }
    if(index > this.props.items.length) {
      this.$slider.style.transitionDuration = '0s';
      this.$slider.style.left = 0;
      // 异步 否则会和上面合并
      setTimeout(()=>{
       index = 1;
       this.$slider.style.transitionDuration = this.props.speed+'s';
       this.setState({index});
      },0);
      return;
    }
    this.setState({index})
  }
  // 启动自动轮播
  go = ()=>{
    this.$timer = setInterval(()=>{
      this.turn(1);
    }, this.props.delay*1000)
  }

  componentDidMount() {
    this.$slider = document.querySelector('.sliders');
    // 自动开启轮播
    if(this.props.auto) {
      this.go();
    }
  }

  render() {
    return (
      <div className="slider-wrapper" onMouseOver={()=>clearInterval(this.$timer)} onMouseOut={()=>this.go()}>
        <SliderItems items={this.props.items} index={this.state.index} speed={this.props.speed}/>
        <SliderArrow turn={this.turn}/>
        <SliderDots items={this.props.items}  turn={this.turn} index={this.state.index}/>
      </div>
    )
  }
}