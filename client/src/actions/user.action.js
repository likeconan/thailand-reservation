import validator from 'validator';
import thaxios from 'utilities/thaxios';
import Navigate from 'utilities/navigate';
import storage from 'store2';

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
        thaxios({
            url: 'users',
            method: 'GET',
            params: obj
        }).then((data) => {
            data.isAuthorize = true;
            dispatch({
                type: 'USER_LOGIN',
                payload: data
            });
            storage.local('isAuthorize', true);
        })


    }
}

export function logout(){

}
