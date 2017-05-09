import React, { Component } from 'react';
import Classnames from 'classnames';

require('./full-background.less');

class FullBackground extends Component {
    render() {
        return (
            <full-background class={Classnames('back-cover', this.props.className)} style={{ backgroundImage: 'url("' + this.props.src + '")' }}>
                {this.props.children}
            </full-background>
        );
    }
}

export default FullBackground;