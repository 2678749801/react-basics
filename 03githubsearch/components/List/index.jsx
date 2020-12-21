import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {users,isFirst,isLoading,err}=this.props
    return (
      <div>
          <div className="row">
            {
              isFirst ? <h2>欢迎使用 输入关键字 随后进行搜索</h2> :
              isLoading ? <h2>Loading..........</h2> :
              err ? <h2>{err.message}</h2> :
              users.map((userObj)=>{
                return (
                  <div className="card" key={userObj.id}>
                <a href="https://github.com/reactjs" target="blank">
                  <img src={userObj.avatar_url} style={{width: '100px'}} alt=""/>
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
                )
              })
            }
          </div>
      </div>
    )
  }
}
