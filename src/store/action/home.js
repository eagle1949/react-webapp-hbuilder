/*
 * @Author: caijw 
 * @Date: 2018-11-04 23:52:09 
 * @Last Modified by: caijw
 * @Last Modified time: 2018-11-05 00:16:19
 */

import axios from 'axios';
//dispatch会根据类型调用reducers里面的函数，然后reducers改变state，state改变，视图跟着改变
import * as types from '../action-types';

export function fetchTweets() {
  return function(dispatch) {
    axios.get("http://localhost:3000/users")
      .then((response) => {
        dispatch({type: types.FETCH_TWEETS_FULFILLED, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: types.FETCH_TWEETS_REJECTED, payload: err})
      })
  }
}
