import React, { Component } from 'react';
import './header.less';

import {withRouter} from 'react-router-dom';

class Header extends Component {
    //返回上一级
    back = () =>{
        this.props.history.go(-1);
    }
    componentWillMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div className="header">
                <span class="back" onClick={this.back}>返回</span> {this.props.title}
            </div>
        )
    }
}
export default withRouter(Header);