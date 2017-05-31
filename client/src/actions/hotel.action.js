import validator from 'validator';
import thaxios from 'utilities/thaxios';

export function getHotel(obj) {
    return function (dispatch) {
        thaxios({
                url: 'hotellist',
                method: 'GET',
                params: obj
            }).then((list)=>{
                dispatch({
                    type: 'get_hotelList',
                    payload: {
                        HotelList: list.map((data) => {
                            return data;
                        })
                    }
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
            }).then((data)=>{
                dispatch({
                    type: 'get_hoteldetail',
                    payload: {
                        HotelDetail: data
                    }
                })
            });
    }
}
