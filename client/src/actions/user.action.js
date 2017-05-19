import validator from 'validator';
import thaxios from 'utilities/thaxios';

export function editUsername(val) {
    return {
        type: 'EDIT_USERNAME',
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
        thaxios({
            url: 'users',
            method: 'GET',
            params: obj
        }).then((data) => {
            console.log(data)
        })
    }
}