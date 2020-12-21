import React,{Component} from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component{
  state={
    todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:true},
      {id:'003',name:'打代码',done:true}
    ]
  }
  //用于添加一个todo
  addTodo =(todoObj)=>{
    const{todos}=this.state
    const newTodos=[todoObj,...todos]
    this.setState({todos:newTodos})
  }
  updateTodo=(id,done)=>{
    const{todos}=this.state
    //匹配处理数据
    const newTodos=todos.map((todoObj)=>{
      if(todoObj.id===id ) return{...todoObj,done:done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }
  deleteTodo=(id)=>{
    const{todos}=this.state
    const newTodos=todos.filter((todoObj)=>{
      return todoObj.id!==id//返回id不等于点击的id 等于id的不返回
    })
    this.setState({todos:newTodos})
  }
  //全选
  checkAllTodo=(done)=>{
    //获取原来的todos
    const{todos}=this.state
    const newTodos=todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({todos:newTodos})
  }
  //清除所有已完成
  clearAllDone=()=>{
    const {todos}=this.state
    const newTodos =todos.filter((todoObj)=>{
      return !todoObj.done 
    })
    this.setState({todos:newTodos})
  }
   render(){
     const{todos}=this.state
     return(
       <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
          </div>
        </div>
       </div>
     )
   }
}
