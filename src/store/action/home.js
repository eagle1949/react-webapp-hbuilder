/*
 * @Author: caijw 
 * @Date: 2018-11-04 23:52:09 
 * @Last Modified by: caijw
 * @Last Modified time: 2018-11-05 00:16:19
 */
//dispatch会根据类型调用reducers里面的函数，然后reducers改变state，state改变，视图跟着改变
import * as types from '../action-types';
import { getUsers } from '../../api/index';

export function fetchTweets() {
  return function(dispatch) {
    //先获取数据显示加载内容
    dispatch({type: types.FETCH_TWEETS});
    dispatch({type: types.FETCH_TWEETS_FULFILLED, payload: getUsers()});
  }
}
