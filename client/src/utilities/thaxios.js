import axios from 'axios';

export default (obj) => {
    var p = new Promise((resolve, reject) => {
        axios({
            url: obj.url,
            baseURL: 'http://localhost:9000/',
            method: obj.method ? obj.method : 'GET',
            params: obj.params,
            data: obj.data
        }).then((response) => {
            if (response.data.isSuccess) {
                resolve(response.data.data);
            } else {
                console.log(response.data.errors);
                reject(response.data.errors);
            }
        }).catch((err) => {
            //need to be do with toast
            console.log(err);
            reject(err);
        });
    })
    return p;
}
