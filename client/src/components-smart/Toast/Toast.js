import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
require('./toast.less')

@connect((store) => {
    return {
        open: store.toastReducer.open,
        msgObj: store.toastReducer.msgObj,
    }

})

class Toast extends Component {

    render() {
        return (
            <Snackbar open={this.props.open}
                className={this.props.msgObj.className}
                message={this.props.msgObj.message}
                autoHideDuration={this.props.msgObj.autoHideDuration ? this.props.msgObj.autoHideDuration : 3000}
                action={this.props.msgObj.action} onActionTouchTap={this.props.msgObj.click} />

        );
    }
}

export default Toast;