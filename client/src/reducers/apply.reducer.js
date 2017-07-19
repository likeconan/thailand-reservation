export default function reducer(state = {
    myApplied: [],
    open: false,
    applyObj: {
        roomId: '',
        comment: ''
    },
    isValidated: false
}, action) {
    switch (action.type) {
        case 'GET_MY_APPLIED':
            return {
                ...state,
                myApplied: action.payload,
            };
        case 'TOGGLE_COMMENT_DIALOG':
            return {
                ...state,
                open: action.payload.open,
                applyObj: {
                    ...state.applyObj,
                    roomId: action.payload.roomId
                }
            };
        case 'EDIT_COMMENT':
            return {
                ...state,
                applyObj: {
                    ...state.applyObj,
                    comment: action.payload
                },
                isValidated: !!action.payload
            }

        default:
            return state;
    }
}