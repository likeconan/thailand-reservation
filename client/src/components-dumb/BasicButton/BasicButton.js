import React, { Component } from 'react';
import Classnames from 'classnames';

class BasicButton extends Component {
    render() {
        return (
            <button
                type="button"
                className={Classnames('btn', this.props.className)}
                onClick={this.props.onClick}>{this.props.label}</button>
        );
    }
}

export default BasicButton;