import validator from 'validator';
import thaxios from 'utilities/thaxios';

export function gethotel(obj) {
    return function (dispatch) {
        thaxios({
                url: 'hotellist',
                method: 'GET',
                params: obj
            }).then((list)=>{
                debugger;
                dispatch({
                    type: 'get_hotelList',
                    payload: {
                        hotelList: list.map((data) => {
                            return data;
                        })
                    }
                })
            });
    }
}
