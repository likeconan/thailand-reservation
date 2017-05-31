import { browserHistory } from 'react-router';
import storage from 'store2';
import store from '../store';

class Navigate {
    goToLogin() {
        const path = '/life';
        storage.session('ss.profile.user.id', userId);
        browserHistory.push(path);
    }
    goTo(path){
        browserHistory.push(path);
    }
}

var navigate = new Navigate();
module.exports = navigate;