import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import hotelReducer from './hotel.reducer';
import toastReducer from './toast.reducer';

export default combineReducers({
    userReducer,
    hotelReducer,
    toastReducer
})