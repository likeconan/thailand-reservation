import thaxios from 'utilities/thaxios';
import { showToast } from './toast.action';


export function apply(obj) {
    return function (dispatch) {
        debugger
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