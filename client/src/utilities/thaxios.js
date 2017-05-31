import axios from 'axios';
import store from 'store';
import storage from 'store2';
import { showToast } from 'actions/toast.action';

export default (obj) => {
    var p = new Promise((resolve, reject) => {
        axios({
            url: obj.url,
            baseURL: 'http://localhost:3030/',
            method: obj.method ? obj.method : 'GET',
            params: Object.assign({ token: storage.local('authorize') }, obj.params),
            data: obj.data
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
            if (err.response && err.response.status === 403) {
                store.dispatch(showToast({
                    className: 'error-toast',
                    message: '请先登录后再操作'
                }));
            } else {
                store.dispatch(showToast({
                    className: 'error-toast',
                    message: 'Opps,内部出现问题了，我们会尽快解决'
                }))
            }

            reject(err);
        });
    })
    return p;
}
