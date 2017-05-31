export default function reducer(state = {
    HotelList: [],
    HotelDetail: {
        SafeFacilities: [],
        UsefulFacilities: [],
        RoomList: []
    }

}, action) {
    switch (action.type) {
        case 'GET_HOTEL_LIST':
            return {
                ...state,
                HotelList: action.payload
            };
        case 'GET_HOTEL_DETAIL':
            return {
                ...state,
                HotelDetail: action.payload
            };
        default:
            return state;
    }
}