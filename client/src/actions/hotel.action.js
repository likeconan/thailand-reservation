import validator from 'validator';
import thaxios from 'utilities/thaxios';

export function gethotel(obj) {
    thaxios({
            url: 'hotellist',
            method: 'GET',
            params: obj
        }).then((data) => {
            return data;
        })
}
