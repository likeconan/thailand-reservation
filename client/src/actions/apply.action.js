import thaxios from 'utilities/thaxios';
import { showToast } from './toast.action';


export function apply(obj) {
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
        });
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