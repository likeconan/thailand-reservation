import { browserHistory } from 'react-router';
import storage from 'store2';
import store from '../store';

class Navigate {
    goTo(path){
        browserHistory.push(path);
    }
}

var navigate = new Navigate();
module.exports = navigate;