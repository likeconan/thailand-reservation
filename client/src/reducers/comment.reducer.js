export default function reducer(state = {
    open: false,
    comment: ''
}, action) {
    switch (action.type) {
        case 'TOGGLE_COMMENT_DIALOG':
            return {
                ...state,
                open: action.payload,
            };
        case 'EDIT_COMMENT':
            return {
                ...state,
                comment: action.payload
            }
        default:
            return state;
    }
}