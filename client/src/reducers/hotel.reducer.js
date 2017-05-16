export default function reducer(state = {
    hotels: [{
        name:'test-hotel'
    }]
}, action) {
    switch (action.type) {
        case 'GET_SEARCHED_HOTELS':
            return {
                ...state,
                hotels: action.payload
            }
        default:
            return state;
    }
}