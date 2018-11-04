/*
 * @Author: caijw 
 * @Date: 2018-11-04 23:37:13 
 * @Last Modified by: caijw
 * @Last Modified time: 2018-11-05 00:10:32
 */
export default function reducer(state={
  tweets: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {
//判断类型做出对应state的改变
switch (action.type){
  case "FETCH_TWEETS": {
    return {...state, fetching: true}
      }
      case "FETCH_TWEETS_REJECTED": {
    return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_TWEETS_FULFILLED": {
    return {
      ...state,
      fetching: false,
      fetched: true,
      tweets: action.payload
    }
  }
}
return state;
}