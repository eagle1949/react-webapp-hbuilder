/*
 * @Author: caijw 
 * @Date: 2018-10-23 00:23:25 
 * @Last Modified by:   caijw 
 * @Last Modified time: 2018-10-23 00:23:25 
 */

import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Button } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';


export default class User extends Component {
    render() {
        return (
            <div>
                <Link to='/login'>登陆</Link>
            </div>
        )
    }
}
