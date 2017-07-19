import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import { toggleComment } from 'actions/apply.action';
import CommentForm from 'components-smart/CommentForm/CommentForm'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import { apply } from 'actions/apply.action';

@connect((store) => {
    return {
        open: store.applyReducer.open,
        applyObj: store.applyReducer.applyObj,
        isValidated: store.applyReducer.isValidated,
    }
})
class CommentDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        }
    }


    handleClose = () => {
        this.props.dispatch(toggleComment({
            open: false,
            roomId: ''
        }))
    };

    apply = () => {

        this.setState({
            submitted: true
        })
        if (this.props.isValidated) {
            this.props.dispatch(apply(
                this.props.applyObj,
                this.handleClose)
            );
        }
    }

    render() {
        const actions = [
            <FlatButton
                label="取消"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="确认"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.apply}
            />,
        ];
        return (
            <Dialog
                title="预订备注"
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.handleClose}
            >
                <CommentForm submitted={this.state.submitted} />
            </Dialog>
        );
    }
}

export default CommentDialog;