export default function reducer(state = {
    myApplied: []
}, action) {
    switch (action.type) {
        case 'GET_MY_APPLIED':
            return {
                ...state,
                myApplied: action.payload,
            };

        default:
            return state;
    }
}