import React, { Component } from 'react';
import Link from 'react-router/lib/Link';
import FlatButton from 'material-ui/FlatButton';
import { showToast } from 'actions/toast.action';
import storage from 'store2';
import store from 'store';

require('./top-logged.less')

class TopLogged extends Component {

    goToDetail = () => {
        const hotelId = storage.session('hotel.id');
        if (!hotelId) {
            store.dispatch(showToast({
                className: 'error-toast',
                message: '该酒店详情不存在，请从列表中选取'
            }))
        }
    }

    render() {
        return (
            <top-logged>
                <div className='center-flex space-between height-100p'>
                    <h5>Welcome</h5>
                    <div className='center-flex'>
                        <Link className='margin-rl-20' to="/">酒店列表</Link>
                        <Link className='margin-rl-20 cursor-pointer' onClick={this.goToDetail}>
                            酒店详情
                        </Link>
                        <Link className='margin-rl-20' to="/approve">申请审核</Link>
                    </div>
                    <FlatButton label="Sign Out" labelStyle={{ color: 'white' }} />
                </div>
            </top-logged>
        );
    }
}

export default TopLogged;