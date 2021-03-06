
export default function reducer(state = {
    loginUser: {
        email: '',
        password: ''
    },
    loading: false,
    validation: {
        email: false,
        password: false
    },
    loggedUser: {
        email: '',
        isAuthorize: false,
        userRole: 0 //0 for normal,1 for admin
    },
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
        case 'USER_LOGIN':
            return {
                ...state,
                loggedUser: action.payload,
                loading: false
            }
        case 'USER_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}