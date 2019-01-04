import React, { Component } from 'react';
import * as filterTypes from './filter-types'

/**
 * footer
 */
export default class TodoFooter extends Component{
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
          <div className="row">
            <div className="col-md-4" style={{height:'40px', lineHeight:'40px'}}>

              {
                this.props.activeTodoCount>0?
                  <a href="#">待办事项数量
                    <span className="badge">{this.props.activeTodoCount}</span>
                  </a>
                  : null
              }
            </div>
            <div className="col-md-4">
              <button className={`btn ${this.props.filterType === filterTypes.ALL ? 'btn-success':'btn-default'}`} onClick={()=>this.props.changeFilterType(filterTypes.ALL)}>全部</button>
              <button className={`btn ${this.props.filterType === filterTypes.ACTIVE ? 'btn-success':'btn-default'}`} onClick={()=>this.props.changeFilterType(filterTypes.ACTIVE)}>未完成</button>
              <button className={`btn ${this.props.filterType === filterTypes.COMPLETED ? 'btn-success':'btn-default'}`} onClick={()=>this.props.changeFilterType(filterTypes.COMPLETED)}>已完成</button>
            </div>
            <div className="col-md-4">
              {
                this.props.completedTodoCount>0?
                  <button className="btn btn-danger" style={{float: 'right'}}
                          onClick={this.props.clearCompleted}>删除已完成</button>
                  : null
              }
            </div>
          </div>
        )
    }
}