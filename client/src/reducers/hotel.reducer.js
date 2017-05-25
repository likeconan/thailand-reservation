export default function reducer(state = {
    HotelInfo:{
        HotelList:[],
        HotelDetail:{
            HotelName:"",
            ImageUrl:""
        }
    },
    
}, action) {
    switch (action.type) {
        case 'get_hotelList':
            return {
                ...state,
                HotelInfo: action.payload
            };
        case 'get_hoteldetail':
            return {
                ...state,
                HotelInfo: action.payload
            };
        default:
            return state;
    }
}