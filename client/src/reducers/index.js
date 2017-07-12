import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import hotelReducer from './hotel.reducer';
import toastReducer from './toast.reducer';
import applyReducer from './apply.reducer';

export default combineReducers({
    userReducer,
    hotelReducer,
    toastReducer,
    applyReducer,
})