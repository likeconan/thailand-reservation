export default function reducer(state = {
    loginUser: {
        username: '',
        password: ''
    }
}, action) {
    switch (action.type) {
        case 'EDIT_USERNAME':
            return {
                ...state,
                loginUser: {
                    ...state,
                    username: action.payload
                }
            }
        case 'EDIT_PASSWORD':
            return {
                ...state,
                loginUser: {
                    ...state,
                    password: action.payload
                }
            }
        default:
            return state;
    }
}