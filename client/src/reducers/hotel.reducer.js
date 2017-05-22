export default function reducer(state = {
    hotelInfo: {
        hotelList:[]
    }
}, action) {
    switch (action.type) {
        case 'get_hotelList':
            return {
                ...state,
                hotelInfo: action.payload
            }
        default:
            return state;
    }
}