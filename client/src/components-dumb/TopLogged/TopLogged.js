import React, { Component } from 'react';
import Link from 'react-router/lib/Link';
import FlatButton from 'material-ui/FlatButton';


require('./top-logged.less')

class TopLogged extends Component {
    render() {
        return (
            <top-logged>
                <div className='center-flex space-between height-100p'>
                    <h5>Welcome</h5>
                    <div className='center-flex'>
                        <Link className='margin-rl-10' to="/">房屋预览</Link>
                        <Link className='margin-rl-10' to="/hotelDetail">房屋详情</Link>
                        <Link className='margin-rl-10' to="/approve">房屋审核</Link>
                    </div>
                    <FlatButton label="Sign Out" labelStyle={{ color: 'white' }} />
                </div>
            </top-logged>
        );
    }
}

export default TopLogged;