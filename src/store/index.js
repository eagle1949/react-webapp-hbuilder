/*
 * @Author: caijw 
 * @Date: 2018-11-04 23:33:44 
 * @Last Modified by: caijw
 * @Last Modified time: 2018-11-05 00:03:35
 */
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from 'redux-promise';
import reducer from "./reducers";
//一些常用的中间件
const middleware = [thunk, logger, promise];
let store = createStore(reducer, applyMiddleware(...middleware));
window.store = store;
export default store;