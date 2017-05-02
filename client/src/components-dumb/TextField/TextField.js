import React, { Component } from 'react';
import Classnames from 'classnames';

require('./text-field.less');

class TextField extends Component {

    _change = (e) => {
        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    }
    render() {
        return (
            <div className={Classnames('input-group', this.props.className)}>
                <span className='input-group-addon'>{this.props.spanText}</span>
                <input type={this.props.type ? this.props.type : 'text'}
                    className='form-control'
                    onChange={this._change}
                    placeholder={this.props.placeholder}
                    value={this.props.value} />
            </div>
        );
    }
}

export default TextField;