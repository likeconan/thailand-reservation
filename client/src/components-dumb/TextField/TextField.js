import React, { Component } from 'react';

require('./text-field.less');

class TextField extends Component {

    _change = (e) => {
        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    }
    render() {
        return (
            <input onChange={this._change} value={this.props.value} />

        );
    }
}

export default TextField;