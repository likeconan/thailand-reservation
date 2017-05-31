import validator from 'validator';
import thaxios from 'utilities/thaxios';

export function getHotel(obj) {
    return function (dispatch) {
        thaxios({
            url: 'hotellist',
            method: 'GET',
            params: obj
        }).then((list) => {
            dispatch({
                type: 'GET_HOTEL_LIST',
                payload: list
            })
        });
    }
}

export function getHotelDetail(obj) {
    return function (dispatch) {
        thaxios({
            url: 'hoteldetail',
            method: 'get',
            params: obj
        }).then((data) => {
            dispatch({
                type: 'GET_HOTEL_DETAIL',
                payload: data
            })
        });
    }
}
