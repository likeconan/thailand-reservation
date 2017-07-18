import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import { toggleComment } from 'actions/comment.action';

@connect((store) => {
    return {
        open: store.commentReducer.open
    }
})
class CommentDialog extends Component {

    handleClose = () => {
        this.props.dispatch(toggleComment(false))
    };

    render() {
        return (
            <Dialog
                title="Dialog With Actions"
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.handleClose}
            >
                The actions in this window were passed in as an array of React objects.
        </Dialog>
        );
    }
}

export default CommentDialog;