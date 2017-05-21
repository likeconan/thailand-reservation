import axios from 'axios';
import store from 'store';
import { showToast } from 'actions/toast.action';

export default (obj) => {
    var p = new Promise((resolve, reject) => {
        axios({
            url: obj.url,
            baseURL: 'http://localhost:3030/',
            method: obj.method ? obj.method : 'GET',
            data: obj.params
        }).then((response) => {
            if (response.data.isSuccess) {
                resolve(response.data.data);
            } else {
                store.dispatch(showToast({
                    className: 'error-toast',
                    message: response.data.errors
                }))
            }
        }).catch((err) => {
            //need to be do with toast
            store.dispatch(showToast({
                className: 'error-toast',
                message: 'Opps,内部出现问题了，我们会尽快解决'
            }))
            reject(err);
        });
    })
    return p;
}
