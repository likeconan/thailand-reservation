import thaxios from 'utilities/thaxios';
import { showToast } from './toast.action';


export function apply(obj, callback) {
    return function (dispatch) {
        thaxios({
            url: 'apply',
            method: 'POST',
            data: obj
        }).then((list) => {
            dispatch(showToast({
                className: 'success-toast',
                message: '申请成功,请等待审核'
            }))
            if (callback) {
                callback()
            }
        });
    }
}

export function getMyApply() {
    return function (dispatch) {
        thaxios({
            url: 'apply/myself',
            method: 'GET'
        }).then((list) => {
            dispatch({
                type: 'GET_MY_APPLIED',
                payload: list
            })
        })
    }
}

export function getAppliersByRoomId(id) {
    return thaxios({
        url: 'apply/room/' + id,
        method: 'GET'
    });
}

export function approveUsers(ids, callback) {
    return function (dispatch) {
        thaxios({
            url: 'apply',
            method: 'PUT',
            data: {
                ids: ids
            }
        }).then((list) => {
            dispatch(showToast({
                className: 'success-toast',
                message: '修改成功'
            }))
            callback();
        });
    }
}

export function toggleComment(open) {
    return {
        type: 'TOGGLE_COMMENT_DIALOG',
        payload: open
    }
}

export function editComment(val) {
    return {
        type: 'EDIT_COMMENT',
        payload:val
    }
}