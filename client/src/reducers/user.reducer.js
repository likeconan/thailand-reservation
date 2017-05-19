export default function reducer(state = {
    loginUser: {
        username: '',
        password: ''
    },
    validation: {
        username: false,
        password: false
    },
    isAuthorize: false,
}, action) {
    switch (action.type) {
        case 'EDIT_USERNAME':
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    username: action.payload.val
                },
                validation: {
                    ...state.validation,
                    username: action.payload.isValidated
                }
            }
        case 'EDIT_PASSWORD':
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    password: action.payload.val
                },
                validation: {
                    ...state.validation,
                    password: action.payload.isValidated
                }
            }
        default:
            return state;
    }
}