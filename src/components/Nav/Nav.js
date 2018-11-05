/*
 * @Author: caijw 
 * @Date: 2018-11-04 21:04:23 
 * @Last Modified by:   caijw 
 * @Last Modified time: 2018-11-04 21:04:23 
 * 导航栏
 */

import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import './nav.less';
// NavLink一般情况下 都需要自己重新封装
export default class Nav extends React.Component {
  render() {
    return (
      <div className="navbar">
          <ul className="navbar-nav nav">
            <li><NavLink to="/" exact={true}>首页</NavLink></li>
            <li><NavLink to="/profile">个人中心</NavLink></li>
            <li><NavLink to="/user">用户</NavLink></li>
          </ul>
      </div>
    )
  }
}