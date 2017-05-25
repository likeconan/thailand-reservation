import validator from 'validator';
import thaxios from 'utilities/thaxios';
import history from 'utilities/history';

export function editEmail(val) {
    return {
        type: 'EDIT_EMAIL',
        payload: {
            val: val,
            isValidated: validator.isEmail(val)
        }
    }
}

export function editPassword(val) {
    return {
        type: 'EDIT_PASSWORD',
        payload: {
            val: val,
            isValidated: !validator.isEmpty(val)
        }
    }
}

export function login(obj) {
    return function (dispatch) {
        // thaxios({
        //     url: 'users',
        //     method: 'GET',
        //     params: obj
        // }).then((data) => {
        //     console.log(data)
        // })
        const user = {
            isAuthorize: true,
            userRole: 1,
            email: 'liyijia428@126.com'
        }
        dispatch({
            type: 'USER_LOGIN',
            payload: user
        })
    }
}