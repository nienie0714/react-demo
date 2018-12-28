import React, { Component } from 'react';
import jsonp from 'jsonp';

/**
 * 1. 给Input绑定值改变事件，当值发生改变的时候调用对应的监听函数
 * 2. 获取到input框中的值，然后调用百度接口获取数据并修改状态对象中word的值
 *
 * error: 非受控组件变为受控组件
 */
export default class Suggest extends Component{
    constructor() {
        super();
        this.state = {
            words: [],
            index:-1  // 当前选中的索引
        }
    }

    handleChange = (event)=> {
        let wd = event.target.value;
        // 缓存用户的关键字
        this.wd = wd;  // this. 当前实例的私有属性
        jsonp(`http://www.baidu.com/su?wd=${wd}`, {           // 搜索 /s?wd=a
            param: 'cb'
        }, (err, data)=> {
            this.setState({words: data.s})
        });
    };

    handleKeyDown = (event) => {   // down不能获取最新输入的字符
        let code = event.keyCode;
        // 上下键
        if(code === 38 || code === 40) {
            let index = this.state.index;
            if(code === 38) {
                index--;
                if(index === -2) {
                    index = this.state.words.length-1;
                }
            } else if(code === 40) {
                index++;
                if(index === this.state.words.length) {
                    index = -1;
                }
            }
            this.setState({index})
        } else if(code === 13) {
            window.location.href = `http://www.baidu.com/s?wd=${event.target.value}`
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <input type="text" value={this.state.index === -1 ? this.wd :this.state.words[this.state.index]} className="form-control" onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {
                                        this.state.words.map((word, index)=>(  // 使用（）
                                            <li key={index} className={"list-group-item " + (index===this.state.index?'active':'')}>{word}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}