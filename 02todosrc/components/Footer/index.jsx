import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked)
  }
  clearAll=()=>{
    this.props.clearAllDone()
  }
  render() {
    const {todos}=this.props
    //计算已完成个数
    const doneCount=todos.reduce((pre,todo)=>{
      return pre + (todo.done ? 1:0)
    },0)
    //计算总数
    const total=todos.length
    return (
      <div>
        <div className="todo-footer">
          <label>
            <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total &&total !==0 ? true : false }/>
          </label>
          <span>
            <span>{doneCount}</span> / {total}
          </span>
          <button className="btn btn-danger" onClick={this.clearAll}>清除已完成任务</button>
        </div>
      </div>
    )
  }
}
