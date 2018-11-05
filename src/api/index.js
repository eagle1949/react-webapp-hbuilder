/*
 * @Author: Caijw
 * @Date: 2018-11-06 13:01:42
 * @LastEditors: Caijw
 * @LastEditTime: 2018-11-06 13:02:12
 * @Description:  这里是公共api接口
 */
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
axios.interceptors.response.use(function(res){
    return res.data;
});

//获取用户接口
export let getUsers = () =>{
    return axios.get('/users');
}

