import React, { Component } from 'react';

/**
 * 左右箭头
 */
export default class SliderArrow extends Component{
    render() {
        return (
          <div className="slider-arrows">
            <span onClick={()=>this.props.turn(-1)} className="arrow arrow-left">&lt;</span>
            <span onClick={()=>this.props.turn(1)} className="arrow arrow-right">&gt;</span>
          </div>
        )
    }
}