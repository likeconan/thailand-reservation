export default function reducer(state = {
    loginUser: {
        email: '',
        password: ''
    },
    validation: {
        email: false,
        password: false
    },
    isAuthorize: false,
}, action) {
    switch (action.type) {
        case 'EDIT_EMAIL':
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    email: action.payload.val
                },
                validation: {
                    ...state.validation,
                    email: action.payload.isValidated
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