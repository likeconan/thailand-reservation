import validator from 'validator';

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
    debugger
    return {
        type: 'EDIT_PASSWORD',
        payload: {
            val: val,
            isValidated: !validator.isEmpty(val)
        }
    }
}