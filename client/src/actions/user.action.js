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
        dispatch({
            type: 'USER_LOADING'
        })
        thaxios({
            url: 'users',
            method: 'GET',
            params: obj
        }).then((data) => {
            var user = data.user;
            user.isAuthorize = true;
            dispatch({
                type: 'USER_LOGIN',
                payload: user
            });
            storage.local('authorize', data.token);
            window.location.href = '/';
        })


    }
}

export function authorize(callback) {
    return function (dispatch) {
        thaxios({
            url: 'users/authorize',
            method: 'GET'
        }).then((data) => {
            if (data) {
                data.isAuthorize = true;
                dispatch({
                    type: 'USER_LOGIN',
                    payload: data
                });
            }
            callback();
        })
    }
}

export function logOut() {
    storage.local('authorize', null);

    window.location.href = '/login';
    return {
        type: 'USER_LOGOUT'
    }
}
