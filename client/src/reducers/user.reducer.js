export default function reducer(state = {
    username: ''
}, action) {
    switch (action.type) {
        case 'EDIT_USERNAME':
            return {
                ...state,
                username: action.payload
            }
        default:
            return state;
    }
}