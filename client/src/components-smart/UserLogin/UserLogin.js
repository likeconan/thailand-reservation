import React, { Component } from 'react';
import FormTextField from 'components-dumb/FormTextField/FormTextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { editEmail, editPassword, login } from 'actions/user.action';


require('./user-login.less');

@connect((store) => {
    return {
        loginUser: store.userReducer.loginUser,
        validation: store.userReducer.validation,
        isAuthorize: store.userReducer.loggedUser.isAuthorize,
        loading: store.userReducer.loading
    }
})

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        }
    }

    _loginClick = () => {
        this.setState({
            submitted: true
        });
        if (this.props.validation.password && this.props.validation.email && !this.props.loading) {
            this.props.dispatch(login(this.props.loginUser));
        }

    }
    _onKeyPress = (e) => {
        if (e.charCode == 13) {
            this._loginClick()
        }
    }

    render() {
        const width = {
            width: '100%'
        }
        return (
            <user-login>
                {
                    <div>
                        <h2 className='white-text margin-tb-20'>Thailand Reservation</h2>
                        <FormTextField
                            floatingLabelText='Email'
                            white={true}
                            validated={this.props.validation.email}
                            style={width}
                            submitted={this.state.submitted}
                            onChange={(e) => this.props.dispatch(editEmail(e.target.value))}
                            errorText='请输入正确的邮箱地址'
                            value={this.props.loginUser.email} />
                        <FormTextField
                            onChange={(e) => this.props.dispatch(editPassword(e.target.value))}
                            floatingLabelText='Password'
                            white={true}
                            style={width}
                            submitted={this.state.submitted}
                            validated={this.props.validation.password}
                            type='password'
                            errorText='请填写密码'
                            onKeyPress={this._onKeyPress}
                            value={this.props.loginUser.password} />

                        <RaisedButton
                            className='width-100p'
                            label={this.props.loading ? 'Loading...' : 'Get Started'}
                            primary={true}
                            onClick={this._loginClick} />
                    </div>
                }

            </user-login>
        );
    }
}

export default UserLogin;