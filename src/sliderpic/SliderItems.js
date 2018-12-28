import React, { Component } from 'react';

/**
 * item
 */
export default class SliderItems extends Component{
    constructor() {
        super();
        this.state = {}
    }

    render() {
      let style = {
        width: (this.props.items.length+1)*810,
        left: this.props.index*(-810),
        transitionDuration: this.props.speed+'s'
      }
        return (
          <ul className="sliders" style={style}>
            {
              this.props.items.map((item, index)=>(
                <li key={index} className="slider"><img src={item.src}/></li>
              ))
            }
            {/*无缝轮播   1231*/}
            <li key={this.props.items.length} className="slider"><img src={this.props.items[0].src}/></li>
          </ul>
        )
    }
}