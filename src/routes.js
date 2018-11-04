/*
 * @Author: caijw 
 * @Date: 2018-10-22 23:32:30 
 * @Last Modified by: caijw
 * @Last Modified time: 2018-11-04 23:31:46
 */
import React from 'react';
import { Router, Route,Switch,Redirect } from 'react-router-dom'
import CreateHistory  from 'history/createHashHistory';
// import LazyHome from './container/home/Home';
// import LazyProfile from './container/profile/Profile';
import Bundle from "./components/Bundle";
import App from './container/app/App';

// 按需加载
let LazyHome =(props) => (<Bundle {...props} load={()=>import('./container/home/Home')}/>)
let LazyProfile =(props) => (<Bundle {...props} load={()=>import('./container/profile/Profile')}/>)

let history = CreateHistory();
export default class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <App>
            <Switch>
                <Route path='/' exact={true} component={LazyHome}></Route>
                <Route path='/profile' component={LazyProfile}></Route>
                <Redirect to="/"></Redirect>
            </Switch>
        </App>
      </Router>
    )
  }
}
