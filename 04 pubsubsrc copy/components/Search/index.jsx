import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
  search=()=>{
    //获取用户输入
    //发送网络请求
    const {keyWordElement:{value:keyWord}}=this
    PubSub.publish('atguigu',{isFirst:false,isLoading:true}) 
    axios.get(`http://api.github.com/search/users?q=${keyWord}`).then(
      response=>{
        PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
      },
      error=>{
        PubSub.publish('atguigu',{isLoading:false,err:error})       
      }
    )
    
  }
  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input ref={c=> this.keyWordElement=c} type="text" placeholder="enter the name you search"/>&nbsp;<button onClick={this.search}>Search</button>
          </div>
        </section>
      </div>
    )
  }
}
