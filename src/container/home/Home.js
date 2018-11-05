/*
 * @Author: caijw 
 * @Date: 2018-10-23 00:23:17 
 * @Last Modified by: caijw
 * @Last Modified time: 2018-11-05 00:20:08
 */
import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchTweets } from '../../store/action/home';


class Home extends Component {
  componentWillMount() {
    //因为在此进行了订阅，所以以后如果仓库中的状态发生改变的话就会让组件重新渲染
    console.log(this.props.onFetchTweetsClick());
  }
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}


//把state传递到props里面
// function mapStateToProps(state) {
//   return {
//     tweets: state.home.tweets,
//   }
// }

// //把方法传递到props里面
function mapDispatchToProps(dispatch) {
  return {
    //获取列表
    onFetchTweetsClick: () => {
      dispatch(fetchTweets());
    }
  }
}
//把组件和store关联在一起
export default connect((state)=>{return {...state}}, mapDispatchToProps)(Home);