import React, { Component } from 'react';
import TextField from 'components-dumb/TextField/TextField'
import { connect } from 'react-redux';
import { editUsername } from 'actions/user.action';


require('./user-login.less');


@connect((store) => {
    return {
        username: store.userReducer.username
    }
})


class componentName extends Component {

    _onChange = (val) => {
        this.props.dispatch(editUsername(val));
    }

    render() {
        console.log(123);
        return (
           <user-login>
               hello world
                <TextField onChange={this._onChange} value={this.props.username} />
            </user-login>
        );
    }
}

export default componentName;