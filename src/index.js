/*
 * @Author: caijw 
 * @Date: 2018-10-22 23:32:30 
 * @Last Modified by: caijw
 * @Last Modified time: 2018-11-04 23:50:30
 */
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

import 'weui';
import 'react-weui/build/packages/react-weui.css';

class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    )
  }
}
render(<Index/>, document.getElementById('root'));
