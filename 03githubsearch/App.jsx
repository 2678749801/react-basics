import React,{Component} from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'
export default class App extends Component{
  state = {
    users:[],
    isFirst:true,//是否第一次打开页面
    isLoading:false,//标识是否处于加载中
    err:'',//请求相关的错误信息
  }
  updateAppState =(stateObj)=>{
    this.setState(stateObj)
  }
   render(){
     return(
       <div>
        <div className="container">
            <Search updateAppState={this.updateAppState}/>
            <List {...this.state}/>
          </div>
       </div>
     )
   }
}
