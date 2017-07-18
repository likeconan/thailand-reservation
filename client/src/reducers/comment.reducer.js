export default function reducer(state = {
    open: false
}, action) {
    switch (action.type) {
        case 'TOGGLE_COMMENT_DIALOG':
            return {
                ...state,
                open: action.payload,
            };

        default:
            return state;
    }
}