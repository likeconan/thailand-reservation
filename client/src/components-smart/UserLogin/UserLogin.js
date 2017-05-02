import React, { Component } from 'react';
import TextField from 'components-dumb/TextField/TextField';
import BasicButton from 'components-dumb/BasicButton/BasicButton';
import { connect } from 'react-redux';
import { editUsername, editPassword } from 'actions/user.action';


require('./user-login.less');


@connect((store) => {
    return {
        loginUser: store.userReducer.loginUser
    }
})


class UserLogin extends Component {

    render() {

        return (
            <user-login>
                <h2 className='white-text margin-tb-20'>Thailand Reservation</h2>
                <TextField
                    onChange={(val) => this.props.dispatch(editUsername(val))}
                    className='margin-tb-20'
                    placeholder='用户名'
                    spanText='@'
                    value={this.props.loginUser.username} />
                <TextField
                    onChange={(val) => this.props.dispatch(editPassword(val))}
                    className='margin-tb-20'
                    placeholder='密码'
                    type='password'
                    spanText='@'
                    value={this.props.loginUser.password} />
                <BasicButton className='btn-info width-100p' label='登录' />
            </user-login>
        );
    }
}

export default UserLogin;