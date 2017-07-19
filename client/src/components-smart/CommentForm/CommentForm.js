import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editComment } from 'actions/apply.action'
import FormTextField from 'components-dumb/FormTextField/FormTextField'
import RaisedButton from 'material-ui/RaisedButton'

require('./comment-form.less')


@connect((store) => {
    return {
        comment: store.applyReducer.applyObj.comment,
        isValidated: store.applyReducer.isValidated
    }
})

class CommentForm extends Component {

    _editComment = (e) => {
        this.props.dispatch(editComment(e.target.value))
    }

    render() {
        return (
            <div>
                <div className='comment-placeholder'>
                    <small>
                        1. 请在留言内填写您期望的入住时间 （Checkin YYYY-MM-DD， checkout YYYY-MM-DD）。
                    </small>
                    <small>
                        2. 请确认是否愿意与其他人共享一间房间。
                        </small>
                    <small>
                        3. 如果您有任何特殊要求，请填写在留言内。
                    </small>
                    <small>管理人员会尽快与您邮件确认入住时间，多谢。</small>
                </div>

                <FormTextField
                    errorText='请填写备注信息'
                    fullWidth={true}
                    submitted={this.props.submitted}
                    validated={this.props.isValidated}
                    onChange={this._editComment}
                    multiLine={true}
                    value={this.props.comment}
                />
            </div>
        );
    }
}

export default CommentForm;