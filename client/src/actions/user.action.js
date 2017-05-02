export function editUsername(val) {
    return {
        type: 'EDIT_USERNAME',
        payload: val
    }
}

export function editPassword(val) {
    return {
        type: 'EDIT_PASSWROD',
        payload: val
    }
}